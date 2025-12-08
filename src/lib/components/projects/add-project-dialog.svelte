<script lang="ts">
	import { z } from "zod";
	import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
	import { toast } from "svelte-sonner";
	import type { Project } from "$lib/types.js";


	let formData = $state({
		name: "",
		description: "",
		status: "planning",
		team: "frontend",
	});




	

	type Props = {
		data : SuperValidated<Infer<LoginSchema>, { status: number, text: string }, InferIn<LoginSchema>>,
		open?: boolean;
		onAdd?: (project: Project) => void;

	}; 

	  import type { SuperValidated, Infer, InferIn } from 'sveltekit-superforms';
  import { superForm } from 'sveltekit-superforms'
  import type { ProjectSchema as LoginSchema} from '$lib/projects';

  let { data, open=$bindable(false), onAdd  } : Props = $props();

  const { form, errors, enhance, message, constraints, delayed } = superForm(data);
</script>
{#snippet fe(labeler: '', name: '', type: '', placeholder: '', required: false )}
   <div class="flex flex-col gap-2  ">
        <div>
          <Label for="name" class="block text-sm font-medium text-foreground mb-2">{labeler} {required ? '*': ''}</Label>
          <Input
            {required}
            {type}
            id="name"
            {placeholder}
            {name}
            bind:value={$form[name]}
            {...$constraints[name]}
            class="w-full rounded-lg border border-primary/20 bg-transparent px-4 py-3 
            focus:outline-none focus:ring-2 focus:ring-primary/40
            placeholder:text-foreground"
          />
        </div>
      {#if $errors[name]}
         <p class="text-red-500">{$errors[name]}</p>
        
      {/if}
    </div>
{/snippet}

<Dialog bind:open>
	<DialogContent class="sm:max-w-md">
		<DialogHeader>
			<DialogTitle>Create New Project</DialogTitle>
			<DialogDescription>Add a new project to your dashboard. Fill in the details below.</DialogDescription>
		</DialogHeader>

		<form onsubmit={handleSubmit} class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<Label for="name">Project Name</Label>
				<Input id="name" placeholder="e.g., Mobile App Redesign" bind:value={formData.name} disabled={isSubmitting} class={errors.name ? "border-destructive" : ""} />
				{#if errors.name}
					<p class="text-xs text-destructive">{errors.name}</p>
				{/if}
			</div>

			<div class="flex flex-col gap-2">
				<Label for="description">Description</Label>
				<Textarea id="description" placeholder="Describe your project..." bind:value={formData.description} disabled={isSubmitting} class={["min-h-24", errors.description ? "border-destructive" : ""]} />
				{#if errors.description}
					<p class="text-xs text-destructive">{errors.description}</p>
				{/if}
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-2">
					<Label for="status">Status</Label>
					<Select type="single" bind:value={formData.status} >
						<SelectTrigger id="status">
							{formData.status}
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="planning">Planning</SelectItem>
							<SelectItem value="in-progress">In Progress</SelectItem>
							<SelectItem value="completed">Completed</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div class="flex flex-col gap-2">
					<Label for="team">Team</Label>
					<Select type="single" bind:value={formData.team} disabled={isSubmitting}>
						<SelectTrigger id="team">
							{formData.team}
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="frontend">Frontend</SelectItem>
							<SelectItem value="backend">Backend</SelectItem>
							<SelectItem value="fullstack">Fullstack</SelectItem>
							<SelectItem value="design">Design</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div class="flex gap-2 pt-4">
				<Button type="button" variant="outline" class="flex-1" disabled={isSubmitting} onclick={() => (open = false)}>Cancel</Button>
				<Button type="submit" class="flex-1" disabled={isSubmitting}>
					{#if isSubmitting}
						<span class="animate-spin">⏳</span>
					{/if}
					Create Project
				</Button>
			</div>
		</form>
	</DialogContent>
</Dialog>
