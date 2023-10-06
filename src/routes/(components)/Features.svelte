<script lang="ts">
	import KeepCentered from "$lib/components/KeepCentered.svelte"

	let mainDiv: HTMLDivElement

	export function scrollIntoView() {
		mainDiv.scrollIntoView({ behavior: "smooth" })
	}
</script>

<div class="features" bind:this={mainDiv}>
	<KeepCentered>
		<h1>Features</h1>
	</KeepCentered>
</div>
