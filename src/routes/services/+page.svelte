<script lang="ts">
  import { fly } from "svelte/transition";

  /*-------- data --------*/
  const services = [
    {
      title: 'Brand Strategy',
      slug: 'We turn scattered ideas into clear, differentiated positioning.',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      title: 'Digital Campaigns',
      slug: 'Performance creatives that actually convert across Google, Meta & TikTok.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Web & E-commerce',
      slug: 'Headless sites that load fast, rank high and sell harder.',
      icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
    },
    {
      title: 'Motion & Video',
      slug: 'Scroll-stopping reels, explainers and brand films—concept to cut.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14V10z'
    },
    {
      title: 'Print & Packaging',
      slug: 'Tactile design that lives beyond the screen—labels, look-books & OOH.',
      icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
    },
    {
      title: 'Growth Retainers',
      slug: 'Ongoing data-driven experiments that compound month after month.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V5z'
    }
  ];

  const process = [
    { step: 1, title: 'Discover', desc: 'Deep-dive workshops, audits & data pulls.' },
    { step: 2, title: 'Define', desc: 'Positioning, messaging and channel plan.' },
    { step: 3, title: 'Design', desc: 'High-impact creatives & prototypes.' },
    { step: 4, title: 'Deploy', desc: 'Launch, measure, iterate—forever.' }
  ];

  const faqs = [
    {
      q: 'How do you price projects?',
      a: 'We offer fixed-scope packages for clearly-defined deliverables and flexible retainers for ongoing growth work.'
    },
    {
      q: 'What’s the typical timeline?',
      a: 'Brand sprints run 3–4 weeks, full-funnel campaigns 6–8 weeks, e-commerce builds 8–12 weeks.'
    },
    {
      q: 'Do you only work with startups?',
      a: 'Nope. We partner with anyone who wants to move fast—seed-stage to Fortune 500 spin-offs.'
    }
  ];
</script>

<svelte:head>
  <title>Services – Leora Digitals</title>
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
        Services that <span class="text-primary">Scale</span> Brands
      </h1>
      <p class="text-lg text-foreground/90 leading-relaxed">
        From first sketch to final KPI, we handle every touch-point your customer meets—so you can
        focus on running the business, not wrangling vendors.
      </p>
      <a
        href="/contact"
        class="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
      >
        Bundle a package
      </a>
    </div>

    <!-- Right pin-wheel -->
    <div class="relative hidden lg:flex h-96 items-center justify-center">
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

<!-- 2. SERVICE CARDS -->
<section class="py-20 md:py-24 px-4">
  <div class="max-w-7xl mx-auto space-y-12">
    <h2 class="text-4xl md:text-5xl font-bold text-foreground text-center">What we can do for you</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as s}
        <div
          class="group relative p-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition"
        >
          <div
            class="w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              ><path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d={s.icon}
              /></svg
            >
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
          <p class="text-foreground/70">{s.slug}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 3. PROCESS -->
<section class="py-20 md:py-24 px-4 bg-accent/5">
  <div class="max-w-6xl mx-auto space-y-12">
    <h2 class="text-4xl md:text-5xl font-bold text-foreground text-center">How we work</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each process as p}
        <div class="text-center space-y-3">
          <div
            class="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center"
          >
            {p.step}
          </div>
          <h3 class="text-xl font-semibold text-foreground">{p.title}</h3>
          <p class="text-foreground/70">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 4. FAQ -->
<section class="py-20 md:py-24 px-4">
  <div class="max-w-4xl mx-auto space-y-10">
    <h2 class="text-4xl md:text-5xl font-bold text-foreground text-center">Questions we get asked a lot</h2>

    <div class="space-y-6">
      {#each faqs as f}
        <details class="group rounded-xl border border-primary/10 open:bg-primary/5 p-5">
          <summary class="flex justify-between items-center cursor-pointer list-none">
            <span class="text-lg font-semibold text-foreground">{f.q}</span>
            <span class="text-primary group-open:rotate-45 transition">+</span>
          </summary>
          <p class="mt-3 text-foreground/80" transition:fly={{y:20, duration: 200}}>{f.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- 5. CTA BANNER -->
<section class="py-20 md:py-24 px-4 bg-primary text-primary-foreground">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <h2 class="text-4xl md:text-5xl font-bold">Ready to move faster?</h2>
    <p class="text-lg opacity-90">
      Pick the services you need, bundle them into one statement of work, and let’s ship.
    </p>
    <a
      href="/contact"
      class="inline-block px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:shadow-lg transition"
    >
      Build my bundle
    </a>
  </div>
</section>