<script lang="ts">
	import Link from "./Link.svelte"

	export let primary = false
	export let href: string
</script>

<Link {href} displayBlock>
	<div class="button" class:primary>
		<slot />
	</div>
</Link>

<style lang="scss">
	@import "./button.scss";
</style>
