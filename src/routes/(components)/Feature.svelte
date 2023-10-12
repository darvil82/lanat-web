<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"

	export let title: string
	export let glowTop: CSSColor = "transparent"
	export let glowRight: CSSColor = "transparent"
</script>

<div
	class="feature"
	style:--shadow-top-base-color={glowTop}
	style:--shadow-right-base-color={glowRight}
>
	<h2>{title}</h2>
	<slot />
</div>

<style lang="scss">
	@import "$lib/utils.scss";

	.feature {
		padding: 2.5rem;
		background-color: with-opacity(var(--color-secondary), 0.7);
		backdrop-filter: blur(5rem);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 30rem;

		--shadow-top: #{with-opacity(var(--shadow-top-base-color), 0.2)};
		--shadow-right: #{with-opacity(var(--shadow-right-base-color), 0.2)};

		$shadow-size: 8rem;
		box-shadow: inset -12rem 0 $shadow-size -10rem var(--shadow-right),
			inset 0 12rem $shadow-size -10rem var(--shadow-top);
	}
</style>
