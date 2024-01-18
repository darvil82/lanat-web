<script>
	import Image from "$lib/components/Image.svelte"
	import logo_white from "$lib/images/logo/logo_white.png"
	import KeepCentered from "$lib/components/KeepCentered.svelte"
</script>

<footer>
	<KeepCentered>
		<div class="content">
			<Image src={logo_white} alt="Logo" maxWidth={"15rem"} />
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
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.credits .lowlight {
			opacity: 0.5;
		}
	}
</style>
