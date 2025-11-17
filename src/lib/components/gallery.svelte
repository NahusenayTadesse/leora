<script>
	import Lightbox from './lightbox.svelte';

	const images = [
		{
			id: 1,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Modern architecture'
		},
		{
			id: 2,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Minimalist interior'
		},
		{
			id: 3,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Urban landscape'
		},
		{
			id: 4,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Modern design'
		},
		{
			id: 5,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Contemporary art'
		},
		{
			id: 6,
			src: '/placeholder.svg?height=400&width=400',
			alt: 'Abstract pattern'
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
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each images as image, index (image.id)}
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
		images={images}
		currentIndex={selectedIndex}
		onClose={closeLightbox}
		onNext={() => (selectedIndex = (selectedIndex + 1) % images.length)}
		onPrev={() => (selectedIndex = (selectedIndex - 1 + images.length) % images.length)}
	/>
{/if}
