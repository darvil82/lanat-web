<script>
	import Image from "$lib/components/Image.svelte"
	import logo from "$lib/images/logo.png"
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import { accentTheme } from "$lib/scripts/utils"
	import TextLink from "$lib/components/TextLink.svelte"
</script>

<footer>
	<KeepCentered>
		<div class="wrapper">
			<div class="content">
				<button on:click={accentTheme.next}>
					<Image src={logo} alt="Logo" maxWidth={"15rem"} />
				</button>
				<div class="credits">
					<span class="lowlight">Created by</span>
					David Losantos
				</div>
			</div>
			<div class="extra">
				<p>
					Source code of this site can be found
					<TextLink href="https://github.com/darvil82/lanat-web">
						here
					</TextLink>
				</p>
			</div>
		</div>
	</KeepCentered>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color-secondary);
		padding-block: 4rem;
		margin-top: 20rem;

		.wrapper {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 13rem;
		}

		.content {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			column-gap: 2rem;
		}

		.extra {
			color: var(--color-tertiary);
			margin-top: 1rem;
			font-size: 1rem;
		}

		.credits .lowlight {
			color: var(--color-tertiary);
		}
	}
</style>
