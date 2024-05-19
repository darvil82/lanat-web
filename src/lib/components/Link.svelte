<script lang="ts">
	import type { Optional } from "$lib/typedefs"

	export let href: string
	export let ariaLabel: Optional<string> = undefined
	export let external: boolean = href.startsWith("http")
	export let displayBlock: boolean = false
</script>

<a
	{href}
	aria-label={ariaLabel}
	target={external ? "_blank" : "_self"}
	style:display={displayBlock ? "block" : "inline"}
>
	<slot />
</a>
