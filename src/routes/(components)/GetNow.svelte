<script lang="ts">
	import IconLink from "$lib/components/BigLink.svelte"
	import CloseButton from "$lib/components/CloseButton.svelte"
	import { slide, fly } from "svelte/transition"
	import { faJava, faGithub } from "@fortawesome/free-brands-svg-icons"
	import { isTablet, setScrollingEnabled } from "$lib/scripts/utils"

	let shown = false
	let animateTitle = false
	let anchorPos = { top: 0, left: 0, width: 0 }
	let getNowContainerHeight = 0

	export function show(anchor: HTMLElement) {
		let newPos: Omit<typeof anchorPos, "width">

		if (isTablet()) {
			setScrollingEnabled(false)
			const rect = anchor.getBoundingClientRect()

			// on tablet the get-now container is fixed, so the position is relative to the viewport
			newPos = {
				top: rect.y,
				left: rect.x,
			}
		} else {
			scrollTo({ top: 0, behavior: "smooth" })
			// on desktop the get-now container is absolute, so the position is relative to the parent
			newPos = {
				top: anchor.offsetTop,
				left: anchor.offsetLeft,
			}
		}

		anchorPos = {
			...newPos,
			width: anchor.offsetWidth,
		}

		shown = true

		// move title in place after a bit
		setTimeout(() => {
			animateTitle = true
			anchorPos.left = 105
			anchorPos.top = 75
		}, 200)
	}

	function hide() {
		shown = false
		animateTitle = false
		setScrollingEnabled(true)
	}
</script>

<svelte:window
	bind:innerHeight={getNowContainerHeight}
	on:resize={() => {
		if (!shown) return

		if (isTablet()) scrollTo(0, 0)

		setScrollingEnabled(!isTablet())
	}}
/>

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
						href="https://github.com/DarviL82/Lanat/packages/"
						icon={faGithub}
					>
						Github
					</IconLink>
					<IconLink
						href="https://github.com/DarviL82/Lanat?tab=readme-ov-file#installation"
						icon={faJava}
					>
						Maven
					</IconLink>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use "$lib/utils.scss";

	.get-now {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			45deg,
			var(--color-accent-1),
			var(--color-accent-2)
		);
		padding: 7rem;
		padding-top: 15rem;
		z-index: 1;
		transition: 0.75s;

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
				flex-wrap: wrap;
				gap: 2rem;
			}
		}

		.close-btn {
			position: absolute;
			top: 0;
			right: 2rem;
		}

		@include utils.if-tablet {
			position: fixed;
			padding: 2rem;
			padding-top: 10rem;
		}
	}

	.anim-title {
		position: absolute;
		z-index: 2;
		color: var(--color-secondary);
		font-size: 3rem;
		padding: 0.5rem 3rem;
		font-weight: 900;
		text-align: center;

		&.animate {
			transition: 0.75s;
			font-size: 7rem;
			padding: 0;
			text-align: left;
			width: 100% !important; // to quickly override the width set with ts
		}

		@include utils.if-tablet {
			position: fixed;

			&.animate {
				// we change this here so that if the window is resized, the title moves with it
				translate: -4.75rem -2rem;
				font-size: 5rem;
			}
		}
	}
</style>
