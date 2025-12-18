<script lang="ts">
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import {  ExternalLinkIcon, TrashIcon } from "@lucide/svelte";
	import type { Project } from "$lib/types.js";

	const { project, onDelete }: Props = $props();

	type Props = {
		project: Project;
		onDelete?: (id: string) => void;
	};
</script>

<Card class="group hover:shadow-lg-lg hover:shadow-lg-primary/10 transition-all duration-200 flex flex-col h-full">
	<CardHeader class="pb-3">
		<div class="flex items-start justify-between gap-2">
			<div class="flex-1 min-w-0">
				<CardTitle class="text-base truncate">{project.title}</CardTitle>
				<CardDescription class="line-clamp-2 mt-1">{@html project.description}</CardDescription>
			</div>
			<div class="size-10 rounded-lg bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">

				<span class="text-xs font-bold text-primary">{project.title.charAt(0).toUpperCase()}</span>
			</div>
		</div>
	</CardHeader>

	<CardContent class="flex-1 pb-3">
		<div class="flex flex-wrap gap-2">
		<Badge variant="secondary" class="text-xs">{project.category}</Badge>
			<Badge variant="secondary" class="text-xs">{project.createdAt.toLocaleDateString()}</Badge>
		</div>
		<img src="/files/{project.featured}" alt="">
	</CardContent>

	<CardFooter class="flex gap-2 pt-3 border-t">
		<Button size="sm" variant="outline" class="flex-1 h-8" href="/projects/{project.slug}" target="_blank">
			<ExternalLinkIcon class="size-4" />
			<span>View</span>
		</Button>
		<Button size="sm" variant="ghost" class="h-8 px-2" onclick={() => onDelete?.(project.id)}>
			<TrashIcon class="size-4 text-destructive" />
		</Button>
	</CardFooter>
</Card>
