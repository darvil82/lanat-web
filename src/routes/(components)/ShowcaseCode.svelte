<script lang="ts">
	import Code from "$lib/components/Code.svelte"
	import type { CSSUnit } from "$lib/typedefs"

	export let code: string
	export let number: number
	export let title: string
	export let gradientColor: CSSUnit
</script>

<div class="showcase-code" style:--gradient={gradientColor}>
	<header>
		<h1>{number}</h1>
		<h3>{title}</h3>
	</header>
	<Code {code} />
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	.showcase-code {
		display: flex;
		flex-direction: column;
		background-image: linear-gradient(
			100deg,
			var(--color-secondary) 20%,
			utils.with-opacity(var(--gradient), 0.5)
		);
		height: 100%;
		border-radius: var(--border-radius);
	}

	header {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-inline: 1.5rem;

		h1 {
			font-size: 7rem;
			color: var(--color-tertiary);
		}
	}
</style>
