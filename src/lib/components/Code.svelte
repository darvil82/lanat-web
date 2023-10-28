<script lang="ts">
	import { Highlight } from "svelte-highlight"
	import { java, type LanguageType } from "svelte-highlight/languages"

	export let code: string
	export let language: LanguageType<string> = java
</script>

<div class="code-wrapper">
	<Highlight {language} code={code.trim()} />
</div>

<style lang="scss">
	.code-wrapper {
		display: flex;
		overflow: auto;
		background-color: var(--color-black);
		height: 100%;
		padding: 0.5rem;
		font-size: 0.85rem;
		border-radius: var(--border-radius);
	}
</style>
