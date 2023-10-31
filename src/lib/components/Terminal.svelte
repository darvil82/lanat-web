<script lang="ts">
	import Convert from "ansi-to-html"

	export let stdout: string
</script>

<div class="code-wrapper">
	{@html new Convert().toHtml(stdout)}
</div>

<style lang="scss">
	.code-wrapper {
		display: flex;
		overflow: auto;
		background-color: var(--color-black);
		height: 100%;
		padding: 1rem;
		font-size: 0.85rem;
		border-radius: var(--border-radius);
	}
</style>
