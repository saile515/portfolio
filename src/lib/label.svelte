<script lang="ts">
	let for_: string;
	export { for_ as for };
	export let label: string;
</script>

<label
	for={for_}
	class="flex flex-col overflow-hidden relative border-b-2 has-[:focus]:border-mauve transition-colors my-2"
>
	<span class="p-1 text-sm absolute top-1 left-2">{label}</span>
	<slot />
</label>
