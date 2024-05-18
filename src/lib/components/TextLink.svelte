<script lang="ts">
	import Link from "./Link.svelte"

	export let href: string
	export let emphasis: boolean = false
</script>

<Link {href}>
	<span class:emphasis><slot /></span>
</Link>

<style lang="scss">
	span {
		text-decoration: underline;

		&.emphasis {
			color: var(--color-accent-2);
		}

		&:hover {
			color: var(--color-accent-1);
		}
	}
</style>
