<script lang="ts">
	import KeepCentered from "$lib/components/KeepCentered.svelte"
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
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				beatae laudantium natus corrupti fugit dignissimos numquam
				laborum ratione. Expedita rerum nisi magnam ullam commodi
				veritatis tempore consequuntur architecto beatae quia!
			</Feature>
		</div>
		<div class="grid" bind:this={featureGrid}>
			<Feature title="Readable errors">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				beatae laudantium natus corrupti fugit dignissimos numquam
				laborum ratione. Expedita rerum nisi magnam ullam commodi
				veritatis tempore consequuntur architecto beatae quia!
			</Feature>
			<Feature title="Readable errors">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				beatae laudantium natus corrupti fugit dignissimos numquam
				laborum ratione. Expedita rerum nisi magnam ullam commodi
				veritatis tempore consequuntur architecto beatae quia!
			</Feature>
			<Feature title="Readable errors">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				beatae laudantium natus corrupti fugit dignissimos numquam
				laborum ratione. Expedita rerum nisi magnam ullam commodi
				veritatis tempore consequuntur architecto beatae quia!
			</Feature>
			<Feature title="Readable errors">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
				beatae laudantium natus corrupti fugit dignissimos numquam
				laborum ratione. Expedita rerum nisi magnam ullam commodi
				veritatis tempore consequuntur architecto beatae quia!
			</Feature>
		</div>
	</div>
</div>

<style lang="scss">
	.features {
		margin: 7rem;
		margin-top: 9rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.first-row {
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr 1fr;
		}

		.grid {
			display: grid;
			gap: 2rem;
			// make grid act as flex-wrap
			grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
		}
	}
</style>
