<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
	import Fa from "svelte-fa"

	export let href: string
	export let icon: IconDefinition
</script>

<a {href}>
	<Fa {icon} style="font-size: 3em" />
	<slot />
</a>

<style lang="scss">
	a {
		background-color: var(--color-secondary);
		padding: 4rem;
		display: block;
		color: var(--color-text-over-dark);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
		font-size: 2.5rem;
		font-weight: 900;
	}
</style>
