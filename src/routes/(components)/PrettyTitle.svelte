<script lang="ts">
	import KeepCentered from "$lib/components/KeepCentered.svelte"
</script>

<div class="pretty-title">
	<h1 class="title">Features</h1>
	<div class="gradient" />
</div>

<style lang="scss">
	@import "$lib/utils.scss";

	.pretty-title {
		position: relative;
	}

	.title {
		color: var(--color-accent-1);
		margin-left: 7rem;
	}

	.gradient {
		height: 75rem;
		position: absolute;
		inset: 0;
		pointer-events: none;
		top: 8rem;
		z-index: -1;
		background: conic-gradient(
			from -90deg at 75% 1.3rem,
			var(--color-accent-1) 0deg,
			var(--color-accent-2) 161.25deg,
			rgba(94, 186, 169, 0) 298.12deg,
			rgba(81, 162, 147, 0) 360deg
		);

		@include mask-image(
			linear-gradient(
				10deg,
				transparent 30%,
				rgba(255, 255, 255, 0.25) 55%,
				rgba(255, 255, 255, 0.8) 80%,
				white 90%
			)
		);
	}
</style>
