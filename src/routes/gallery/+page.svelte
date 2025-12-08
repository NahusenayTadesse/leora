<script>
	import Gallery from '$lib/components/gallery.svelte';
</script>
<svelte:head>
	<title>Gallery</title>
</svelte:head>
<main class="min-h-screen bg-background">
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold text-foreground mb-2 text-center">Gallery</h1>
		<p class="text-muted-foreground mb-8 text-center">A collection of moments from our journey photos we captured along the way. Click any image to open the lightbox and relive the trip.</p>
		<Gallery />
	</div>
</main>
