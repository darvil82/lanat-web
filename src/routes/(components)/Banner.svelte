<script lang="ts">
	import Image from "$lib/components/Image.svelte"
	import logo_white from "$lib/images/logo/logo_white.png"
</script>

<div class="banner">
	<Image src={logo_white} alt="Logo" />
	<p class="info">
		Lanat is a command line argument parser for Java 17 with ease of use and
		high customization possibilities in mind.
	</p>
</div>

<style lang="scss">
	.banner {
		background-color: var(--color-secondary);
		height: 100%;
		padding: 2rem;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
