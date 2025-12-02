<script>
	import Lightbox from './lightbox.svelte';

	const images = [
		{
			id: 1,
			src: '/images/gallery (1).webp',
			alt: 'Gallery Image 1'
		},
		{
			id: 2,
			src: '/images/gallery (2).webp',
			alt: 'Gallery Image 2'
		},
		{
			id: 3,
			src: '/images/gallery (3).webp',
			alt: 'Gallery Image 3'
		},
		{
			id: 4,
			src: '/images/gallery (4).webp',
			alt: 'Gallery Image 4'
		},
		{
			id: 5,
			src: '/images/gallery (5).webp',
			alt: 'Gallery Image 5'
		},
		{
			id: 6,
			src: '/images/gallery (6).webp',
			alt: 'Gallery Image 6'
		},
		{
			id: 7,
			src: '/images/gallery (7).webp',
			alt: 'Gallery Image 7'
		},
		{
			id: 8,
			src: '/images/gallery (8).webp',
			alt: 'Gallery Image 8'
		},
		{
			id: 9,
			src: '/images/gallery (9).webp',
			alt: 'Gallery Image 9'
		},
		{
			id: 10,
			src: '/images/gallery (10).webp',
			alt: 'Gallery Image 10'
		},
		{
			id: 11,
			src: '/images/gallery (11).webp',
			alt: 'Gallery Image 11'
		},
		{
			id: 12,
			src: '/images/gallery (12).webp',
			alt: 'Gallery Image 12'
		},
		{
			id: 13,
			src: '/images/gallery (13).webp',
			alt: 'Gallery Image 13'
		},
		{
			id: 14,
			src: '/images/gallery (14).webp',
			alt: 'Gallery Image 14'
		},
		{
			id: 15,
			src: '/images/gallery (15).webp',
			alt: 'Gallery Image 15'
		},
		{
			id: 16,
			src: '/images/gallery (16).webp',
			alt: 'Gallery Image 16'
		},
		{
			id: 17,
			src: '/images/gallery (17).webp',
			alt: 'Gallery Image 17'
		}
	];

	let selectedIndex = $state(-1);
	let isLightboxOpen = $state(false);

	function openLightbox(index) {
		selectedIndex = index;
		isLightboxOpen = true;
	}

	function closeLightbox() {
		isLightboxOpen = false;
		selectedIndex = -1;
	}

	function handleKeydown(e) {
		if (!isLightboxOpen) return;

		if (e.key === 'ArrowLeft') {
			selectedIndex = (selectedIndex - 1 + images.length) % images.length;
		} else if (e.key === 'ArrowRight') {
			selectedIndex = (selectedIndex + 1) % images.length;
		} else if (e.key === 'Escape') {
			closeLightbox();
		}
	} 


	function randomizeGallery() {
	   const image =	images.sort(() => Math.random() - 0.5);

	   return image;
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each randomizeGallery() as image, index (image.id)}
		<div
			class="cursor-pointer group overflow-hidden rounded-lg bg-secondary"
			onclick={() => openLightbox(index)}
			onkeydown={(e) => e.key === 'Enter' && openLightbox(index)}
			role="button"
			tabindex="0"
		>
			<img
				src={image.src || "/placeholder.svg"}
				alt={image.alt}
				class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
			/>
		</div>
	{/each}
</div>

{#if isLightboxOpen && selectedIndex >= 0}
	<Lightbox
		images={randomizeGallery()}
		currentIndex={selectedIndex}
		onClose={closeLightbox}
		onNext={() => (selectedIndex = (selectedIndex + 1) % images.length)}
		onPrev={() => (selectedIndex = (selectedIndex - 1 + images.length) % images.length)}
	/>
{/if}
