<script>
	import { page } from "$app/stores"
	import Link from "$lib/components/Link.svelte"
	import logo from "$lib/images/logo.svg"
	import { accentTheme } from "$lib/scripts/utils"
	import { faGithub } from "@fortawesome/free-brands-svg-icons"
	import { onMount } from "svelte"
	import Fa from "svelte-fa"
	import "svelte-highlight/styles/github-dark.css"
	import { fly } from "svelte/transition"
	import Footer from "./(components)/Footer.svelte"
	import "./app.scss"

	let showGithubButton = false

	onMount(() => {
		accentTheme.set(Math.floor(Math.random() * 3))

		if (window.scrollY > 0) {
			showGithubButton = true
			return
		}

		setTimeout(() => {
			showGithubButton = true
		}, 5000)
	})

	const description =
		"A command line argument parser for Java 17 with ease of use and high customization possibilities in mind."
</script>

<svelte:window on:scroll={() => (showGithubButton = true)} />

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

	{#if showGithubButton}
		<div class="github-label" transition:fly={{ x: -100, y: 100 }}>
			<Link
				href="https://github.com/DarviL82/Lanat"
				ariaLabel="GitHub repository"
			>
				<Fa
					icon={faGithub}
					color={"var(--color-primary)"}
					size="3rem"
				/>
			</Link>
		</div>
	{/if}
</div>

<style lang="scss">
	:global(.hljs) {
		// so we can easily override the background color later.
		// also prevent the bg color from changing when mounting components
		background-color: transparent;
	}

	.github-label {
		$size: 4.5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		padding: 1rem;

		&::before {
			content: "";
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: -1;

			background-color: transparent;
			border-top: $size solid transparent;
			border-left: $size solid var(--color-tertiary-light);
			border-bottom: $size solid var(--color-tertiary-light);
			border-right: $size solid transparent;

			filter: drop-shadow(-0.5rem 0.5rem 1rem var(--color-primary));
		}
	}
</style>
