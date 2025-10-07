<script lang="ts">
	export let bigger = false
</script>

<div class="keep-centered" class:bigger>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.keep-centered {
		--margin: 5rem;
		display: grid;
		grid-template-columns:
			minmax(var(--margin), 1fr)
			minmax(200px, 1100px) minmax(var(--margin), 1fr);

		@include if-mobile {
			--margin: 2rem;
		}

		.content {
			grid-column: 2;
		}

		&.bigger {
			--margin: 0rem;
			grid-template-columns:
				minmax(var(--margin), 1fr)
				minmax(200px, 1900px) minmax(var(--margin), 1fr);
		}
	}
</style>
