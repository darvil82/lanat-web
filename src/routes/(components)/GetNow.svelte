<script lang="ts">
	import { slide } from "svelte/transition"

	export let shown = false
</script>

{#if shown}
	<div class="get-now" transition:slide />
{/if}

<style lang="scss">
	.get-now {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			45deg,
			var(--color-accent-1),
			var(--color-accent-2)
		);
	}
</style>
