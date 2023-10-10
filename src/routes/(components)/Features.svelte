<script lang="ts">
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import PrettyTitle from "./PrettyTitle.svelte"

	let mainDiv: HTMLDivElement

	export function scrollIntoView() {
		mainDiv.scrollIntoView({ behavior: "smooth" })
	}
</script>

<div class="features" bind:this={mainDiv}>
	<PrettyTitle />
</div>

<p>a feature</p>

<style lang="scss">
</style>
