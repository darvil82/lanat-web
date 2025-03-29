<script lang="ts">
	export let primary = false
	import "./button.scss"
</script>

<button class="button" class:primary on:click>
	<slot />
</button>
