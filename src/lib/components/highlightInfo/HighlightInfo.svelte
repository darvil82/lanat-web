<script lang="ts" context="module">
	const infos: (() => void)[] = []
	let anyClicked = writable(false)

	function removeDisabler(disabler: () => void) {
		infos.splice(infos.indexOf(disabler), 1)
	}

	function disableAll(exclusion: () => void) {
		anyClicked.set(true)
		infos.filter(info => info != exclusion).forEach(info => info())
	}
</script>

<script lang="ts">
	import { onDestroy, onMount } from "svelte"

	import HighlightFragment from "./HighlightFragment.svelte"
	import { writable } from "svelte/store"

	let active = false

	function disabler() {
		active = false
	}

	function toggle() {
		active = !active

		if (active) disableAll(disabler)
	}

	onMount(() => {
		infos.push(disabler)
	})

	onDestroy(() => {
		removeDisabler(disabler)
	})
</script>

<button
	class="highlight"
	class:active
	on:click={toggle}
	class:eyegrabber={!$anyClicked}
>
	<div class="contents" style:visibility={active ? "hidden" : undefined}>
		<slot />
	</div>
	{#if active}
		<HighlightFragment>
			<svelte:fragment slot="contents">
				<slot />
			</svelte:fragment>
			<svelte:fragment slot="information">
				<slot name="info" />
			</svelte:fragment>
		</HighlightFragment>
	{/if}
</button>

<style lang="scss">
	@use "$lib/utils.scss";

	.highlight {
		position: relative;
		padding: 0.25rem;
		margin: -0.25rem;
		cursor: pointer;
		text-align: left;
		border-radius: calc(var(--border-radius) / 2);
		background-color: utils.with-opacity(var(--color-secondary), 0.5);
		outline: 3px dashed var(--color-tertiary);
		transition: 0.25s;

		&:hover {
			outline-style: solid;
			background-color: utils.with-opacity(var(--color-secondary), 0.75);
		}

		&.eyegrabber::after {
			content: "";
			position: absolute;
			inset: 0;
			right: 100%;
			background: white;
			mix-blend-mode: overlay;
			opacity: 0.5;
			animation: eyegrabber 2.75s infinite forwards;

			@keyframes eyegrabber {
				0% {
					left: 0;
					right: 100%;
				}
				13% {
					left: 0;
					right: 0;
				}
				25% {
					left: 100%;
					right: 0;
				}
				100% {
					left: 100%;
					right: 0;
				}
			}
		}
	}
</style>
