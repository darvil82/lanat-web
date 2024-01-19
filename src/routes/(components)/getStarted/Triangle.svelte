<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"
	import { onMount } from "svelte"

	export let color: CSSColor

	const ANGLE = 100
	let angle: number
	let trig: HTMLDivElement
	let show = false

	function updateAngle() {
		const top = trig.getBoundingClientRect().top

		if (window.innerHeight < top) return

		angle = (window.innerWidth / ANGLE) * -(top / window.innerHeight)
	}

	onMount(() => {
		show = true
		updateAngle()
	})
</script>

<svelte:window on:scroll={updateAngle} on:resize={updateAngle} />

<div class="svg-container" class:show bind:this={trig}>
	<svg viewBox="0 0 196 196" style:rotate="{angle}deg">
		<path
			stroke="none"
			fill={color}
			d={`M95.401923788647 14.397459621556a3 3 0 0 1 5.1961524227066 0l94.803847577293 164.20508075689a3 3 0 0 1 -2.5980762113533 4.5l-189.60769515459 0a3 3 0 0 1 -2.5980762113533 -4.5`}
		/>
	</svg>
</div>

<style lang="scss">
	.svg-container {
		position: absolute;
		top: 0;
		left: 0;
		width: max(100rem, 30vw);
		aspect-ratio: 1;
		translate: calc(min(30rem, 20vw) * -1);

		filter: drop-shadow(0 4rem 1rem rgba(0, 0, 0, 0.2));
		transition: opacity 0.25s;

		&:not(.show) {
			opacity: 0;
		}
	}
</style>
