<script lang="ts">
    import code from "../assets/code.cpp?raw";
    import hljs from "highlight.js/lib/core";
    import cpp from "highlight.js/lib/languages/cpp";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import GithubIcon from "./github.svelte"
    import LinkedInIcon from "./linkedin.svelte"
    import DiscordIcon from "./discord.svelte"
    import EmailIcon from "./email.svelte"

    let ready = false;
    onMount(() => {
        ready = true;
    });

    hljs.registerLanguage("cpp", cpp);
    const highlighted_code = hljs.highlight(code, { language: "cpp" }).value;
</script>

<div class="flex flex-col xl:flex-row min-h-screen w-full">
    <ul class="flex fixed top-4 right-8 text-xl gap-4 p-2 rounded-full text-mauve bg-base">
        <li><a href="https://github.com/saile515" target="_blank"><GithubIcon class="size-6" /></a></li>
        <li><a href="https://www.linkedin.com/in/elias-j%C3%B6rgensen-907552292/" target="_blank"><LinkedInIcon class="size-6" /></a></li>
        <li><a href="https://discord.com/users/481848217303121920" target="_blank"><DiscordIcon class="size-6" /></a></li>
        <li><a href="mailto:elias.jorgensen2006@gmail.com" target="_blank"><EmailIcon class="size-6" /></a></li>
    </ul>
    <div class="flex flex-col justify-center p-8 pt-16 2xl:px-24">
        <h1 class="text-mauve font-mono text-5xl 2xl:text-8xl my-2">Elias Jörgensen</h1>
        <p class="text-xl 2xl:text-4xl">Fullstack and systems developer</p>
    </div>
    <div class="w-full flex justify-center items-center">
        {#if ready}
            <div
                in:fly={{ x: 100, duration: 1000, delay: 500 }}
                class="w-11/12 max-w-6xl p-4 sm:p-8 bg-mantle rounded-3xl">
                <div class="w-full flex justify-end gap-2 mb-2 sm:mb-4">
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-green rounded-full" />
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-yellow rounded-full" />
                    <div class="w-3 h-3 sm:w-4 sm:h-4 bg-red rounded-full" />
                </div>
                <pre
                    class="text-[0.48rem] sm:text-sm lg:text-[1rem] tracking-wide sm:tracking-wider sm:w-full hljs"><code
                        lang="cpp">{@html highlighted_code}</code></pre>
            </div>
        {/if}
    </div>
</div>
