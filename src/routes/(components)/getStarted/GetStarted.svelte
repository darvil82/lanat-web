<script lang="ts">
	import Triangle from "./Triangle.svelte"
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import { onMount } from "svelte"
	import { getLatestVersion } from "$lib/scripts/live"
	import LetsBegin from "./LetsBegin.svelte"

	let version: string = "+"

	onMount(async () => {
		version = await getLatestVersion()
	})
</script>

<div class="main-container">
	<Triangle color="var(--color-accent-2)" />
	<div class="get-started-container">
		<KeepCentered>
			<div class="get-started-content">
				<h1>Get started</h1>
				<div class="steps">
					<div class="step">
						<h3>Add the repository</h3>
						<Terminal fontSize="1vw">
							https://repsy.io/mvn/darvil/java
						</Terminal>
					</div>
					<div class="step highlight">
						<h3>And add the dependency!</h3>
						<Terminal fontSize="1vw">
							com.darvil:lanat:{version}
						</Terminal>
					</div>
				</div>
			</div>
		</KeepCentered>
	</div>
	<div class="lets-begin">
		<div class="arrow" />
		<LetsBegin />
	</div>
</div>

<style lang="scss">
	.main-container {
		margin-top: calc(70vw * -0.6);
	}

	.get-started-container {
		color: var(--color-text-over-light);
		padding-top: 10rem;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			bottom: 5rem;
			background-color: var(--color-accent-3);
			z-index: -1;
		}

		.get-started-content {
			display: flex;
			flex-direction: column;
			gap: 10rem;

			h1 {
				text-align: center;
			}
		}
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		.step {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 2.5rem 3rem;
			background-color: rgba(0 0 0 / 0.1);
			border-radius: calc(var(--border-radius) / 2);

			&.highlight {
				background-color: var(--color-accent-1);
				box-shadow: 0 0 2rem 0 rgba(0 0 0 / 0.3);
			}
		}
	}

	.lets-begin {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.arrow {
			width: 1rem;
			height: 30rem;
			background-color: var(--color-accent-3);
			position: relative;

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 50%;
				translate: -50% 50%;
				width: 3rem;
				aspect-ratio: 1;
				border-radius: 50%;
				background-color: var(--color-accent-3);
				z-index: 1;
			}
		}
	}
</style>
