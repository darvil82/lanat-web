<script lang="ts">
	import Code from "$lib/components/Code.svelte"
	import { isTablet } from "$lib/scripts/utils"
	import type { CSSUnit } from "$lib/typedefs"
	import { onMount } from "svelte"

	export let code: string
	export let number: number
	export let title: string
	export let gradientColor: CSSUnit

	let show = false

	onMount(() => {
		if (isTablet() || window.scrollY > 0) {
			show = true
			return
		}

		setTimeout(() => (show = true), 1500 * Math.max(number - 1, 0))
	})
</script>

<svelte:window on:scroll={() => (show = true)} />

<div class="showcase-code" style:--gradient={gradientColor} class:show>
	<header>
		<h1>{number}</h1>
		<h3>{title}</h3>
	</header>
	<Code {code} fontSize="1.5vh" />
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	.showcase-code {
		display: flex;
		flex-direction: column;
		background-image: linear-gradient(
			100deg,
			var(--color-secondary) 20%,
			utils.with-opacity(var(--gradient), 0.5)
		);
		background-size: 300% 100%;
		height: 100%;
		border-radius: var(--border-radius);

		header {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding-inline: 1.5rem;
			padding-block: 0.5vh;

			h1,
			h3 {
				transition: 0.75s;
				opacity: 0;
			}

			h1 {
				font-size: 7rem;
				color: var(--color-tertiary);
				translate: 0 100%;
			}

			h3 {
				translate: 10rem;
			}
		}

		&.show {
			background-size: 100% 100%;
			transition: 0.75s;

			header {
				h1 {
					translate: 0;
					opacity: 1;
				}

				h3 {
					translate: 0;
					opacity: 1;
				}
			}
		}
	}
</style>
