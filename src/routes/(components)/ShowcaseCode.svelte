<script lang="ts">
	import Code from "$lib/components/Code.svelte"

	export let code: string
	export let number: number
	export let title: string
</script>

<div class="showcase-code">
	<header>
		<h1>{number}</h1>
		<h3>{title}</h3>
	</header>
	<div class="code-wrapper">
		<Code {code} />
	</div>
</div>

<style lang="scss">
	.showcase-code {
		display: flex;
		flex-direction: column;
		background-color: var(--color-secondary);
		height: 100%;
		border-radius: var(--border-radius);
	}

	.code-wrapper {
		border-radius: var(--border-radius);
		overflow: hidden;
		flex-grow: 1;
	}

	header {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-inline: 1.5rem;
	}
</style>
