<div class="code-wrapper">
	<slot />
</div>

<style lang="scss">
	.code-wrapper {
		background-color: var(--color-black);
		height: 100%;
		padding: 1rem;
		font-size: 0.85rem;
		border-radius: var(--border-radius);
		font-family: "Jetbrains Mono";

		* {
			white-space: pre;
		}
	}

	@mixin color-tag($tagname, $color) {
		:global(#{$tagname}) {
			--color: #{$color};
			color: var(--color);
		}
	}

	@include color-tag(aqua, aqua);
	@include color-tag(yellow, #ffcb6b);
	@include color-tag(blue, #68a9ff);
	@include color-tag(green, #5af78e);
	@include color-tag(purple, #c561ff);

	:global(error) {
		--color: tomato;
		color: var(--color);
		font-weight: bold;
	}

	:global(warning) {
		--color: #ffcb6b;
		color: var(--color);
		font-weight: bold;
	}

	:global([highlight]) {
		background-color: var(--color);
		color: var(--color-text-over-light);
	}
</style>
