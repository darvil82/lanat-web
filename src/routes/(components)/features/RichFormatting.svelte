<script>
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import Fa from "svelte-fa"

	import Feature from "../Feature.svelte"
	import { faDownLong } from "@fortawesome/free-solid-svg-icons"
	import Link from "$lib/components/Link.svelte"
	import TextLink from "$lib/components/TextLink.svelte"
</script>

<Feature title="Rich text formatting">
	Use tools that easily allow you to format text in descriptions with colors,
	and other text formatting when displaying it on the terminal.

	<div class="wrapper">
		<Code
			fontSize=".7vw"
			code={`
command.setDescription(
	"<color=cyan>Hello <format=b,i>world!<format=reset> "
	+ "<format=u>Here's some more <color=black:magenta>text<format=reset>"
)`}
		/>

		<div class="arrow-icon">
			<Fa icon={faDownLong} scale="4" color="var(--color-accent-1)" />
		</div>

		<Terminal fontSize=".9vw">
			<aqua>Hello <b><i>world!</i></b></aqua>
			<u>Here's some more </u><purple highlight><u>text</u></purple>
		</Terminal>
	</div>

	<p>
		When setting the description of elements, you can use the formatting
		tags that Lanat provides you with (As seen above). You are not limited
		with just coloring or formatting,
		<TextLink
			emphasis
			href="https://darvil82.github.io/lanat-docs/description-tags.html"
			>tags</TextLink
		> can also be used to <i>embed</i>
		the description of other elements, for example. Note that new custom tags
		can be created as well, with their own functionality.
	</p>
</Feature>

<style lang="scss">
	@use "$lib/utils.scss";

	.arrow-icon {
		display: grid;
		place-items: center;
		z-index: 1;

		@include utils.if-tablet {
			place-items: end;

			margin-right: 5rem;
		}
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		min-height: 15rem;

		> * {
			flex-grow: 1;
		}
	}
</style>
