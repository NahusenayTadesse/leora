import { fail, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { ContactFormSchema as schema } from './contact/schema'
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