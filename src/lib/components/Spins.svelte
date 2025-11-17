<script lang="ts">
  import { Facebook, Instagram, Youtube, Linkedin } from "@lucide/svelte";

  import type {Icon} from "@lucide/svelte";
  

  let Tiktok = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-primary w-16 opacity-50  box dark:hidden block" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>`

  const snippets = [
     Facebook,
     Instagram,
     Youtube,
     Linkedin,
    `<svg xmlns="http://www.w3.org/2000/svg" 
      width={box.width} fill="currentColor" class="text-primary w-12 opacity-50  box dark:hidden block" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>`
  ];


  let boxes: any[] = [];

  const createBox = ( id: number) => ({
    id,
    left: `${Math.random() * 100}%`,
    width: `${150 + Math.random() * 100}`,
    opacity: Math.random() * 0.7 + 0.3,
    duration: `${Math.random() * 10}s`,
    snippet: snippets[Math.floor(Math.random() * snippets.length)],
    key: Math.random(), // helps force re-render
  });

  // Initialize boxes
  const boxCount = 5;
  for (let i = 0; i < boxCount; i++) {
    boxes.push(createBox(i));
  }


  function handleAnimationEnd(index: number) {
    boxes[index] = createBox(boxes[index].id);
    boxes = [...boxes]; // trigger reactivity
  }
</script>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    font-family: 'Fira Mono', monospace;
  }

  .box {
    position: absolute;
    bottom: -120px;
    padding: 10px;
    border: 0;
    font-size: 0.8rem;
    white-space: pre-wrap;
    animation-name: floatUp;
    animation-timing-function: linear;
  }

  @keyframes floatUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-120vh);
      opacity: 0;
    }
  }
</style>

<div class="background">
  {#each boxes as box, i (box.key)}

    <div class="box"
       style="
        left: {box.left};
        opacity: {box.opacity};
        animation-duration: {box.duration};"
      onanimationend={() => handleAnimationEnd(i)}

    >

     {#if typeof box.snippet === 'function'}

    <box.snippet size={box.width} class="text-primary w-12 opacity-50  box dark:hidden block" />
  

     {:else}

     {@html box.snippet}


     {/if}

    
    </div>
  {/each}
</div>