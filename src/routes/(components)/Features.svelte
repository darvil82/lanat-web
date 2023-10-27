<script lang="ts">
	import { onMount } from "svelte"
	import Feature from "./Feature.svelte"
	import PrettyTitle from "./PrettyTitle.svelte"

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
					(percLeft >= 0.4 || isSingleCol) && posY == 0
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
			</Feature>
		</div>
		<div class="grid" bind:this={featureGrid}>
			<Feature title="Automated help messages">
				Detailed help messages automatically generated for you, based on
				the structure of your commands.
			</Feature>
			<Feature title="Rich text formatting">
				Use tools that easily allow you to format text in descriptions
				with colors, and other text formatting when displaying it on the
				terminal.
			</Feature>
			<Feature title="Design your own Argument Types">
				Effortlessly create your own sub-parsers that later will be used
				to parse the values an argument receives. Lanat comes with many
				Argument Types already made for you.
			</Feature>
			<Feature title="Define your Commands on your preferred way">
				Commands can be defined by creating a class with properties and
				using annotations to define the arguments your command will
				contain, but if you are not a fan of reflection, or you just
				don’t want to do it that way, you can always define your
				commands in the more manual way, which is still dead easy! In
				fact, the reflection way of doing it, uses the imperative way
				internally.
			</Feature>
		</div>
	</div>
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	.features {
		margin: min(7rem, 10vw);
		margin-top: 9rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.first-row {
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr 1fr;

			@include utils.if-tablet() {
				grid-template-columns: 1fr;
			}
		}

		.grid {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));

			@include utils.if-tablet() {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
