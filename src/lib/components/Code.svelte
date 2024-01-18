<script lang="ts">
	import type { CSSUnit } from "$lib/typedefs"
	import { onMount } from "svelte"
	import { Highlight } from "svelte-highlight"
	import type { LanguageType } from "svelte-highlight/languages/index"
	import java from "svelte-highlight/languages/java"

	export let code: string
	export let language: LanguageType<string> = java
	export let fontSize: CSSUnit = "0.85rem"
	export let disallowScroll = false

	let bottomOverflowing = false
	let topOverflowing = false
	let codeWrapper: HTMLDivElement

	function updateOverflowing() {
		const { scrollHeight, scrollTop, clientHeight } = codeWrapper
		bottomOverflowing = scrollHeight - scrollTop > clientHeight
		topOverflowing = scrollTop > 0
	}

	onMount(updateOverflowing)
</script>

<svelte:window on:resize={updateOverflowing} />

<div
	class="code-wrapper"
	class:bottom-overflowing={bottomOverflowing}
	class:top-overflowing={topOverflowing}
	style:font-size={`min(max(.85rem, ${fontSize}), 2rem)`}
>
	<div
		bind:this={codeWrapper}
		on:scroll={updateOverflowing}
		style:overflow={disallowScroll ? "hidden" : "auto"}
	>
		<Highlight {language} code={code.trim()} />
	</div>
</div>

<style lang="scss">
	.code-wrapper {
		position: relative;
		display: flex;
		background-color: var(--color-black);
		height: 100%;
		border-radius: var(--border-radius);
		overflow: hidden;

		> * {
			display: flex;
			height: 100%;
			width: 100%;
		}

		&::before,
		&::after {
			content: "";
			position: absolute;
			left: 0;
			right: var(--scrollbar-size);
			height: 3rem;
			opacity: 0;
			pointer-events: none;
			transition: 0.5s;
		}

		&.bottom-overflowing::before {
			bottom: 0;
			opacity: 1;
			background: linear-gradient(
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.5) 50%,
				rgba(0, 0, 0, 1)
			);
		}

		&.top-overflowing::after {
			opacity: 1;
			top: 0;
			background: linear-gradient(
				rgba(0, 0, 0, 1),
				rgba(0, 0, 0, 0.5) 50%,
				rgba(0, 0, 0, 0)
			);
		}
	}
</style>
