<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
	import Fa from "svelte-fa"
	import Link from "$lib/components/Link.svelte"

	export let href: string
	export let icon: IconDefinition
</script>

<Link {href} displayBlock>
	<div class="link-wrapper">
		<Fa {icon} style="font-size: 3em" />
		<slot />
	</div>
</Link>

<style lang="scss">
	.link-wrapper {
		background-color: var(--color-secondary);
		color: var(--color-text-over-dark);
		border-radius: var(--border-radius);
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1.5rem;
		text-align: center;
		font-size: 2rem;
		font-weight: 900;
		transition: 0.1s;
		aspect-ratio: 1;
		width: 15rem;

		&:hover {
			background-color: var(--color-text-over-dark);
			color: var(--color-secondary);
		}
	}
</style>
