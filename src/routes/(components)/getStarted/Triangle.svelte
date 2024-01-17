<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"

	export let color: CSSColor

	const ANGLE = 15
	let angle: number
	let trig: HTMLDivElement

	function updateAngle() {
		const top = trig.getBoundingClientRect().top

		if (window.innerHeight < top) return

		angle = ANGLE * -(top / window.innerHeight)
	}
</script>

<svelte:window on:scroll={updateAngle} />

<div class="svg-container" style:rotate={`${angle}deg`} bind:this={trig}>
	<svg viewBox="0 0 196 196">
		<path
			stroke="none"
			fill={color}
			d={`M95.401923788647 14.397459621556a3 3 0 0 1 5.1961524227066 0l94.803847577293 164.20508075689a3 3 0 0 1 -2.5980762113533 4.5l-189.60769515459 0a3 3 0 0 1 -2.5980762113533 -4.5`}
		/>
	</svg>
</div>

<style lang="scss">
	.svg-container {
		width: max(65vw, 65vh);
		aspect-ratio: 1;
		filter: drop-shadow(0 4rem 1rem rgba(0, 0, 0, 0.2));
	}
</style>
