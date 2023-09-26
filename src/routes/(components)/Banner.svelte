<script lang="ts">
	import Button from "$lib/components/Button.svelte"
	import Image from "$lib/components/Image.svelte"
	import logo_white from "$lib/images/logo/logo_white.png"
</script>

<div class="banner">
	<Image src={logo_white} alt="Logo" maxWidth={"30rem"} />
	<p class="info">
		Lanat is a command line argument parser for Java 17 with ease of use and
		high customization possibilities in mind.
	</p>
	<Button primary>Get it now</Button>
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
</style>
