<script lang="ts">
  import { glass } from '$lib/global.svelte';
  import { Eye, Heart, Target } from '@lucide/svelte';
  import { onMount } from 'svelte';

  /*-------- data --------*/
  const stats = [
    { label: 'Brands scaled', value: '120+' },
    { label: 'Projects delivered', value: '300+' },
    { label: 'Five-star reviews', value: '98 %' },
    { label: 'Cups of coffee', value: '2.4 k' }
  ];

  const team = [
    {
      name: 'Aisha Rahman',
      role: 'Founder & Strategy Lead',
      img: 'https://i.pravatar.cc/400?img=1'
    },
    {
      name: 'Leo Fernandez',
      role: 'Creative Director',
      img: 'https://i.pravatar.cc/400?img=2'
    },
    {
      name: 'Priya Nanda',
      role: 'Growth Engineer',
      img: 'https://i.pravatar.cc/400?img=3'
    }
  ]; 

  let list = [
     `● Light: Clarity and transparency in all we do.`,
`● Excellence: Delivering the highest quality in every project.`,
`● Outreach: Authentic connection with your audience.`,
`● Radiance: Passionate and creative work that is bright.`,
`● Accountability: Owning our results and your success.`
  ]
</script>

<svelte:head>
  <title>About – Leora Digitals</title>
</svelte:head>

<!-- 1. HERO (kept from earlier) -->
<section class="relative py-20 md:py-32 overflow-hidden">
  <div
    class="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-accent/5"
  ></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
    <!-- Left copy -->
    <div class="space-y-8">
      <h1 class="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
        Crafting Stories That <span class="text-primary">Last</span>
      </h1>
      <p class="text-lg text-foreground/90 leading-relaxed">
       Leora Digitals is a strategic creative firm rooted in Addis Ababa, dedicated to fueling
business acceleration and growth. We partner with enterprises that are seeking to transcend
stagnation, offering the clarity and momentum needed to achieve substantial market
distinction.
We see ourselves as the vital spark for businesses navigating complexity. Where challenges
exist, we provide focused illumination, a clear path forward built on ingenious ideas and
precise execution.
      </p>

      <div class="grid sm:grid-cols-3 gap-4 pt-6">
        {#each ['Strategy', 'Design', 'Scale'] as card}
          <div
            class="border border-primary/20 rounded-xl p-4 text-center hover:border-primary transition"
          >
            <div class="text-2xl font-semibold text-primary">{card}</div>
          </div>
        {/each}
      </div>

      <a
        href="/contact"
        class="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
      >
        Work with us
      </a>
    </div>

    <!-- Right pin-wheel -->
    <div class="relative h-96 hidden lg:flex items-center justify-center">
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

<!-- 2. MISSION -->
<section class="py-20 md:py-24 px-4">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <h2 class="text-4xl md:text-5xl font-bold text-foreground">Why We Exist</h2>
    <p class="text-lg text-foreground/80 leading-relaxed">
      We exist for the businesses that feel unseen, those that need more than a service, they need a
breakthrough. Our purpose is to bring bold, authentic ideas to life. Whether it’s designing a
foundational brand identity or executing a comprehensive, multi-channel strategy, we empower your
business to rise above the noise and achieve sustainable success.
Leora Digitals: We turn darkness into distinction.
    </p>
  </div>
</section>

<!-- 3. STATS -->
<section class="py-20 md:py-24 px-4 bg-accent/5">
  <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {#each stats as s}
      <div class="space-y-2">
        <div class="text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
        <div class="text-foreground/70">{s.label}</div>
      </div>
    {/each}
  </div>
</section>

<section class="py-20 md:py-24 px-16">
  <div class="w-full mx-auto relative overflow-hidden">
    <!-- Decorative gradient blur -->
    <div class="absolute -left-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-30 -z-10"></div>

    <div class="text-center mb-12 space-y-3">
      <h2 class="text-4xl md:text-5xl font-bold text-foreground">Mission, Vision & Core Values</h2>
      <p class="text-foreground/80 max-w-2xl mx-auto">
        Clear purpose. Bold imagination. A code of craft that turns strategy into measurable momentum.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Mission -->
      <article
        class="bg-background/10 {glass} border border-primary/10 rounded-2xl p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        aria-labelledby="mission-heading"
      >
        <div class="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-4">
          <!-- target icon -->
          <Target size = "32" />
        </div>
        <h3 id="mission-heading" class="text-xl font-semibold text-foreground mb-2">Mission</h3>
        <p class="text-foreground/80 leading-relaxed">
          To provide holistic, creative, and professional services across digital marketing,
production, and print, turning your business goals into tangible, impactful
success stories.

        </p>
      </article>

      <!-- Vision -->
      <article
        class="bg-background/10 {glass} border border-accent/10 rounded-2xl p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        aria-labelledby="vision-heading"
      >
        <div class="flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 text-accent mb-4">
          <!-- eye / horizon icon -->
          <Eye size="32" />
        </div>
        <h3 id="vision-heading" class="text-xl font-semibold text-foreground mb-2">Vision</h3>
        <p class="text-foreground/80 leading-relaxed">
         To be the leading creative growth partner in East Africa, lighting the way for
businesses to achieve extraordinary influence and success.

        </p>
      </article>

      <!-- Core Values -->
      <article
        class="bg-background/10 {glass} border border-foreground/6 rounded-2xl p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        aria-labelledby="values-heading"
      >
        <div class="flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 text-accent mb-4">
          <!-- heart / values icon -->
          <Heart size="32"  />
        </div>
        <h3 id="values-heading" class="text-xl font-semibold text-foreground mb-4">Our Core Values</h3>

        <ul class="space-y-4">
          {#each list as list}
             <li>{list}</li>
          {/each}
          
        </ul>
      </article>
    </div>
  </div>
</section>

<!-- 4. TEAM -->
<section class="py-20 md:py-24 px-4">
  <div class="max-w-6xl mx-auto space-y-12">
    <h2 class="text-4xl md:text-5xl font-bold text-foreground text-center">Meet the core</h2>

    <div class="grid md:grid-cols-3 gap-8">
      {#each team as person}
        <div class="group text-center space-y-4">
          <img
            src={person.img}
            alt={person.name}
            class="w-40 h-40 mx-auto rounded-full object-cover group-hover:scale-105 transition"
          />
          <div>
            <div class="text-xl font-semibold text-foreground">{person.name}</div>
            <div class="text-sm text-foreground/60">{person.role}</div>
          </div>
        </div>
      {/each}
    </div>

    <p class="text-center text-foreground/80">
      And a global network of strategists, designers & engineers who jump in when you need them.
    </p>
  </div>
</section>

<!-- 5. CTA BANNER -->
<section class="py-20 md:py-24 px-4 bg-primary text-primary-foreground">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <h2 class="text-4xl md:text-5xl font-bold">Ready to own your narrative?</h2>
    <p class="text-lg opacity-90">
      Let’s turn your next campaign into the story your audience can’t stop sharing.
    </p>
    <a
      href="/contact"
      class="inline-block px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:shadow-lg transition"
    >
      Start the conversation
    </a>
  </div>
</section>