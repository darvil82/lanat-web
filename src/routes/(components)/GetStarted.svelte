<script lang="ts">
	import Triangle from "./getStarted/Triangle.svelte"
	import type { CSSUnit } from "$lib/typedefs"
	import KeepCentered from "$lib/components/KeepCentered.svelte"
</script>

<div class="container">
	<Triangle color="var(--color-accent-2)"></Triangle>
	<div class="get-started-container">
		<KeepCentered>
			<div class="get-started-content">
				<h1>Get started</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eius, incidunt harum. Perferendis, quibusdam autem corporis
					nobis minima mollitia quam fuga adipisci neque itaque
					dolorum alias minus exercitationem et, voluptatem dolore.
				</p>
			</div>
		</KeepCentered>
	</div>
</div>

<style lang="scss">
	.container {
		margin-top: calc(max(65vw, 65vh) * -0.5);
	}

	.get-started-container {
		background-color: var(--color-accent-3);
		color: var(--color-text-over-light);
		padding-top: 10rem;
		height: 100rem;

		.get-started-content {
			display: flex;
			flex-direction: column;
			gap: 7rem;

			h1 {
				text-align: center;
			}
		}
	}
</style>
