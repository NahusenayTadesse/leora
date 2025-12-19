<script lang="ts">
    import { goto } from "$app/navigation";
  import { glass } from "$lib/global.svelte";
  import { Smartphone, Clapperboard, Printer, Icon} from '@lucide/svelte'

	interface Service {
		id: string;
		title: string;
		description: string;
		icon: Icon;
	}

	const services: Service[] = [
		{
			id: 'digital',
			title: 'Digital Marketing',
			description: 'SEO, Social Media, Branding, Email Marketing strategies that convert and grow.',
			icon: Smartphone
		},
		{
			id: 'production',
			title: 'Production',
			description:
				'Creative videos, ads, motion graphics, and commercial production tailored for your brand.',
			icon: Clapperboard
		},
		{
			id: 'printing',
			title: 'Printing',
			description: 'High-quality prints, signage, packaging, business cards, and branded merchandise.',
			icon: Printer
		}
	];

	let hoveredService = $state(null);
</script>

<style>
	/* Add any custom styles here if needed */
</style>

<section id="services" class="py-20 md:py-32 bg-secondary/30">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16 space-y-4">
			<h2 class="text-4xl md:text-5xl font-bold text-foreground text-balance">
				Our <span class="text-primary">Services</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
				Comprehensive solutions tailored to elevate your brand across all channels
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid md:grid-cols-3 gap-8">
			{#each services as service (service.id)}
				<button
					class="group relative p-8 rounded-xl bg-card border border-border
					hover:border-primary/50 shadow-lg shadow-white transition-all duration-300 cursor-pointer hover:shadow-lg {glass}"
					onclick={() => goto(`/services/#${service.id}`)}
				>
					<!-- Card background accent -->
					<div
						class="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"
					></div>

					<!-- Icon -->
					<div class="text-5xl mb-6 flex-col justify-center items-center"><service.icon class="text-primary text-center justify-self-center w-16 h-16" /></div>

					<!-- Content -->
					<h3 class="text-2xl font-bold text-foreground mb-3 text-center">{service.title}</h3>
					<p class="text-muted-foreground leading-relaxed mb-6 text-center">{service.description}</p>

					<!-- Link -->
					<div class="flex items-center gap-2 text-primary font-semibold">
						<a href="/services/#{service.id}">See More</a>
						<svg
							class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>
