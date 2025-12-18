<script lang="ts">
	import { SidebarInset, SidebarProvider } from "$lib/components/ui/sidebar";
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import AppTopHeader from "$lib/components/app-top-header.svelte";



     let {  children } = $props();

</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>


<div class="bg-background text-foreground min-h-dvh">
	<SidebarProvider>
		<AppSidebar />
		<SidebarInset>
			<AppTopHeader />

			<main class="flex-1 overflow-auto">
			   {@render children()}
			</main>
		</SidebarInset>
	</SidebarProvider>
</div>
