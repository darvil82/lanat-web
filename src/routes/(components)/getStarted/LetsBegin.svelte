<script>
	import Button from "$lib/components/Button.svelte"
</script>

<div class="lets-begin">
	<h1>Let's begin</h1>
	<p>
		If you aren't feeling brave, feel free to check out the wiki, which
		includes a full tutorial on how to get started with the basics of Lanat
		(and the not so-basic stuff!)
	</p>
	<Button>Documentation</Button>
</div>

<style lang="scss">
	@use "$lib/utils.scss";

	$bg: radial-gradient(
			50.35% 131.74% at 69.37% -58.95%,
			var(--color-accent-3) 0%,
			rgba(112, 221, 201, 0) 100%
		),
		linear-gradient(
			119.1deg,
			var(--color-accent-1) 6.77%,
			var(--color-accent-2) 95.57%
		);

	.lets-begin {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: start;
		gap: 2rem;
		padding: 3rem;
		color: var(--color-text-over-light);
		width: 60vw;
		min-width: 55rem;
		max-width: 80rem;
		border-radius: var(--border-radius);
		box-shadow: utils.$clay-shadow;
		background: $bg;

		&::before {
			content: "";
			position: absolute;
			inset: 2rem;
			background: $bg;
			z-index: -1;
			filter: blur(3rem);
		}
	}
</style>
