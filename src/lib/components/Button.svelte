<script lang="ts">
	export let primary = false
</script>

<button class:primary>
	<slot />
</button>

<style lang="scss">
	.primary {
		$glow-blur: 3rem;
		$glow-opacity: 20%;

		padding: 0.5rem 3rem;
		background-image: linear-gradient(
			45deg,
			var(--color-accent-1),
			var(--color-accent-2)
		);
		background-size: 200%;
		color: var(--color-secondary);
		font-weight: 900;
		font-size: 3em;
		border-radius: 10px;
		box-shadow: 0 1rem $glow-blur 0
				color-mix(
					in srgb,
					var(--color-accent-1) $glow-opacity,
					rgba(0 0 0 / 0)
				),
			0 -1rem $glow-blur 0 color-mix(in srgb, var(--color-accent-2)
						$glow-opacity, rgba(0 0 0 / 0));
		outline: var(--color-accent-2) solid 0;
		transition: outline-width 0.15s, outline-offset 0.15s, box-shadow 0.25s,
			background-position 0.5s;

		&:hover {
			outline-width: 0.25rem;
			outline-offset: 0.25rem;
			--glow-opacity: 50%;
			cursor: pointer;
			background-position: right;
			box-shadow: 0 0 4rem 0
				color-mix(in srgb, var(--color-accent-2) 50%, rgba(0 0 0 / 0));
		}
	}
</style>
