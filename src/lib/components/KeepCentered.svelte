<div class="keep-centered">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.keep-centered {
		display: grid;
		grid-template-columns:
			minmax(5rem, 1fr)
			minmax(200px, 1100px) minmax(5rem, 1fr);

		.content {
			grid-column: 2;
		}
	}
</style>
