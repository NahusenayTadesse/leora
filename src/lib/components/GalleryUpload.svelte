<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index.js';
	import { X } from '@lucide/svelte';
	import { filesProxy } from 'sveltekit-superforms';

	let { form, name, errors, title = 'Upload Image' } = $props();

	let file = filesProxy(form, name);

	function removeFile(index: number) {
	const files = Array.from($file ?? []);
  files.splice(index, 1);
  $file = files;	 }
</script>

<div class="my-8 flex w-full flex-col justify-start gap-2">
	<Label for={name} class="capitalize">{title}</Label>

	<Input
		type="file"
		{name}
		accept="image/*,application/pdf"
		bind:files={$file}
		multiple={true}
	/>

		<div class="flex flex-row gap-2">

			    {#each $file as i, index}
				<div class="grid grid-cols-2 gap-2">

				<div class="flex flex-col items-center justify-center">
				<Label for={name} class="capitalize" >{$file?.item(index)?.name}</Label>

				<img src={URL.createObjectURL($file[index])} class="h-32 w-32 rounded-md object-cover" alt="" />
				<Button variant="ghost" size="icon" type="button"
				onclick={() => removeFile(index)}
				>
					<X class="h-4 w-4" />
				</Button>
				</div>
							</div>
				{/each}


		</div>

	{#if $errors[name]}
		<p class="text-red-500">{$errors[name]}</p>
	{/if}
</div>
