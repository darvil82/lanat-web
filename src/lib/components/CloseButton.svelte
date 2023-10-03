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
		background-color: var(--color-primary);
		padding: 1rem 2rem;
	}
</style>
