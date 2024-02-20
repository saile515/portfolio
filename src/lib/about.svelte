<script lang="ts">
	import { inview } from 'svelte-inview';
	import { crossfade, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { is_mobile } from '.';

	const line = '>1000 commits in over 50 repositories throughout 5+ years';
	let displayed_line = '';

	let animation_started = false;
	let animation_finished = false;

	const [send, receive] = crossfade({
		duration: 1000
	});

	function animation_step() {
		if (line.length == displayed_line.length) {
			setTimeout(() => {
				animation_finished = true;
			}, 2000);
			return;
		}

		displayed_line += line[displayed_line.length];

		setTimeout(animation_step, 80);
	}

	onMount(() => {
		if (is_mobile()) {
			animation_finished = true;
		}
	});
</script>

<div class="min-h-screen grid justify-items-center items-center my-32">
	{#if !animation_finished}
		<div class="row-start-1 col-start-1 flex">
			<p
				use:inview
				on:inview_enter={() => {
					if (!animation_started) setTimeout(animation_step, 500);
				}}
				out:send={{ key: 'text-transition' }}
				class="text-5xl whitespace-pre"
			>
				{displayed_line}
			</p>
			<div out:fade={{ duration: 400 }} class="border border-text h-12"></div>
		</div>
	{:else}
		<div in:fade class="m-8 w-full max-w-7xl gap-16 xl:gap-4 row-start-1 col-start-1">
			<h2 class="text-mauve text-5xl">About Me</h2>
			<p class="my-8 text-lg">
				I am an 18 year old developer from Sweden. I enjoy a variety of programming related things,
				including low-level programming, web development, and Linux. I am currently finishing my
				last year in upper secondary school here in Sweden, and I am expecting to graduate this
				June. When I am not programming, I also enjoy listening to metal music, playing electric
				guitar, being outdoors, reading, and optimizing my workflow. Some of my long term dreams
				include writing an operating system, building a computer from electrical components, and
				building my own house.
			</p>
			<div class="space-y-16 xl:space-y-0 xl:flex justify-between my-12">
				<div>
					<h3 class="text-mauve text-3xl">Languages</h3>
					<h4 class="text-mauve text-xl">Fluent</h4>
					<ol class="text-lg">
						<li>TypeScript</li>
						<li>C++</li>
						<li>English</li>
						<li>Swedish</li>
					</ol>
					<h4 class="text-mauve text-xl mt-4">Basic Knowledge</h4>
					<ol class="text-lg">
						<li>Assembly (NASM)</li>
						<li>C#</li>
						<li>Lua</li>
						<li>Python</li>
					</ol>
				</div>
				<div>
					<h3 class="text-mauve text-3xl">Other Technologies</h3>
					<ol class="text-lg">
						<li>Node.js</li>
						<li>Linux</li>
						<li>Strapi</li>
						<li>Hetzner</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
						<li>Next.js</li>
						<li>TailwindCSS</li>
						<li>Git(hub)</li>
						<li>and more</li>
					</ol>
				</div>
				<img
					src="/photo.jpg"
					alt="Me on a hike."
					class="aspect-square rounded-full object-cover object-top w-full sm:max-w-xs"
				/>
			</div>

			<div class="flex justify-center items-center">
				<p in:receive={{ key: 'text-transition' }} class="text-2xl xl:text-4xl">
					{line}
				</p>
			</div>
		</div>
	{/if}
</div>
