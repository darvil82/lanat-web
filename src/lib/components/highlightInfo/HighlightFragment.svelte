<script>
	import { slide } from "svelte/transition"
</script>

<div class="highlight-fragment">
	<div class="contents">
		<slot name="contents" />
	</div>
	<div class="info" transition:slide={{ duration: 250 }}>
		<slot name="information" />
	</div>
</div>

<style lang="scss">
	.highlight-fragment {
		position: absolute;
		z-index: 1;
		inset: 0;
		bottom: unset;
		background-color: var(--color-secondary);
		outline: 2px solid var(--color-tertiary);
		border-radius: calc(var(--border-radius) / 2);
		box-shadow: 0 0 1rem var(--color-secondary);
		transition: 0.5s;

		.info {
			padding: 0.5rem;
			font-family: var(--default-font);
		}

		.contents {
			background-color: var(--color-primary);
			padding: 0.25rem;
		}
	}
</style>
