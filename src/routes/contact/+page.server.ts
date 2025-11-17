import { fail, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { ContactFormSchema as schema } from './schema'
import { setFlash } from 'sveltekit-flash-message/server';
import type { Actions } from './$types';

// Define outside the load function so the adapter can be cached

export const load = async () => {
  const form = await superValidate(zod4(schema));

  // Always return { form } in load functions
  return { form };
}; 


export const actions: Actions = {
  default: async ({ request, cookies }) => { 

   const form = await superValidate(request, zod4(schema));
    console.log(form);


     if (!form.valid) {
      setFlash({ type: 'error', message: "Please check your form." }, cookies);
      return fail(400, { form });
    }

       setFlash({ type: 'success', message: "Message Sent succeful!" }, cookies);

  }  
  
  
  

}