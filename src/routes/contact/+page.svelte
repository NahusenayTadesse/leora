<script lang="ts">
  import { glass } from '$lib/global.svelte';
  import { Instagram, Linkedin, Loader } from '@lucide/svelte';

  /*-------- form state --------*/




  const budgets = ['Digital Marketing', 'Production', 'Printing'];

  import * as Select from "$lib/components/ui/select/index.js";


  import { superForm } from 'sveltekit-superforms';
  import { ContactFormSchema as schema } from './schema.js';
  import { zod4Client } from 'sveltekit-superforms/adapters';


  let { data } = $props();

  // Client API:
  const { form, errors, delayed, enhance, constraints } = superForm(data.form,
     {validators: zod4Client(schema)}
  );
   let value = $state("");

  const triggerContent = $derived(
    budgets.find((f) => f === value) ?? "Select a service"
  );
</script>

<svelte:head>
  <title>Contact – Leora Digitals</title>
</svelte:head>

<!-- 1. HERO -->
<section class="relative py-20 md:py-32 overflow-hidden">
  <div
    class="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-accent/5"
  ></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
    <!-- Left copy -->
    <div class="space-y-8">
      <h1 class="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
        Let’s build something <span class="text-primary">amazing</span> together
      </h1>
      <p class="text-lg text-foreground/90 leading-relaxed">
        Fill out the form or drop us a line at
        <a href="mailto:hello@leoradigitals.com" class="underline hover:text-primary">hello@leoradigitals.com</a>.
        We usually reply within 24 hours.
      </p>

      <!-- socials -->
      <div class="flex items-center gap-4">

        <a
          href="https://linkedin.com/company/leoradigitals"
          target="_blank"
          rel="noopener"
          class="w-10 h-10 rounded-full border border-primary/20 grid place-items-center hover:border-primary hover:text-primary transition"
        >
          <Linkedin class="w-5 h-5" />
      </a>
        <a
          href="https://instagram.com/leoradigitals"
          target="_blank"
          rel="noopener"
          class="w-10 h-10 rounded-full border border-primary/20 grid place-items-center hover:border-primary hover:text-primary transition"
        >
          <Instagram class="w-5 h-5" />
        </a>
      </div>
    </div>

    <!-- Right pin-wheel -->
    <div class="relative h-96 lg:flex hidden items-center justify-center">
      <div class="relative w-lg h-lg flex items-center justify-center">
        <div
          class="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin"
          style="animation-duration: 20s"
        ></div>
        <div
          class="absolute inset-8 border-2 border-accent/30 rounded-full animate-spin"
          style="animation-direction: reverse; animation-duration: 15s"
        ></div>

        <!-- <svg
          class="w-48 h-48 text-primary drop-shadow-2xl"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(100,100)">
            {#each Array(8) as _, i}
              <path
                d={`M0,0 L${Math.cos((i * Math.PI) / 4) * 80},${Math.sin((i * Math.PI) / 4) * 80}`}
                stroke="currentColor"
                stroke-width="3"
                opacity={1 - i * 0.08}
              />
              <polygon
                points={`0,0 ${Math.cos((i * Math.PI) / 4) * 80},${Math.sin((i * Math.PI) / 4) *
                  80} ${Math.cos(((i + 1) * Math.PI) / 4) * 60},${Math.sin(((i + 1) * Math.PI) / 4) * 60}`}
                fill="currentColor"
                opacity={0.6 - i * 0.07}
              />
            {/each}
          </g>
        </svg> -->
        <img src="/images/ContactImage.webp" alt="Contact Illustration"  />
        <div
          class="absolute inset-0 bg-linear-to-br from-primary via-transparent to-accent rounded-full blur-3xl opacity-20 -z-10"
        ></div>
      </div>
    </div>
  </div>
</section>

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
<section id="contact" class="py-20 w-full  md:py-24 px-4">
  <div class="mx-auto grid md:grid-cols-5 gap-12 lg:px-56 px-0">
    <!-- Left form -->
    <form
      use:enhance
      method="post"
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
