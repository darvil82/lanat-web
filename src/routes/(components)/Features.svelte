<script lang="ts">
	import { onMount } from "svelte"
	import Feature from "./Feature.svelte"
	import PrettyTitle from "./PrettyTitle.svelte"
	import { isTablet } from "$lib/scripts/utils"
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	let mainDiv: HTMLDivElement
	let featureGrid: HTMLDivElement
	let mainFeaturesContainer: HTMLDivElement

	const FEATURE_PROPERTY_POS = "--shadow-top-base-color"
	const FEATURE_PROPERTY_COLOR = "var(--color-accent-2)"

	export function scrollIntoView() {
		mainDiv.scrollIntoView({ behavior: "smooth" })
	}

	function setFeatureGlow(feature: HTMLDivElement, apply: boolean) {
		if (apply) {
			feature.style.setProperty(
				FEATURE_PROPERTY_POS,
				FEATURE_PROPERTY_COLOR
			)
		} else {
			feature.style.removeProperty(FEATURE_PROPERTY_POS)
		}
	}

	function updateFeaturesGlow() {
		featureGrid
			.querySelectorAll<HTMLDivElement>(".feature")
			.forEach(feature => {
				const posX = feature.offsetLeft - featureGrid.offsetLeft
				const posY = feature.offsetTop - featureGrid.offsetTop

				const percLeft =
					posX / (featureGrid.offsetWidth - feature.offsetWidth)
				const isSingleCol =
					feature.offsetWidth - featureGrid.offsetWidth >= 0

				// only apply glow if the feature is in the first row and
				// it's visible to the "light source"
				setFeatureGlow(
					feature,
					(percLeft >= 0.4 || isSingleCol) && posY == 0 && !isTablet()
				)
			})
	}

	function setZIndices() {
		mainFeaturesContainer
			.querySelectorAll<HTMLDivElement>(".feature")
			.forEach((feature, i, list) => {
				feature.style.zIndex = `${list.length - i}`
			})
	}

	onMount(() => {
		setZIndices()
		updateFeaturesGlow()
	})
</script>

<svelte:window on:resize={updateFeaturesGlow} />

