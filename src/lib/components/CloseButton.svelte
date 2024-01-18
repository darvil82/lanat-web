<script lang="ts">
	import Fa from "svelte-fa"
	import { faXmark } from "@fortawesome/free-solid-svg-icons"
</script>

<button on:click>
	<Fa icon={faXmark} />
	Close
</button>

<style lang="scss">
	@use "$lib/utils.scss";

	button {
		background-color: var(--color-text-over-light);
		padding: 1rem 2rem;
		font-weight: bold;
		box-shadow: 0 0.8rem 1rem -0.8rem rgba(0 0 0 / 0.3);
		transition: 0.15s;

		&:hover {
			background: linear-gradient(
				to top,
				var(--color-text-over-dark) 60%,
				utils.with-opacity(var(--color-text-over-dark), 0.2)
			);
			color: var(--color-text-over-light);
		}

		@include utils.if-mobile {
			padding: 0.5rem 1rem;
		}
	}
</style>
