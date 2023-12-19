<script lang="ts">
	import { onMount } from "svelte"
	import Feature from "./Feature.svelte"
	import PrettyTitle from "./PrettyTitle.svelte"
	import { isTablet } from "$lib/scripts/utils"
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"

	let mainDiv: HTMLDivElement
	let featureGrid: HTMLDivElement

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

	onMount(updateFeaturesGlow)
</script>

<svelte:window on:resize={updateFeaturesGlow} />

<div bind:this={mainDiv}>
	<PrettyTitle />
	<div class="features">
		<div class="first-row">
			<Feature
				title="Readable errors"
				glowTop="var(--color-accent-1)"
				glowRight="var(--color-accent-2)"
			>
				Make the users of your software be glad they made that error.
				Completely customizable error messages with different error
				levels.
				<!--
$ josh ! --number 2 sub1 --required 1 --number 121

[91m[1m ┌─ERROR[22m[97m
[96mmy-program[97m [93mjosh[97m [91m[7m[1m![27m[22m[97m [92m--number[97m [93m2[97m [96msub1[97m [92m--required[97m [93m1[97m [92m--number[97m [93m121[97m
 [91m[1m│ [22m[97mThe user cannot be '!'.
 [91m[1m└────────────────── ───── ── ─[22m[97m

[91m[1m ┌─ERROR[22m[97m
[96m[2mmy-program[22m[97m [93m[2mjosh[22m[97m [93m[2m![22m[97m [92m[2m--number[22m[97m [93m[2m2[22m[97m [96msub1[97m [92m--required[97m [93m1[97m [92m--number[97m [91m[7m[1m121[27m[22m[97m
 [91m[1m│ [22m[97mValue must be between 0.0 and 15.23.
 [91m[1m└─────────────────────────────── ───── ── ─[22m[97m
				-->
			</Feature>
		</div>
		<div class="grid" bind:this={featureGrid}>
			<Feature title="Automated help messages">
				Detailed help messages automatically generated for you, based on
				the structure of your commands.

				<!-- [97m[1mmy-program[22m:

This is the description of my program. What do you think about it? Oh by the
way, don't forget to use the [97m[1m[4mExample1Type(user/u)[22m[24m argument!

[97m[1m[4mExample1Type(user/u)[22m[24m [94m--test Integer[97m [95m--help/h[97m [96m--counter/c[97m [91m-t[97m [92m--number Double[33m[0.0-15.23][92m[97m
[93m++string/s string[93m{3, 5}[93m[97m {[97m[1msub1[22m}

Description:

[97m[1m[4mExample1Type(user/u)[22m[24m:
   Specify the user/s to use.

[95m--help/h[97m:
   Shows this message.

[92m--number Double[33m[0.0-15.23][92m[97m:
   The value that matters the most (not really). Hey, this thing is generated
   automatically as well!: A high precision floating point number. Must be between
   0.0 and 15.23. (Inclusive)

Sub-Commands:

[97m[1msub1[22m:
   Now this is the description of the subcommand inside the main command.


Here's some more extra information about my program. Really don't know how to fill
this out...-->
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
			grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));

			@include utils.if-tablet() {
				grid-template-columns: minmax(10rem, 1fr);
			}
		}
	}
</style>
