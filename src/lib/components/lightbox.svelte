<script>
	let { images = [], currentIndex = 0, onClose, onNext, onPrev } = $props();

	$effect(() => {
		const handleKeydown = (e) => {
			if (e.key === 'ArrowLeft') {
				onPrev?.();
			} else if (e.key === 'ArrowRight') {
				onNext?.();
			} else if (e.key === 'Escape') {
				onClose?.();
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	const currentImage = $derived(images[currentIndex]);
</script>

<!-- Dark overlay with transition -->
<div
	class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
	onclick={(e) => e.target === e.currentTarget && onClose?.()}
	onkeydown={(e) => e.key === 'Escape' && onClose?.()}
	role="presentation"
>
	<!-- Main lightbox container -->
	<div class="relative w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
		<!-- Close button -->
		<button
			onclick={onClose}
			class="absolute top-4 right-4 z-10 bg-primary-foreground text-primary rounded-full p-2 hover:bg-secondary transition-colors"
			aria-label="Close lightbox"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Image container with transition -->
		<div class="flex-1 flex items-center justify-center overflow-hidden rounded-lg">
			<img
				src={currentImage.src || "/placeholder.svg"}
				alt={currentImage.alt}
				class="max-w-full max-h-full object-contain animate-fade-in"
			/>
		</div>

		<!-- Navigation controls -->
		<div class="flex items-center justify-between mt-6">
			<!-- Previous button -->
			<button
				onclick={onPrev}
				class="bg-primary-foreground text-primary rounded-full p-3 hover:bg-secondary transition-colors"
				aria-label="Previous image"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Image counter -->
			<div class="text-center">
				<p class="text-primary-foreground font-semibold">
					{currentIndex + 1} / {images.length}
				</p>
				<p class="text-muted-foreground text-sm">{currentImage.alt}</p>
			</div>

			<!-- Next button -->
			<button
				onclick={onNext}
				class="bg-primary-foreground text-primary rounded-full p-3 hover:bg-secondary transition-colors"
				aria-label="Next image"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- Thumbnail strip -->
		<div class="flex gap-2 mt-6 overflow-x-auto pb-2">
			{#each images as image, index (image.id)}
				<button
					onclick={() => (currentIndex = index)}
					class="flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all {currentIndex ===
					index
						? 'border-primary'
						: 'border-transparent opacity-60 hover:opacity-100'}"
					aria-label="Go to image {index + 1}"
				>
					<img src={image.src || "/placeholder.svg"} alt={image.alt} class="w-full h-full object-cover" />
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	:global(.animate-fade-in) {
		animation: fadeIn 0.3s ease-in-out;
	}
</style>
