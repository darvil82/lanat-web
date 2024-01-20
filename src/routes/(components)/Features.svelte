<script lang="ts">
	import { onMount } from "svelte"
	import PrettyTitle from "./PrettyTitle.svelte"
	import { isTablet } from "$lib/scripts/utils"
	import ReadableErrors from "./features/ReadableErrors.svelte"
	import AutomatedHelpMessage from "./features/AutomatedHelpMessage.svelte"
	import RichFormatting from "./features/RichFormatting.svelte"
	import CustomArgTypes from "./features/CustomArgTypes.svelte"
	import EndTriangleShape from "./features/EndTriangleShape.svelte"
	import KeepCentered from "$lib/components/KeepCentered.svelte"

	let mainDiv: HTMLDivElement
	let featureGrid: HTMLDivElement
	let mainFeaturesContainer: HTMLDivElement
	let currentLightOpacity = 1

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
	<PrettyTitle lightOpacity={currentLightOpacity} />
	<div class="features" bind:this={mainFeaturesContainer}>
		<div class="first-row">
			<ReadableErrors />
		</div>
		<div class="grid" bind:this={featureGrid}>
			<AutomatedHelpMessage />
			<RichFormatting />
		</div>
		<CustomArgTypes />
	</div>
	<EndTriangleShape />
</div>
<h2 class="title-more">And much more!</h2>

<style lang="scss">
	@use "$lib/utils.scss";

	.features {
		margin: 5rem;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

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

		@include utils.if-tablet {
			margin: 2rem;
			margin-top: 5rem;
		}
	}

	.title-more {
		text-align: center;
		color: var(--color-accent-2);
		filter: drop-shadow(0 2rem 3rem utils.with-opacity(currentColor, 0.5))
			brightness(var(--brightness, 1));
		z-index: 1;

		@media (min-width: 450px) and (max-width: 1970px) {
			mix-blend-mode: difference;
			--brightness: 1.15;
		}
	}
</style>