<div bind:this={mainDiv}>
	<PrettyTitle />
	<div class="features" bind:this={mainFeaturesContainer}>
		<div class="first-row">
			<Feature
				title="Readable errors"
				glowTop="var(--color-accent-1)"
				glowRight="var(--color-accent-2)"
			>
				Make the users of your software be glad they made that error.
				Completely customizable error messages with different error
				levels.
				<Terminal>
					<!-- $ josh ! --number 2 sub1 --required 1 --number 121 -->
					$ josh ! --number 2 sub1 --required 1 --number 121<br />
					<br />

					<!--  ┌─ERROR -->
					<warning>&nbsp;┌─WARNING</warning><br />

					<!-- my-program josh --number 2 sub1 --required 1 --number 121 -->
					<aqua>my-program</aqua> <yellow>josh</yellow>
					<yellow highlight>!</yellow> <blue>--number</blue>
					<yellow>2</yellow> <aqua>sub1</aqua>
					<green>--required</green> <yellow>1</yellow>
					<purple>--number</purple> <yellow>121</yellow><br />

					<!--
						│ The user cannot be '!'.
						└────────────────── ───── ── ─
						-->
					<warning>
						&nbsp;│ The user '!' was not found.<br />
						&nbsp;└────────────────── ───── ── ─
					</warning>

					<br />
					<br />

					<HighlightInfo>
						<!-- my-program josh --number 2 sub1 --required 1 --number 121 -->
						<error>&nbsp;┌─ERROR</error><br />
						<aqua>my-program</aqua> <yellow>josh</yellow>
						<yellow>!</yellow> <blue>--number</blue>
						<yellow>2</yellow> <aqua>sub1</aqua>
						<green>--required</green> <yellow>1</yellow>
						<purple>--number</purple>
						<error highlight>121</error><br />

						<!--
					│ Value must be between 0.0 and 15.23.
					└────────────────── ───── ── ─
					-->
						<error>
							&nbsp;│ Value must be between 0.0 and 15.23.<br />
							&nbsp;└────────────────── ───── ── ─
						</error>

						<svelte:fragment slot="info">
							<p>
								Errors can have different levels, those being
								<error>ERROR</error>, <warning>WARNING</warning>
								, <info>INFO</info> and <debug>DEBUG</debug>. As
								you might have noticed, the error messages are
								colored according to their level.
							</p>
							<p>
								By default, errors with a level of
								<error>ERROR</error>
								will cause the program to exit with a non-zero exit
								code.
							</p>
						</svelte:fragment>
					</HighlightInfo>
				</Terminal>
			</Feature>
		</div>
		<div class="grid" bind:this={featureGrid}>
			<Feature title="Automated help messages">
				Detailed help messages automatically generated for you, based on
				the structure of your commands.

				<Terminal>
					<!-- $ my-program --help -->
					$ my-program --help<br />
					<br />

					This is the description of my program. What do you think
					about it? Oh by the way, don't forget to use the
					<HighlightInfo>
						<aqua><u><b>Example1Type(user/u)</b></u></aqua>

						<svelte:fragment slot="info">
							When defining descriptions, you can reference other
							elements such as arguments, as seen here.
						</svelte:fragment>
					</HighlightInfo> argument!
					<br /><br />

					<aqua><u><b>Example1Type(user/u)</b></u></aqua>
					<yellow>--test Integer</yellow> <green>--help/h</green>
					<purple>--counter/c</purple>
					<blue>--number Double<yellow>[0.0-15.23]</yellow></blue>
					&lbrace;<b>sub1</b>&rbrace;
					<br /><br />

					Description:<br /><br />

					<aqua><u><b>Example1Type(user/u)</b></u></aqua>:<br />
					&nbsp;&nbsp;Specify the user/s to use.<br /><br />

					<green>--help/h</green>:<br />
					&nbsp;&nbsp;Shows this message.<br /><br />

					<blue>--number Double<yellow>[0.0-15.23]</yellow></blue>:
					<br />
					&nbsp;&nbsp;The value that matters the most (not really). Hey,
					this thing is generated
					<br />&nbsp;&nbsp;automatically as well!: A high precision
					floating point number.
					<br />&nbsp;&nbsp;Must be between 0.0 and 15.23. (Inclusive)
					<br /><br />

					Sub-Commands:<br /><br />

					<b>sub1</b>:<br />
					&nbsp;&nbsp;Now this is the description of the subcommand inside
					the main command.

					<br /><br /><br />

					Here's some more extra information about my program. Really
					don't know how to fill this out...
				</Terminal>
			</Feature>
			<Feature title="Rich text formatting">
				Use tools that easily allow you to format text in descriptions
				with colors, and other text formatting when displaying it on the
				terminal.
				<Code
					code={`
@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional = true, description = "The name of the user.")
	public String name;

	@Argument.Define(argType = StringArgumentType.class, description = "The surname of the user.")
	public Optional<String> surname;

	@Argument.Define(names = {"age", "a"}, description = "The age of the user.", prefix = '+')
	public int age = 18;

	@InitDef
	public static void beforeInit(@NotNull CommandBuildHelper cmdBuildHelper) {
		// configure the argument "age" to have an argument type of
		// number range and set the range to 1-100
		cmdBuildHelper.<NumberRangeArgumentType<Integer>, Integer>getArgument("age")
			.withArgType(new NumberRangeArgumentType<>(1, 100))
			.onOk(v -> System.out.println("The age is valid!"));
	}
}
				`}
				/>
			</Feature>
			<Feature title="Design your own Argument Types">
				Effortlessly create your own sub-parsers that later will be used
				to parse the values an argument receives. Lanat comes with many
				Argument Types already made for you.
				<Code
					code={`
@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional = true, description = "The name of the user.")
	public String name;

	@Argument.Define(argType = StringArgumentType.class, description = "The surname of the user.")
	public Optional<String> surname;

	@Argument.Define(names = {"age", "a"}, description = "The age of the user.", prefix = '+')
	public int age = 18;

	@InitDef
	public static void beforeInit(@NotNull CommandBuildHelper cmdBuildHelper) {
		// configure the argument "age" to have an argument type of
		// number range and set the range to 1-100
		cmdBuildHelper.<NumberRangeArgumentType<Integer>, Integer>getArgument("age")
			.withArgType(new NumberRangeArgumentType<>(1, 100))
			.onOk(v -> System.out.println("The age is valid!"));
	}
}
				`}
				/>
			</Feature>
			<Feature title="Define your Commands on your preferred way">
				Commands can be defined by creating a class with properties and
				using annotations to define the arguments your command will
				contain, but if you are not a fan of reflection, or you just
				don't want to do it that way, you can always define your
				commands in the more manual way, which is still dead easy! In
				fact, the reflection way of doing it, uses the imperative way
				internally.
				<Code
					code={`
@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional = true, description = "The name of the user.")
	public String name;

	@Argument.Define(argType = StringArgumentType.class, description = "The surname of the user.")
	public Optional<String> surname;

	@Argument.Define(names = {"age", "a"}, description = "The age of the user.", prefix = '+')
	public int age = 18;

	@InitDef
	public static void beforeInit(@NotNull CommandBuildHelper cmdBuildHelper) {
		// configure the argument "age" to have an argument type of
		// number range and set the range to 1-100
		cmdBuildHelper.<NumberRangeArgumentType<Integer>, Integer>getArgument("age")
			.withArgType(new NumberRangeArgumentType<>(1, 100))
			.onOk(v -> System.out.println("The age is valid!"));
	}
}
				`}
				/>
			</Feature>
		</div>
	</div>
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	.features {
		margin: 5rem;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 1rem;

		.first-row {
			display: grid;
			gap: 2rem;
			grid-template-columns: minmax(40rem, 1fr) 1fr;

			@include utils.if-tablet() {
				grid-template-columns: minmax(10rem, 1fr);
			}
		}

		.grid {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(auto-fit, minmax(47rem, 1fr));

			@include utils.if-tablet() {
				grid-template-columns: minmax(10rem, 1fr);
			}
		}
	}
</style>
