<script>
	import { accentTheme } from "$lib/scripts/utils"
	import { onMount } from "svelte"
	import Footer from "./(components)/Footer.svelte"
	import "./app.scss"
	import "svelte-highlight/styles/github-dark.css"

	onMount(() => {
		accentTheme.set(Math.floor(Math.random() * 3))
	})
</script>

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
