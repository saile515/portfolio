<script lang="ts">
    export let name: string;
    export let description: string;
    export let image: string;
    export let url: string;
</script>

<a href={url} target="_blank"
    ><div class="flex flex-col w-full h-full max-w-sm bg-mantle rounded-lg overflow-hidden">
        <img src={image} alt={`Image from ${name} project.`} class="h-80 object-cover object-center" />
        <div class="p-6">
            <h3 class="text-2xl">{name}</h3>
            <p>{description}</p>
        </div>
    </div>
</a>
