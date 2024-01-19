<script lang="ts">
	import Link from "./Link.svelte"

	export let href: string
</script>

<Link {href}>
	<span><slot /></span>
</Link>

<style lang="scss">
	span {
		text-decoration: underline;

		&:hover {
			color: var(--color-accent-1);
		}
	}
</style>
