<script lang="ts">
  import { page } from '$app/state';
 import { Sun, Moon } from '@lucide/svelte'


	interface Props {
		toggleTheme: () => void;
		darkMode: boolean;
	}

	let { toggleTheme, darkMode } = $props() as Props;
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav class="sticky top-0 z-50 dark:bg-linear-to-r dark:from-dark-blue dark:to-black bg-linear-to-br from-primary/10 to-white  text-foreground  border-b border-border">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="shrink-0 font-bold text-2xl text-primary">
				<a href="/"><img src="/logo.webp" class="w-48 h-48" alt="">
</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex gap-8 items-center">
				{#each navLinks as link}
					<a href={link.href} class=" {page.url.pathname === link.href ? 'text-primary' : 'text-foreground' } hover:text-primary transition-colors"
						>{link.label}</a
					>
				{/each}
			</div>

			<!-- Theme Toggle & Mobile Menu Button -->
			<div class="flex gap-4 items-center">
				<button
					onclick={toggleTheme}
					class="p-2 rounded-lg bg-muted hover:bg-secondary transition-colors"
					aria-label="Toggle theme"
				>
					{#if darkMode}
						<Sun />
					{:else}
						<Moon />
					{/if}
				</button>

				<!-- Mobile Menu Button -->
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="md:hidden p-2 rounded-lg bg-muted hover:bg-secondary transition-colors"
					aria-label="Open mobile menu"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden pb-4 flex flex-col gap-4">
				{#each navLinks as link}
					<a href={link.href} class="text-foreground hover:text-primary transition-colors"
						>{link.label}</a
					>
				{/each}
			</div>
		{/if}
	</div>
</nav>
