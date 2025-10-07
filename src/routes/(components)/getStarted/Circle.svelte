<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"

	export let color: CSSColor
	let pos: number = 0
</script>

<div style:background={color} style:translate="0 {pos}px"></div>

<style lang="scss">
	div {
		position: absolute;
		right: 10vw;
		top: 50%;
		width: min(30rem, 20vw);
		aspect-ratio: 1;
		border-radius: 50%;
	}
</style>
