<script lang="ts">
	import type { CSSUnit, Optional } from "$lib/typedefs"
	import { onMount } from "svelte"

	export let src: string
	export let alt: string

	export let maxWidth: Optional<CSSUnit> = undefined
	export let maxHeight: Optional<CSSUnit> = undefined

	let loaded = false
	let img: HTMLImageElement

	onMount(() => {
		loaded = img.complete
	})
</script>

<div
	class="img-wrapper"
	class:skeleton-animation={!loaded}
	style:max-width={maxWidth}
	style:max-height={maxHeight}
>
	<img
		{src}
		{alt}
		draggable="false"
		loading="lazy"
		bind:this={img}
		on:load={() => (loaded = true)}
		style:visibility={loaded ? "visible" : "hidden"}
	/>
</div>

<style lang="scss">
	img {
		max-width: 100%;
	}
</style>
