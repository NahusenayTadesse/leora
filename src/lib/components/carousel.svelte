<script lang="ts">
 import * as Carousel from "$lib/components/ui/carousel/index.js";
    import { glass } from "$lib/global.svelte";
 
 let list = [
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
    { image: '/images/bymeklit.webp', name: 'ByMeklit'},
 ]

</script>
 
<Carousel.Root class="w-full">
 <Carousel.Content>
  {#each list as i}
   <Carousel.Item class="md:basis-1/2 lg:basis-1/4">
    <div class="p-1">
     <div>
      <div
       class="flex aspect-square items-center justify-center p-2 rounded-lg border "
      >
       <img src={i.image} alt={i.name}/>
     </div>
    </div>
    </div>
   </Carousel.Item>
  {/each}
 </Carousel.Content>
 <Carousel.Previous />
 <Carousel.Next />
</Carousel.Root>