<script>
    let { data} = $props();
     import { Badge } from '$lib/components/ui/badge/index.js';

    import Gallery from '$lib/components/gallery.svelte';
</script>
<svelte:head>
  <!-- Basic SEO -->
  <title>{data.project.title}</title>
  <meta name="description" content={data.project.shortDescription} />

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="/projects/{data.project.slug}"
  />

  <!-- Open Graph (Facebook, LinkedIn, etc.) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.project.title} />
  <meta property="og:description" content={data.project.shortDescription} />
  <meta
    property="og:url"
    content='projects/{data.project.slug}'
  />
  <meta
    property="og:image"
    content={data.project.image}
  />
  <meta property="og:image:alt" content={data.project.title} />
  <meta property="og:site_name" content="Leora Digitals" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.project.title} />
  <meta name="twitter:description" content={data.project.shortDescription} />
  <meta
    name="twitter:image"
    content={data.project.image}
  />

  <!-- Optional: Category for SEO context -->
  <meta name="keywords" content={data.project.category} />
</svelte:head>


<div class="min-h-dvh bg-linear-0-to-b from-background via-background to-muted/20">
	<!-- Hero Section -->
	<div class="relative overflow-hidden border-b">
		<div class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>
		<div class="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
			<!-- Category Badge -->
			<div class="mb-6 flex items-center gap-2">
				<Badge variant="secondary" class="text-xs font-semibold uppercase tracking-wider">
					{data.project.category}
				</Badge>
			</div>

			<!-- Title -->
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
				{data.project.title}
			</h1>

			<!-- Short Description -->
			<p class="mb-8 text-lg text-muted-foreground sm:text-xl">
				{data.project.shortDescription}
			</p>

			<!-- Full Description -->
			<div class="prose prose-invert max-w-none">
				<p class="text-base leading-relaxed text-foreground/80">
					{data.project.description}
				</p>
			</div>
		</div>
	</div>

	<!-- Gallery Section -->
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="mb-12">
			<h2 class="mb-2 text-3xl font-bold tracking-tight text-foreground">Gallery</h2>
			<div class="h-1 w-12 bg-linear-to-r from-primary to-accent rounded-full"></div>
		</div>

			<Gallery images={data.gallery} />
	</div>
</div>
