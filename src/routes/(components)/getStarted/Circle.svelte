<script lang="ts">
	import type { CSSColor } from "$lib/typedefs"

	export let color: CSSColor
	let pos: number
</script>

<div style:background={color} style:translate="0 {pos}px"></div>

<style lang="scss">
	div {
		position: absolute;
		right: 10vw;
		top: 50%;
		width: max(23rem, 20vw);
		aspect-ratio: 1;
		border-radius: 50%;
	}
</style>
