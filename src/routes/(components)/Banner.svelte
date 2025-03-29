<script lang="ts">
	import Button from "$lib/components/Button.svelte"
	import Image from "$lib/components/Image.svelte"
	import logo from "$lib/images/logo.png"
	import { createEventDispatcher } from "svelte"
	import { slide } from "svelte/transition"

	let dispatch = createEventDispatcher()

	function showGetNow(e: MouseEvent) {
		dispatch("clickgetnow", e.target)
	}
</script>

<div class="banner">
	<Image src={logo} alt="Logo" maxWidth={"30rem"} />
	<p class="info">
		Lanat is a command line argument parser for Java 17 with ease of use and
		high customization possibilities in mind.
	</p>
	<div class="buttons" transition:slide={{ axis: "y" }}>
		<Button primary on:click={showGetNow}>Get it now</Button>
		<Button on:click={() => dispatch("clicklearnmore")}>Learn more</Button>
	</div>
</div>

<style lang="scss">
	.banner {
		background-color: var(--color-secondary);
		height: 100%;
		padding: 4rem;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;

		@include if-mobile {
			padding: 1.5rem;
		}
	}

	.info {
		text-align: center;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
