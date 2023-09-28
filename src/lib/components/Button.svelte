<script lang="ts">
	export let primary = false
</script>

<button class:primary>
	<slot />
</button>

<style lang="scss">
	@import "$lib/utils.scss";

	button {
		padding: 0.5rem 3rem;
		font-weight: 900;
		border-radius: 10px;

		&:hover {
			cursor: pointer;
		}

		&.primary {
			$glow-blur: 3rem;
			$glow-opacity: 0.22;

			background-image: linear-gradient(
				45deg,
				var(--color-accent-1),
				var(--color-accent-2)
			);
			background-size: 200%;
			color: var(--color-secondary);
			font-size: 3em;
			box-shadow: 0 1rem $glow-blur 0
					with-opacity(var(--color-accent-1), $glow-opacity),
				0 -1rem $glow-blur 0 with-opacity(var(--color-accent-2), $glow-opacity);
			outline: var(--color-accent-2) solid 0;
			transition: outline-width 0.15s, outline-offset 0.15s,
				box-shadow 0.25s, background-position 0.5s;

			&:hover {
				outline-width: 0.25rem;
				outline-offset: 0.25rem;
				--glow-opacity: 50%;
				background-position: right;
				box-shadow: 0 0 4rem 0 with-opacity(var(--color-accent-2), 0.5);
			}
		}

		&:not(.primary) {
			--color: var(--color-tertiary);
			background-color: with-opacity(var(--color-primary), 0.5);
			outline: var(--color) solid 0.15rem;
			color: var(--color);
			font-size: 1.5em;
			transition: 0.25s;

			&:hover {
				--color: var(--color-tertiary-light);
				box-shadow: 0 0 2rem 0 with-opacity(var(--color), 0.25);
			}
		}
	}
</style>
