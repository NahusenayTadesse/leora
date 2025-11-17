<script>
	import Gallery from '$lib/components/gallery.svelte';
</script>

<main class="min-h-screen bg-background">
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold text-foreground mb-2">Image Gallery</h1>
		<p class="text-muted-foreground mb-8">Click any image to view in lightbox with carousel</p>
		<Gallery />
	</div>
</main>
