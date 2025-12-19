<script lang="ts">
  import { Smartphone, Clapperboard, Printer, CheckCheck } from '@lucide/svelte';
  import { glass } from "$lib/global.svelte";
    import Button from './ui/button/button.svelte';
    import { Check } from 'drizzle-orm/sqlite-core';

  interface DetailedService {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: any;
    image: string;
  }

  const detailedServices: DetailedService[] = [
    {
      id: 'digital',
      title: 'Digital Marketing & Strategy',
      subtitle: 'Data-driven growth for the modern age.',
      description: 'We don’t just post content; we build ecosystems. Our digital marketing approach focuses on identifying where your customers live online and creating high-impact touchpoints that convert curiosity into loyalty.',
      features: [
        'Search Engine Optimization (SEO) & SEM',
        'Social Media Management & Paid Social',
        'Email Marketing Automation',
        'Conversion Rate Optimization (CRO)'
      ],
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'production',
      title: 'Creative Content Production',
      subtitle: 'Stories that resonate, visuals that captivate.',
      description: 'From high-end commercial cinematography to agile social-first video content, our production team handles everything from script to screen. We ensure your brand voice is consistent and visually stunning.',
      features: [
        'Commercial & Promotional Video',
        'Motion Graphics & 2D/3D Animation',
        'Professional Photography',
        'Post-Production & Sound Design'
      ],
      icon: Clapperboard,
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'printing',
      title: 'Premium Printing & Branding',
      subtitle: 'Tangible quality you can feel.',
      description: 'In a digital world, physical touchpoints leave a lasting impression. We provide end-to-end printing solutions using premium materials and cutting-edge techniques to bring your brand into the physical realm.',
      features: [
        'Bespoke Packaging Design',
        'Large Format Signage & Displays',
        'Premium Business Stationery',
        'Custom Branded Merchandise'
      ],
      icon: Printer,
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800'
    }
  ];
</script>

<div class="pt-24 pb-16">
  <header class="max-w-7xl mx-auto px-4 text-center mb-24">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">Our <span class="text-primary">Expertise</span></h1>
    <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
      We provide end-to-end solutions designed to scale your business. Explore our core services and see how we can help you lead your industry.
    </p>
  </header>

  <div class="space-y-32">
    {#each detailedServices as service, i}
      <section id={service.id} class="relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">

            <div class={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <div class="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-6">
                <service.icon size={32} />
              </div>
              <h2 class="text-4xl font-bold mb-4">{service.title}</h2>
              <p class="text-primary font-medium mb-6 text-lg">{service.subtitle}</p>
              <p class="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <ul class="grid sm:grid-cols-2 gap-4">
                {#each service.features as feature}
                  <li class="flex items-start gap-3 text-foreground/80">
                    <CheckCheck class="text-primary mt-1 shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>

              <div class="mt-10">
                <a href="/contact/#contact" class="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all">
                  Inquire About {service.title.split(' ')[0]}
                </a>
              </div>
            </div>

            <div class="relative {i % 2 !== 0 ? 'lg:order-1' : ''}">
              <div class="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  class="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div class="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
            </div>

          </div>
        </div>
      </section>
    {/each}
  </div>
</div>

<style>
  /* Smooth scroll for anchor links */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
