<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import Label from './label.svelte';
</script>

<div class="min-h-screen flex flex-col xl:flex-row justify-center items-center p-4">
	<p class="max-w-xl mx-4 my-16 xl:m-32 text-lg">
		Want to hire me, ask about one of my projects, or just want to say hello? Feel free to send me a
		message in the contact form. I will try to respond as soon as possible.
		<br />
		<br />
		You can also reach me via my
		<a href="mailto:elias.jorgensen2006@gmail.com" class="underline text-mauve">email</a>
		or on discord <span class="bg-mantle p-1 rounded">saile515</span>.
	</p>
	<form
		method="POST"
		action="?/contact"
		use:enhance
		class="flex flex-col w-full max-w-xl text-lg bg-mantle p-4 xl:p-8 rounded-xl relative"
	>
		<h2 class="text-mauve text-5xl mb-4">Contact</h2>
		<div
			class={`absolute top-8 right-8 max-w-64 ${$page.form?.success ? 'text-green' : 'text-red'}`}
		>
			{#if $page.form?.message}
				{$page.form.message}
			{/if}
		</div>

		<Label for="name" label="NAME">
			<input
				type="text"
				name="name"
				id="name"
				required
				class="bg-transparent h-16 pt-6 px-3 outline-none"
			/>
		</Label>
		<Label for="email" label="EMAIL">
			<input
				type="email"
				name="email"
				id="email"
				required
				class="bg-transparent h-16 pt-6 px-3 outline-none"
			/>
		</Label>
		<Label for="body" label="MESSAGE">
			<textarea name="body" required class="bg-transparent mt-8 px-3 outline-none" rows={10}
			></textarea>
		</Label>
		<button
			type="submit"
			class="flex justify-center items-center gap-3 bg-mauve rounded-lg p-2 mt-4 text-xl \
                   text-mantle group hover:brightness-90 transition-colors"
		>
			<span class="group-hover:translate-x-2 transition-transform">SEND</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 group-hover:translate-x-2 transition-transform"
			>
				<path
					d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
				/>
			</svg>
		</button>
	</form>
</div>
