<script lang="ts">
	import { projects } from '../assets/projects.json';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import Project from './project.svelte';
	import { onMount } from 'svelte';
	import { is_mobile } from '.';

	let visible = false;

	onMount(() => {
		if (is_mobile()) {
			visible = true;
		}
	});
</script>

<div class="min-h-screen flex flex-col justify-center items-center p-4 my-32">
	{#if !visible}
		<div
			use:inview
			on:inview_enter={() => {
				visible = true;
			}}
		></div>
	{:else}
		<h2 class="text-5xl text-mauve mb-16">Projects</h2>
		<div
			in:fly={{ y: 300, duration: 1000, delay: 500 }}
			class="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-auto gap-8"
		>
			{#each projects as project}
				<Project {...project} />
			{/each}
		</div>
		<span class="text-lg mt-8"
			>...and more on my <a
				href="https://github.com/saile515"
				target="_blank"
				class="underline text-mauve">GitHub</a
			>.
		</span>
	{/if}
</div>
