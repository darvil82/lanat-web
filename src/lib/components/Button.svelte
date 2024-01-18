<script lang="ts">
	export let primary = false
</script>

<button class="button" class:primary on:click>
	<slot />
</button>

<style lang="scss">
	@import "./button.scss";
</style>
