<script lang="ts">
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import Circle from "./Circle.svelte"
	import LetsBegin from "./LetsBegin.svelte"
	import Triangle from "./Triangle.svelte"
</script>

<div class="get-started-wrapper">
	<KeepCentered bigger>
		<h2 class="title-more">And much more!</h2>

		<div class="shapes">
			<Triangle color="var(--color-accent-2)" />
			<Circle color="var(--color-accent-1)" />
		</div>
	</KeepCentered>

	<div class="arrow"></div>

	<div class="lets-begin">
		<LetsBegin />
	</div>
</div>

<style lang="scss">
	.title-more {
		text-align: center;
		color: var(--color-accent-2);
		filter: drop-shadow(0 2rem 3rem with-opacity(currentColor, 0.5))
			brightness(var(--brightness, 1));
		z-index: 1;
		padding-left: min(40vw, 60rem);

		@include if-tablet() {
			padding-left: 0;
		}
	}

	.get-started-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-x: clip;
	}

	.shapes {
		position: absolute;
		top: 0;
		inset: 0;
		height: calc(max(100rem, 30vw));
		pointer-events: none;

		@include if-tablet {
			display: none;
		}
	}

	.arrow {
		position: relative;
		width: 1rem;
		height: 100rem;
		z-index: -1;
		flex-grow: 1;
		background: linear-gradient(
			to bottom,
			transparent 10rem,
			var(--color-accent-3) 25rem
		);

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			translate: -50% 50%;
			width: 3rem;
			aspect-ratio: 1;
			border-radius: 50%;
			background-color: var(--color-accent-3);
			z-index: 1;
		}

		@include if-tablet {
			height: 40rem;
		}
	}

	.lets-begin {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
