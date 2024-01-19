<script lang="ts">
	import type { CSSUnit } from "$lib/typedefs"

	export let fontSize: CSSUnit = "0.85rem"
</script>

<div class="code-wrapper monospace-font-sizeable" style:--f-size={fontSize}>
	<slot />
</div>

<style lang="scss">
	.code-wrapper {
		background-color: var(--color-black);
		color: var(--color-text-over-dark);
		height: 100%;
		padding: 1rem;
		border-radius: var(--border-radius);
		font-family: "Jetbrains Mono";

		* {
			white-space: pre;
		}
	}

	@mixin color-tag($tagname, $color) {
		:global(#{"" + $tagname}) {
			--color: #{$color};
			color: var(--color);
		}
	}

	@mixin errorlevel-tag($tagname, $color) {
		@include color-tag($tagname, $color);

		:global(#{"" + $tagname}) {
			font-weight: bold;
		}
	}

	@include color-tag(aqua, rgb(101, 255, 234));
	@include color-tag(yellow, #ffcb6b);
	@include color-tag(blue, #68a9ff);
	@include color-tag(green, #5af78e);
	@include color-tag(purple, #c561ff);

	@include errorlevel-tag(error, tomato);
	@include errorlevel-tag(warning, #ffcb6b);
	@include errorlevel-tag(info, #68a9ff);
	@include errorlevel-tag(debug, #5af78e);

	:global([highlight]) {
		background-color: var(--color);
		color: var(--color-text-over-light);
	}
</style>
