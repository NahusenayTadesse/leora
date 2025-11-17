<script lang="ts">
  import { onMount } from 'svelte';

  /*-------- form state --------*/
  let name = '';
  let email = '';
  let company = '';
  let budget = '';
  let message = '';
  let sent = false;
  let loading = false;

  async function handleSubmit(e: Event) {
    e.preventDefault();
    loading = true;
    // fake delay
    await new Promise(r => setTimeout(r, 1200));
    sent = true;
    loading = false;
  }

  const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k – $100k', '> $100k'];
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
          href="https://twitter.com/leoradigitals"
          target="_blank"
          rel="noopener"
          class="w-10 h-10 rounded-full border border-primary/20 grid place-items-center hover:border-primary hover:text-primary transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.08 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.35 0-.69-.02-1.03-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.09z"/></svg>
        </a>
        <a
          href="https://linkedin.com/company/leoradigitals"
          target="_blank"
          rel="noopener"
          class="w-10 h-10 rounded-full border border-primary/20 grid place-items-center hover:border-primary hover:text-primary transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a
          href="https://instagram.com/leoradigitals"
          target="_blank"
          rel="noopener"
          class="w-10 h-10 rounded-full border border-primary/20 grid place-items-center hover:border-primary hover:text-primary transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
        </a>
      </div>
    </div>

    <!-- Right pin-wheel -->
    <div class="relative h-96 flex items-center justify-center">
      <div class="relative w-80 h-80 flex items-center justify-center">
        <div
          class="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin"
          style="animation-duration: 20s"
        ></div>
        <div
          class="absolute inset-8 border-2 border-accent/30 rounded-full animate-spin"
          style="animation-direction: reverse; animation-duration: 15s"
        ></div>

        <svg
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
        </svg>

        <div
          class="absolute inset-0 bg-linear-to-br from-primary via-transparent to-accent rounded-full blur-3xl opacity-20 -z-10"
        ></div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FORM + DETAILS -->
<section class="py-20 md:py-24 px-4">
  <div class="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
    <!-- Left form -->
    <form
      on:submit={handleSubmit}
      class="md:col-span-3 space-y-6"
    >
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-sm font-medium text-foreground mb-2">Name *</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            bind:value={name}
            class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-foreground mb-2">Email *</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            bind:value={email}
            class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div>
        <label for="company" class="block text-sm font-medium text-foreground mb-2">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          bind:value={company}
          class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div>
        <label for="budget" class="block text-sm font-medium text-foreground mb-2">Budget range</label>
        <select
          id="budget"
          name="budget"
          bind:value={budget}
          class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="">Select...</option>
          {#each budgets as b}
            <option value={b} class="text-foreground">{b}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-foreground mb-2">Message *</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          bind:value={message}
          class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        class="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
      >
        {loading ? 'Sending…' : sent ? 'Sent ✓' : 'Send message'}
      </button>

      {#if sent}
        <p class="text-sm text-green-600">Thanks! We’ll get back to you within 24 hours.</p>
      {/if}
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
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.374360736448!2d38.77998038360626!3d8.991524303768808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a47172e483%3A0x1cab350ec519cb11!2sEthio%20IQ%20Tutors!5e0!3m2!1sen!2sus!4v1763022116612!5m2!1sen!2sus" width="600" height="450" style="border:0;" title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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