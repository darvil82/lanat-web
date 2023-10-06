<script lang="ts">
	import IconLink from "$lib/components/BigLink.svelte"
	import CloseButton from "$lib/components/CloseButton.svelte"
	import Fa from "svelte-fa"
	import { slide, fly } from "svelte/transition"
	import { faGithub } from "@fortawesome/free-brands-svg-icons"

	let shown = false
	let animateTitle = false
	let anchorPos = { top: 0, left: 0, width: 0 }
	let getNowContainer: HTMLDivElement
	let getNowContainerHeight = 0

	function toggle(anchor: HTMLElement) {
		if (!shown) show(anchor)
		else hide()
	}

	export function show(anchor: HTMLElement) {
		shown = true
		anchorPos = {
			top: anchor.offsetTop,
			left: anchor.offsetLeft,
			width: anchor.offsetWidth,
		}

		// move title in place after a bit
		setTimeout(() => {
			animateTitle = true
			anchorPos.left = 50
			anchorPos.top = 25
		}, 300)
	}

	function hide() {
		shown = false
		animateTitle = false
	}
</script>

<svelte:window bind:innerHeight={getNowContainerHeight} />

{#if shown}
	<div
		class="anim-title"
		class:animate={animateTitle}
		style:left={anchorPos.left + "px"}
		style:top={anchorPos.top + "px"}
		style:width={anchorPos.width + "px"}
		out:fly={{ duration: 500, y: 200 }}
	>
		Get it now
	</div>
	<div
		bind:this={getNowContainer}
		class="get-now"
		in:fly={{ duration: 1000, y: -getNowContainerHeight, opacity: 1 }}
		out:fly={{ duration: 500, y: 200 }}
	>
		<div
			class="close-btn"
			in:fly={{ delay: 1500, y: -100, opacity: 1 }}
			out:slide
		>
			<CloseButton on:click={hide} />
		</div>
		<div class="content" in:fly={{ delay: 750, y: 50 }}>
			<p>
				Lanat is an open-source project publicly available. The code is
				hosted on Github and you can download it from there. It's
				licensed under the MIT license, so you can use it for free in
				your projects.
			</p>
			<div>
				<h3>Get it on</h3>
				<div class="links">
					<IconLink
						href="https://github.com/DarviL82/Lanat?tab=readme-ov-file#gradle"
						icon={faGithub}
					>
						Github
					</IconLink>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.get-now {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			45deg,
			var(--color-accent-1),
			var(--color-accent-2)
		);
		padding: 3.5rem;
		padding-top: 9rem;
	}

	.content {
		color: var(--color-secondary);
		display: flex;
		flex-direction: column;
		gap: 2rem;

		> div {
			display: flex;
			gap: 1rem;
			flex-direction: column;
		}

		.links {
			display: flex;
			gap: 2rem;
		}
	}

	.close-btn {
		position: absolute;
		top: 0;
		right: 2rem;
	}

	.anim-title {
		position: absolute;
		z-index: 1;
		color: var(--color-secondary);
		font-size: 3rem;
		padding: 0.5rem 3rem;
		font-weight: 900;
		text-align: center;
		pointer-events: none;

		&.animate {
			transition: 0.75s;
			font-size: 5rem;
			padding: 0;
			text-align: left;
			width: 100% !important; // to quickly override the width set with ts
		}
	}
</style>
