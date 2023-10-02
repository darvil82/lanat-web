<script lang="ts">
	import Button from "$lib/components/Button.svelte"
	import Image from "$lib/components/Image.svelte"
	import logo_white from "$lib/images/logo/logo_white.png"
	import { createEventDispatcher } from "svelte"

	let dispatch = createEventDispatcher()

	function showGetNow(e: MouseEvent) {
		dispatch("clickgetnow", e.target)
	}
</script>

<div class="banner">
	<Image src={logo_white} alt="Logo" maxWidth={"30rem"} />
	<p class="info">
		Lanat is a command line argument parser for Java 17 with ease of use and
		high customization possibilities in mind.
	</p>
	<div class="buttons">
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
	}

	.info {
		text-align: center;
		font-size: 1.25em;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
