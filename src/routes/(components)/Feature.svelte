<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"

	export let title: string
	export let glowTopPower = 1
	export let glowRightPower = 1
	export let glowTop: CSSColor = "transparent"
	export let glowRight: CSSColor = "transparent"
</script>

<div
	class="feature"
	style:--shadow-top-base-color={glowTop}
	style:--shadow-right-base-color={glowRight}
	style:--light-power-top={glowTopPower}
	style:--light-power-right={glowRightPower}
>
	<h2>{title}</h2>
	<slot />
</div>

<style lang="scss">
	.feature {
		padding: 2rem;
		background-color: with-opacity(var(--color-secondary), 0.7);
		backdrop-filter: blur(5rem);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-height: 30rem;

		--shadow-top: #{with-opacity(
				var(--shadow-top-base-color),
				calc(0.2 * var(--light-power-top))
			)};
		--shadow-right: #{with-opacity(
				var(--shadow-right-base-color),
				calc(0.2 * var(--light-power-right))
			)};

		$shadow-size: 8rem;
		box-shadow:
			inset -12rem 0 $shadow-size -10rem var(--shadow-right),
			inset 0 12rem $shadow-size -10rem var(--shadow-top),
			0 12rem 4rem -10rem rgba(0, 0, 0, 0.2);

		@include if-mobile {
			padding: 1.5rem;
		}
	}
</style>
