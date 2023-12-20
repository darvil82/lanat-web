<script lang="ts">
	import { slide } from "svelte/transition"

	let active = false
</script>

<button class="highlight" class:active on:click={() => (active = !active)}>
	<div class="contents"><slot /></div>
	{#if active}
		<div class="info" transition:slide={{ duration: 500 }}>
			<slot name="info" />
		</div>
	{/if}
</button>

<style lang="scss">
	@use "$lib/utils.scss";

	.highlight {
		position: absolute;
		transform-origin: top left;
		outline: 3px dashed utils.with-opacity(var(--color-secondary), 0.5);
		padding: 0.25rem;
		margin: -0.25rem;
		cursor: pointer;
		text-align: left;
		transition: 0.15s;

		&:hover {
			outline: 2px solid var(--color-secondary);
			background-color: utils.with-opacity(var(--color-secondary), 0.2);
		}

		.contents {
			transition: 0.5s;
		}

		.info {
			margin-top: 0.5rem;
			max-width: 30rem;
			font-family: var(--default-font);
		}

		&,
		.contents {
			border-radius: calc(var(--border-radius) / 2);
		}

		&.active {
			padding: 0.5rem;
			scale: 1.15;
			background-color: var(--color-secondary);
			outline: 2px solid var(--color-tertiary);
			transition: 0.5s;

			.contents {
				background-color: var(--color-primary);
				padding: 0.5rem;
			}
		}
	}
</style>
