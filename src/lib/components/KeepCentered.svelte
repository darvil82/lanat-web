<div class="keep-centered">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.keep-centered {
		display: grid;
		grid-template-columns: 1fr minmax(1500px, 1fr) 1fr;

		.content {
			grid-column: 2;
		}
	}
</style>
