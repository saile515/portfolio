<script lang="ts">
	export let data;
</script>

<div>
	{#each data.articles as metadata}
		<a href={`/blog/${metadata.slug}`}>{metadata.title}</a>
	{/each}
</div>
