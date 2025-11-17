<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
	import Footer from '$lib/components/footer.svelte';
  import Stars from '$lib/components/Stars.svelte';
  import Spins from '$lib/components/Spins.svelte';

	let darkMode = $state(false);

	function toggleTheme() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	// Initialize theme from localStorage
	if (typeof window !== 'undefined') {
		const theme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (theme === 'dark' || (!theme && prefersDark)) {
			darkMode = true;
			document.documentElement.classList.add('dark');
		}
	}

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Navigation {toggleTheme} {darkMode} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
	<Stars />
	<Spins />
</div>
