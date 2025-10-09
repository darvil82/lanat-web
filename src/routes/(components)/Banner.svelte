<script lang="ts">
	import Button from "$lib/components/Button.svelte"
	import Image from "$lib/components/Image.svelte"
	import logo from "$lib/images/logo.svg"
	import { createEventDispatcher } from "svelte"
	import { slide } from "svelte/transition"

	let dispatch = createEventDispatcher()
</script>

<div class="banner">
	<Image src={logo} alt="Logo" maxWidth={"40rem"} />
	<p class="info">
		Lanat is a command line argument parser for Java 17 with ease of use and
		high customization possibilities in mind.
	</p>
	<div class="buttons" transition:slide={{ axis: "y" }}>
		<Button primary on:click={e => dispatch("clickgetnow", e.target)}>
			Get it now
		</Button>
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
