<script lang="ts">
	import CloseButton from "$lib/components/CloseButton.svelte"
	import { slide, fly } from "svelte/transition"

	let shown = false
	let animateTitle = false
	let anchorPos = { top: 0, left: 0, width: 0 }

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

{#if shown}
	<div
		class="anim-title"
		class:animate={animateTitle}
		style:left={anchorPos.left + "px"}
		style:top={anchorPos.top + "px"}
		style:width={anchorPos.width + "px"}
		out:fly={{ y: 1000, duration: 1000 }}
	>
		Get it now
	</div>
	<div
		class="get-now"
		in:fly={{ duration: 1000, y: -1000 }}
		out:fly={{ duration: 1000, y: 1000 }}
	>
		<div class="close-btn" in:fly={{ delay: 1000, y: -100 }} out:slide>
			<CloseButton on:click={hide} />
		</div>
		<div class="content">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
			provident placeat harum sed eveniet accusantium nostrum
			consequuntur? Quam esse dignissimos tempore eos laborum
			exercitationem amet. Commodi vitae est accusamus pariatur!
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
		color: var(--color-text-over-light);
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
			transition: 0.5s;
			font-size: 5rem;
			padding: 0;
			text-align: left;
			width: 100% !important; // to quickly override the width set with ts
		}
	}
</style>
