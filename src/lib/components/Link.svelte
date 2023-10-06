<script lang="ts">
	export let href: string
	export let external: boolean = href.startsWith("http")
	export let displayBlock: boolean = false
</script>

<a
	{href}
	target={external ? "_blank" : "_self"}
	style:display={displayBlock ? "block" : "inline"}
>
	<slot />
</a>

<style lang="scss">
</style>
