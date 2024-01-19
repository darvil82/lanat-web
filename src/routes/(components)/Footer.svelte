<script>
	import Image from "$lib/components/Image.svelte"
	import logo from "$lib/images/logo.png"
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import { accentTheme } from "$lib/scripts/utils"
</script>

<footer>
	<KeepCentered>
		<div class="content">
			<button on:click={accentTheme.next}>
				<Image src={logo} alt="Logo" maxWidth={"15rem"} />
			</button>
			<div class="credits">
				<span class="lowlight">Created by</span>
				David Losantos
			</div>
		</div>
	</KeepCentered>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color-secondary);
		padding-top: 4rem;
		padding-bottom: 10rem;
		margin-top: 20rem;

		.content {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			column-gap: 2rem;
		}

		.credits .lowlight {
			opacity: 0.5;
		}
	}
</style>
