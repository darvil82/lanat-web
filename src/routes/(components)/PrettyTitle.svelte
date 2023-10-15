<div class="pretty-title">
	<h1 class="title">Features</h1>
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	.pretty-title {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			inset-inline: 0;
			top: 8rem;
			bottom: -1.3rem;
			background-image: linear-gradient(
				to right,
				var(--color-accent-1) 70%,
				var(--color-accent-2) 75%
			);
		}

		&::before {
			content: "";
			height: 75rem;
			position: absolute;
			inset: 0;
			pointer-events: none;
			top: 9.3rem;
			transition: 0;
			z-index: -1;
			background: conic-gradient(
				from -90deg at 75% 0,
				var(--color-accent-2) 180deg,
				rgba(94, 186, 169, 0) 298.12deg,
				rgba(81, 162, 147, 0) 360deg
			);

			@include utils.mask-image(
				linear-gradient(
					10deg,
					transparent 30%,
					rgba(255, 255, 255, 0.25) 55%,
					rgba(255, 255, 255, 0.8) 80%,
					white 90%
				)
			);
		}
	}

	.title {
		color: var(--color-accent-1);
		margin-left: 7rem;
	}
</style>
