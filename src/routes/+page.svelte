<script lang="ts">
	import Entrance from "./(components)/Entrance.svelte"
	import Features from "./(components)/Features.svelte"
	import GetStarted from "./(components)/GetStarted.svelte"

	let features: Features
</script>

<main>
	<Entrance on:clicklearnmore={features.scrollIntoView} />

	<Features bind:this={features} />

	<GetStarted></GetStarted>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}
</style>
