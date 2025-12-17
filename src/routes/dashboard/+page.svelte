<script lang="ts">

	import { Button } from "$lib/components/ui/button";
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import AppTopHeader from "$lib/components/app-top-header.svelte";
	import ProjectCard from "$lib/components/projects/project-card.svelte";
	import AddProjectDialog from "$lib/components/projects/add-project-dialog.svelte";
	import { PlusIcon } from "@lucide/svelte";
	import type { Project } from "$lib/types.js";


	let projects = $state<Project[]>([
		{
			id: "1",
			name: "Mobile App Redesign",
			description: "Complete redesign of the mobile application with modern UI/UX principles and improved performance.",
			status: "in-progress",
			team: "frontend",
			createdAt: new Date("2024-01-15"),
		},
		{
			id: "2",
			name: "API Migration",
			description: "Migrate existing REST API to GraphQL for better performance and flexibility in data fetching.",
			status: "planning",
			team: "backend",
			createdAt: new Date("2024-01-20"),
		},
		{
			id: "3",
			name: "Dashboard Analytics",
			description: "Build comprehensive analytics dashboard with real-time data visualization and reporting features.",
			status: "in-progress",
			team: "fullstack",
			createdAt: new Date("2024-01-10"),
		},
		{
			id: "4",
			name: "Design System",
			description: "Create a comprehensive design system with reusable components and design tokens for consistency.",
			status: "completed",
			team: "design",
			createdAt: new Date("2023-12-20"),
		},
	]);

	let dialogOpen = $state(false);

	const handleAddProject = (project: Project) => {
		projects = [...projects, project];
	};
     let { data } = $props();
     import { superForm } from 'sveltekit-superforms';

     const { form, delayed, enhance, allErrors, errors } = superForm(data.form);

	const handleDeleteProject = (id: string) => {
		const project = projects.find((p) => p.id === id);
		projects = projects.filter((p) => p.id !== id);
		if (project) {
			toast.success(`Project "${project.name}" deleted`);
		}
	};
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>


<div class="bg-background text-foreground min-h-dvh">

				<div class="p-6 space-y-6">
					<!-- Header Section -->
					<div class="flex items-center justify-between">
						<div>
							<h2 class="text-2xl font-bold text-foreground">Your Projects</h2>
							<p class="text-sm text-muted-foreground mt-1">Manage and track all your projects in one place</p>
						</div>
						<div class="flex items-center space-x-2">
						<Button class="gap-2" href="/dashboard/add-blog">
							<PlusIcon class="size-4" />
							<span>New Blog</span>
						</Button>
						<Button class="gap-2" href="/dashboard/add-project">
							<PlusIcon class="size-4" />
							<span>New Project</span>
						</Button>
						</div>
					</div>

					<!-- Projects Grid -->
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{#each projects as project (project.id)}
							<div class="animate-in fade-in slide-in-from-bottom-2 duration-300">
								<ProjectCard {project} onDelete={handleDeleteProject} />
							</div>
						{/each}
					</div>

					<!-- Empty State -->
					{#if projects.length === 0}
						<div class="flex flex-col items-center justify-center py-12 rounded-lg border border-dashed border-border">
							<div class="text-center space-y-3">
								<h3 class="text-lg font-semibold text-foreground">No projects yet</h3>
								<p class="text-sm text-muted-foreground">Create your first project to get started</p>
								<Button onclick={() => (dialogOpen = true)} class="mt-4">
									<PlusIcon class="size-4" />
									Create Project
								</Button>
							</div>
						</div>
					{/if}
				</div>

</div>
