
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { env } from '$env/dynamic/private';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { ProjectSchema as schema } from '$lib/projects';
const FILES_DIR: string = env.FILES_DIR ?? '.tempFiles';

if (!fs.existsSync(FILES_DIR)) {
  fs.mkdirSync(FILES_DIR, { recursive: true });
}

import { db } from "$lib/server/db";
import { eq, and, sql } from "drizzle-orm";
import type { Actions, PageServerLoad } from "./$types";
import {setError, fail } from 'sveltekit-superforms';
import { setFlash } from 'sveltekit-flash-message/server';



export const load: PageServerLoad = async () => {


   
       const form = await superValidate(zod4(schema));
      return {
         form
      }
}


export const actions: Actions = {
  addProject: async ({request, cookies, locals}) => {
     const form = await superValidate(request, zod4(schema));
 

     if (!form.valid) {
           // Stay on the same page and set a flash message
           setFlash({ type: 'error', message: "Please check your form data." }, cookies);
           return fail(400, { form });
         }
     
   const {cat, paymentStatus, amount, paymentMethod, image } = form.data;


   try{

    const { randomUUID } = await import('node:crypto');

    const generateRandomId = (size = 8): string => {
        const ts = Date.now().toString(36); // timestamp component
        const uid = randomUUID().replace(/-/g, '').slice(0, size); // random component
        return `${ts}-${uid}`;
    };

    const imageName = `${generateRandomId()}${path.extname(image.name)}`;

const file_path: string = path.normalize(
  path.join(FILES_DIR, imageName));    		

    const nodejs_wstream = fs.createWriteStream(file_path);
    const web_rstream = image.stream();
    const nodejs_rstream = Readable.fromWeb(web_rstream);
    await pipeline(nodejs_rstream, nodejs_wstream).catch(() => {
      return fail(500);
    });

      

      


        delete form.data.image;

       setFlash({ type: 'success', message: "Successfully Confirmed Appointment "  }, cookies);
    return {   
     form    
 }; 
} catch(err){
         
         setFlash({ type: 'error', message: `Unexpected Error: ${err.message}`}, cookies);
                 return fail(400, {
                 form
               });
    }

  },

  delete: async({cookies, params })=> {
 
 


    try {
      if (!id) {
      setFlash({ type: 'error', message: `There is no appointment with the provided ID.` }, cookies);
        return fail(400);
      }

      await db.delete(appointments).where(eq(appointments.id, id));

       
        setFlash({ type: 'success', message: "Appointment Deleted Successfully!" }, cookies);

    } catch (err) {
      console.error('Error deleting appointment:', err);
      setFlash({ type: 'error', message: `Unexpected Error: ${err?.message}` }, cookies);
      return fail(400)
    }
    


  },
}