<script lang="ts">
	import './layout.css';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Stars from '$lib/components/Stars.svelte';
	import Spins from '$lib/components/Spins.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import { page } from '$app/state';
	import { getFlash } from 'sveltekit-flash-message';
	import { toastmsg, errormsg } from '$lib/global.svelte';
	import { CircleCheckBig, CircleX, Loader } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
    import { Toaster } from "$lib/components/ui/sonner/index.js";

    import { toast } from "svelte-sonner";


	let iconify = $state("h-6 w-6 animate-ping");
	const flash = getFlash(page, { clearAfterMs: 5000 });
	// let darkMode = $state(false);

	// function toggleTheme() {
	// 	darkMode = !darkMode;

	// 	if (darkMode) {
	// 		document.documentElement.classList.add('dark');
	// 		localStorage.setItem('theme', 'dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 		localStorage.setItem('theme', 'light');
	// 	}
	// }

	// // Initialize theme from localStorage
	// if (typeof window !== 'undefined') {
	// 	const theme = localStorage.getItem('theme');
	// 	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// 	if (theme === 'dark' || !theme && prefersDark) {
	// 		darkMode = true;
	// 		document.documentElement.classList.add('dark');
	// 	}
	// }

	let { children } = $props();
	import { ModeWatcher } from "mode-watcher";


	$effect(() => {
  if (!$flash) return;
  if(page.data.flash?.type === 'success')
  toast.success($flash.message)
  if(page.data.flash?.type === 'error')
   toast.error($flash?.message)
   $flash = undefined;
});
</script>

<Toaster position="bottom-right" richColors closeButton />
<ModeWatcher />

<!-- {#if $flash}

  <div class="flex flex-row gap-2
  {$flash.type==='success' ? toastmsg: errormsg}"
  transition:fly={{x:20, duration: 300  }}>
  {#if $flash.type==='success'}
    <CircleCheckBig class={iconify} />
   {:else}
   <CircleX class={iconify} />
  {/if}
    {$flash.message}

  </div>


{/if} -->

<div class="flex flex-col min-h-screen">
{#if page.url.pathname !== '/dashboard'}
<Navigation />
{/if}
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
	<Stars />
	<Spins />
</div>
