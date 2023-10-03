<script lang="ts">
	import Fa from "svelte-fa"
	import { faXmark } from "@fortawesome/free-solid-svg-icons"
</script>

<button on:click>
	<Fa icon={faXmark} />
	Close
</button>

<style lang="scss">
	button {
		background-color: var(--color-text-over-light);
		padding: 1rem 2rem;
		font-weight: bold;
		transition: 0.15s;

		&:hover {
			background-color: var(--color-text-over-dark);
			color: var(--color-text-over-light);
		}
	}
</style>
