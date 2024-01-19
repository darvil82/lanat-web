<script>
	import { accentTheme } from "$lib/scripts/utils"
	import { onMount } from "svelte"
	import Footer from "./(components)/Footer.svelte"
	import "./app.scss"
	import "svelte-highlight/styles/github-dark.css"
	import { page } from "$app/stores"
	import logo from "$lib/images/logo.png"

	onMount(() => {
		accentTheme.set(Math.floor(Math.random() * 3))
	})

	const description =
		"A command line argument parser for Java 17 with ease of use and high customization possibilities in mind."
</script>

<svelte:head>
	<title>Lanat</title>
	<meta property="og:title" content="Lanat" />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Lanat" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={logo} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content={"#70ddc9"} />
</svelte:head>

<div class="main-wrapper accent-theme-{$accentTheme}">
	<slot />
	<Footer />
</div>

<style lang="scss">
	:global(.hljs) {
		// so we can easily override the background color later.
		// also prevent the bg color from changing when mounting components
		background-color: transparent;
	}
</style>
