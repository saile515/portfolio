<script lang="ts">
    import "../app.css";
    import Head from "../lib/head.svelte";
    import About from "../lib/about.svelte";
    import Projects from "../lib/projects.svelte";
    import Contact from "../lib/contact.svelte";
</script>

<svelte:head>
    <title>Elias Jörgensen</title>
</svelte:head>

<div class="overflow-x-hidden text-text font-mono">
    <Head />
    <About />
    <Projects />
    <Contact />
</div>
