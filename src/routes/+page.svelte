<script lang="ts">
	import Entrance from "./(components)/Entrance.svelte"
	import Features from "./(components)/Features.svelte"

	let features: Features
</script>

<main>
	<Entrance on:clicklearnmore={features.scrollIntoView} />

	<Features bind:this={features} />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}
</style>
