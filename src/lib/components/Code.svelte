<script lang="ts">
	import { Highlight } from "svelte-highlight"
	import { java } from "svelte-highlight/languages"

	export let code: string
</script>

<div class="code-wrapper">
	<Highlight language={java} {code} />
</div>

<style lang="scss">
	.code-wrapper {
		background-color: var(--color-black);
		height: 100%;
		padding: 0.5rem;
		font-size: 0.85rem;
	}
</style>
