<script lang='ts'>
	import { enhance } from '$app/forms';
    import { ArrowRight, ArrowUp } from '@lucide/svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Login - Leora Digitals</title>
</svelte:head>

<section class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
	<div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
		<div class="flex flex-col justify-center items-center gap-2 mb-6">
			<!-- Inline logo -->
			<div class="flex flex-col justify-center items-center">
			<img src="/favicon.png" class="w-24 h-24" alt="">
			</div>
			<div>
				<h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">Welcome back</h1>
				<p class="text-sm text-gray-500 dark:text-gray-300">Sign in to your account</p>
			</div>
		</div>

		<form method="post" action="?/login" use:enhance class="space-y-4" aria-describedby="form-message" autocomplete="on">
			<div>
				<label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
				<div class="mt-1">
					<input
						id="username"
						name="username"
						type="text"
						required
						class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
						placeholder="you@example.com"
						/>
				</div>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
				<div class="mt-1">
					<input
						id="password"
						name="password"
						type="password"
						required
						class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-gray-100"
						placeholder="••••••••"
						/>
				</div>
			</div>

			<div class="flex items-center justify-between text-sm">
				<label class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
					<input type="checkbox" name="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
					Remember me
				</label>
			</div>

			<div>
				<button type="submit" class="w-full flex items-center justify-center gap-2 bg-primary hover:scale-110 transform duration-300 text-white font-medium px-4 py-2 rounded-lg shadow-md transition">
				    Sign in
					<ArrowRight class="w-5 h-5"/>
				</button>
			</div>
		</form>
	</div>
</section>
<p style='color: red'>{form?.message ?? ''}</p>
