<script lang="ts">
	import { useSidebar } from "$lib/components/ui/sidebar";
	import { Button } from "$lib/components/ui/button";
	import { PanelLeftIcon, SunIcon, MoonIcon } from "@lucide/svelte";

	const sidebar = useSidebar();
</script>

<header class="sticky top-0 z-50 flex items-center justify-between px-6 gap-4 border-b h-14 bg-background/95 backdrop-blur-sm border-border">
	<Button size="icon" variant="ghost" class="size-9" onclick={() => sidebar.toggle()}>
		<PanelLeftIcon class="size-5" />
	</Button>

	<div class="flex-1">
		<h1 class="text-lg font-semibold text-foreground">Projects</h1>
	</div>

	
</header>
