<script lang="ts">
    import "../../app.css";

    export let data;
</script>

<div class="flex flex-col min-h-screen justify-center items-center text-text font-mono">
    <h1 class="text-mauve text-4xl mb-4">Blog</h1>
    <div class="flex flex-col w-full p-4 max-w-xl gap-8">
        {#each data.articles as metadata}
            <a href={`/blog/${metadata.slug}`} class="block bg-mantle p-8 rounded-lg">
                <span class="text-2xl block mb-2">{metadata.title}</span>
                <span class="text-mauve">{metadata.author}</span> —
                <span>{metadata.date_published.toLocaleDateString("en-SE", { weekday: undefined })}</span>
            </a>
        {/each}
    </div>
    <a href="/" class="fixed top-0 left-0 p-4 text-xl bg-base">Home</a>
</div>
