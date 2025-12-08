<script lang="ts">
  import Lightbox from './lightbox.svelte';

  /* 1.  each image has thumb + full -------------------------------------- */
  const images = [
    { id: 1,  thumb: '/images/gallery (1)-thumb.webp',  full: '/images/gallery (1).webp',  alt: 'Gallery Image 1'  },
    { id: 2,  thumb: '/images/gallery (2)-thumb.webp',  full: '/images/gallery (2).webp',  alt: 'Gallery Image 2'  },
    { id: 3,  thumb: '/images/gallery (3)-thumb.webp',  full: '/images/gallery (3).webp',  alt: 'Gallery Image 3'  },
    { id: 4,  thumb: '/images/gallery (4)-thumb.webp',  full: '/images/gallery (4).webp',  alt: 'Gallery Image 4'  },
    { id: 5,  thumb: '/images/gallery (5)-thumb.webp',  full: '/images/gallery (5).webp',  alt: 'Gallery Image 5'  },
    { id: 6,  thumb: '/images/gallery (6)-thumb.webp',  full: '/images/gallery (6).webp',  alt: 'Gallery Image 6'  },
    { id: 7,  thumb: '/images/gallery (7)-thumb.webp',  full: '/images/gallery (7).webp',  alt: 'Gallery Image 7'  },
    { id: 8,  thumb: '/images/gallery (8)-thumb.webp',  full: '/images/gallery (8).webp',  alt: 'Gallery Image 8'  },
    { id: 9,  thumb: '/images/gallery (9)-thumb.webp',  full: '/images/gallery (9).webp',  alt: 'Gallery Image 9'  },
    { id: 10, thumb: '/images/gallery (10)-thumb.webp', full: '/images/gallery (10).webp', alt: 'Gallery Image 10' },
    { id: 11, thumb: '/images/gallery (11)-thumb.webp', full: '/images/gallery (11).webp', alt: 'Gallery Image 11' },
    { id: 12, thumb: '/images/gallery (12)-thumb.webp', full: '/images/gallery (12).webp', alt: 'Gallery Image 12' },
    { id: 13, thumb: '/images/gallery (13)-thumb.webp', full: '/images/gallery (13).webp', alt: 'Gallery Image 13' },
    { id: 14, thumb: '/images/gallery (14)-thumb.webp', full: '/images/gallery (14).webp', alt: 'Gallery Image 14' },
    { id: 15, thumb: '/images/gallery (15)-thumb.webp', full: '/images/gallery (15).webp', alt: 'Gallery Image 15' },
    { id: 16, thumb: '/images/gallery (16)-thumb.webp', full: '/images/gallery (16).webp', alt: 'Gallery Image 16' },
    { id: 17, thumb: '/images/gallery (17)-thumb.webp', full: '/images/gallery (17).webp', alt: 'Gallery Image 17' },
  ];

  /* 2.  shuffle once – keep result reactive ------------------------------ */
  let gallery = $state(shuffle([...images]));

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* 3.  light-box state -------------------------------------------------- */
  let selectedIndex = $state(-1);
  let isLightboxOpen = $derived(selectedIndex !== -1);

  function openLightbox(index: number) {
    selectedIndex = index;
  }
  function closeLightbox() {
    selectedIndex = -1;
  }

  /* 4.  keyboard nav ----------------------------------------------------- */
  function handleKeydown(e: KeyboardEvent) {
    if (!isLightboxOpen) return;
    if (e.key === 'ArrowLeft') {
      selectedIndex = (selectedIndex - 1 + gallery.length) % gallery.length;
    } else if (e.key === 'ArrowRight') {
      selectedIndex = (selectedIndex + 1) % gallery.length;
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- 5.  thumbnail grid ---------------------------------------------------- -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each gallery as image, index (image.id)}
    <div
      class="cursor-pointer group overflow-hidden rounded-lg bg-secondary"
      role="button"
      tabindex="0"
      onclick={() => openLightbox(index)}
      onkeydown={(e) => e.key === 'Enter' && openLightbox(index)}
    >
      <img
        src={image.thumb}
        alt={image.alt}
        loading="lazy"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  {/each}
</div>

<!-- 6.  light-box : send ONLY full-size images ---------------------------- -->
{#if isLightboxOpen}
  <Lightbox
    images={gallery.map(i => ({ src: i.full, alt: i.alt }))}
    currentIndex={selectedIndex}
    onClose={closeLightbox}
    onNext={() => (selectedIndex = (selectedIndex + 1) % gallery.length)}
    onPrev={() => (selectedIndex - 1 + gallery.length) % gallery.length}
  />
{/if}