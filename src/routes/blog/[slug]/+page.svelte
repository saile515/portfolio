<script lang="ts">
	import '../../../app.css';

	export let data;
</script>

<div class="flex justify-center text-text font-mono">
	<div class="w-full max-w-7xl p-8">
		<div class="my-8">
			<h1 class="text-4xl xl:text-7xl">{data.article.metadata.title}</h1>
			<div class="text-lg">
				{data.article.metadata.author} —
				<span>{data.article.metadata.date_published}</span>
				{#if data.article.metadata.date_edited}
					<span>Edited: {data.article.metadata.date_edited}</span>
				{/if}
			</div>
		</div>
		<div class="font-sans text-lg leading-loose">
			{@html data.article.content}
		</div>
	</div>
	<a href="/blog" class="fixed top-4 left-4 text-xl">&lt;&nbsp;Back</a>
</div>
