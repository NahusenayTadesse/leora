import { fail, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { ContactFormSchema as schema } from './schema'
import { setFlash } from 'sveltekit-flash-message/server';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { contactSubmissions } from '$lib/server/db/schema';

// Define outside the load function so the adapter can be cached

export const load = async () => {
  const form = await superValidate(zod4(schema));

  // Always return { form } in load functions
  return { form };
}; 


export const actions: Actions = {
  default: async ({ request, cookies }) => { 

   const form = await superValidate(request, zod4(schema));



     if (!form.valid) {
      setFlash({ type: 'error', message: "Please check your form." }, cookies);
      return fail(400, { form });
    }  

       const { name, email, phone, company, service, message } = form.data;

       await db.insert(contactSubmissions).values(
         { 
           fullName: name,
           email,
           phone, company, message, service
         }
       )

       setFlash({ type: 'success', message: "Message Sent succeful!" }, cookies);

  }  
  
  
  

}