<script lang="ts">
	import type { CSSUnit } from "$lib/typedefs"
	import { Highlight } from "svelte-highlight"
	import { java, type LanguageType } from "svelte-highlight/languages"

	export let code: string
	export let language: LanguageType<string> = java
	export let fontSize: CSSUnit = "0.85rem"
</script>

<div class="code-wrapper" style:font-size={fontSize}>
	<Highlight {language} code={code.trim()} />
</div>

<style lang="scss">
	.code-wrapper {
		display: flex;
		overflow: auto;
		background-color: var(--color-black);
		height: 100%;
		border-radius: var(--border-radius);
	}
</style>
