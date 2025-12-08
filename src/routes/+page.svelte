<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
	import CTA from '$lib/components/cta.svelte';

	
  import { superForm } from 'sveltekit-superforms';
  import { ContactFormSchema as schema } from './contact/schema.js';
  import { zod4Client } from 'sveltekit-superforms/adapters';
    import { glass } from '$lib/global.svelte.js';
    import { Loader } from '@lucide/svelte';
	  import * as Select from "$lib/components/ui/select/index.js";

 
   let { data } = $props();
   
  const { form, errors, delayed, enhance, constraints } = superForm(data.form, 
     {validators: zod4Client(schema)}
  );
    const budgets = ['Digital Marketing', 'Production', 'Printing'];
     

	 let value = $state("");
 
  const triggerContent = $derived(
    budgets.find((f) => f === value) ?? "Select a service"
  );
</script>
<svelte:head>
  <title>Leora Digitals </title>
</svelte:head>

<Hero />
<Services />
<CTA />



		
	




{#snippet fe(labeler: '', name: '', type: '', placeholder: '', required: false )}
   <div class="flex flex-col gap-2  ">
        <div>
          <label for="name" class="block text-sm font-medium text-foreground mb-2">{labeler} {required ? '*': ''}</label>
          <input
            {required}
            {type}
            id="name"
            {placeholder}
            {name}
            bind:value={$form[name]}
            {...$constraints[name]}
            class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 
            focus:outline-none focus:ring-2 focus:ring-primary/40
            placeholder:text-foreground"
          />
        </div>
      {#if $errors[name]}
         <p class="text-red-500">{$errors[name]}</p>
        
      {/if}
    </div>
{/snippet}

<!-- 2. FORM + DETAILS -->
<section class="py-20 w-full  md:py-24 px-4">
  <div class="mx-auto grid md:grid-cols-5 gap-12 lg:px-56 px-0">
    <!-- Left form -->
    <form
      use:enhance 
      method="post"
	  action="/contact"
      class="md:col-span-3 {glass} rounded-lg p-4 space-y-6"
    > 
    <h2 class="text-center text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h2>
      <div class="grid sm:grid-cols-2 gap-6">
        {@render fe('Full Name', 'name', 'text', 'Enter Your Full Name', true)}
        {@render fe('Email', 'email', 'email', 'Enter Your Email', true )}
        {@render fe('Phone', 'phone', 'tel', '+251 911 010203', true )}
        {@render fe('Company', 'company', 'text', 'Enter Your Company', false )}
        

      

      <div class="col-span-2">
        <label for="service" class="block text-sm font-medium text-foreground mb-2">What service are you looking for</label>
        <Select.Root type="single" name="service" bind:value>
  <Select.Trigger  class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 
            focus:outline-none focus:ring-2 focus:ring-primary/40
            placeholder:text-foreground">
    {triggerContent}
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Label>Services</Select.Label>
      {#each budgets as service }
        <Select.Item
          value={service}
          label={service}
          disabled={service === ""}
        >
          {service}
        </Select.Item>
      {/each}
    </Select.Group>
  </Select.Content>
</Select.Root>
      </div>
        {#if $errors.service}
           <p class="text-red-500">{$errors.service}</p>
        {/if}

      <div class="col-span-2">
        <label for="message" class="block text-sm font-medium text-foreground mb-2">Message *</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          bind:value={$form.message}
          placeholder="Anything special you want to add"
          class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
        ></textarea>
         {#if $errors.message}
           <p class="text-red-500">{$errors.message}</p>
        {/if}
      </div>

      <button
        type="submit"
        disabled={$delayed}
        class="inline-flex flex-row gap-2 justify-center items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
      > 
         {#if $delayed}
           <Loader class="animate-spin" />
         {/if}

        {$delayed ? 'Sending…' : 'Send message'}
      </button>
  
       </div>
     
    </form>

    <!-- Right details -->
    <div class="md:col-span-2 space-y-8">
      <div>
        <h3 class="text-2xl font-bold text-foreground mb-2">Email us</h3>
        <a href="mailto:hello@leoradigitals.com" class="text-primary hover:underline">hello@leoradigitals.com</a>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-foreground mb-2">Call us</h3>
        <a href="tel:0947287777" class="text-primary hover:underline">+251 947287777</a>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-foreground mb-2">Visit us</h3>
        <p class="text-foreground/80">
          Japan, Bole, Addis Ababa<br />
        </p>
      </div>

      <!-- Map placeholder -->
      <div class="rounded-2xl overflow-hidden border border-primary/10 h-64 bg-gray-100">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.374360736448!2d38.77998038360626!3d8.991524303768808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a47172e483%3A0x1cab350ec519cb11!2sEthio%20IQ%20Tutors!5e0!3m2!1sen!2sus!4v1763022116612!5m2!1sen!2sus" 
        class="w-full h-full" style="border:0;" title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</section>

<!-- 3. CTA BANNER -->
<section class="py-20 md:py-24 px-4 bg-primary text-primary-foreground">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <h2 class="text-4xl md:text-5xl font-bold">Not ready yet?</h2>
    <p class="text-lg opacity-90">
      Grab our 20-page Brand-Growth Playbook—totally free, no inbox spam.
    </p>
    <a
      href="/resources/playbook"
      class="inline-block px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:shadow-lg transition"
    >
      Download playbook
    </a>
  </div>
</section>

