<script lang="ts">
    import "../../../app.css";
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    // @ts-ignore
    import hljs_svelte from "highlightjs-svelte";

    hljs_svelte(hljs);

    onMount(() => {
        hljs.highlightAll();
    });

    export let data;
</script>

<svelte:head>
    <title>{data.article.metadata.title} — Elias Jörgensen</title>
    <meta name="description" content={`Elias Jörgensen — Blog — ${data.article.metadata.title}`} />
</svelte:head>

<div class="flex justify-center text-text font-mono">
    <div class="w-full max-w-7xl p-8">
        <div class="my-8">
            <h1 class="text-4xl xl:text-7xl text-mauve">{data.article.metadata.title}</h1>
            <div class="text-lg">
                {data.article.metadata.author} —
                <span>{data.article.metadata.date_published}</span>
                {#if data.article.metadata.date_edited}
                    <span>Edited: {data.article.metadata.date_edited}</span>
                {/if}
            </div>
        </div>
        <div class="font-sans text-lg leading-loose article">
            {@html data.article.content}
        </div>
    </div>
    <a href="/blog" class="fixed top-0 left-0 text-xl bg-base p-4">&lt;&nbsp;Back</a>
</div>
