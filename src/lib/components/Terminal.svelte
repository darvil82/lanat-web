<div class="code-wrapper">
	<slot />
</div>

<style lang="scss">
	.code-wrapper {
		display: flex;
		overflow: auto;
		background-color: var(--color-black);
		height: 100%;
		padding: 1rem;
		font-size: 0.85rem;
		border-radius: var(--border-radius);
	}

	@mixin color-tag($tagname, $color) {
		:global(#{$tagname}) {
			color: $color;
		}
	}

	@include color-tag(argument, #ffcb6b);
	@include color-tag(command, #ffcb6b);
	@include color-tag(value, #ffcb6b);
</style>
