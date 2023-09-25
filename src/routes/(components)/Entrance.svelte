<script>
	import KeepCentered from "$lib/components/KeepCentered.svelte"
	import Banner from "./Banner.svelte"
	import ShowcaseCode from "./ShowcaseCode.svelte"
</script>

<section class="entrance">
	<div class="showcase-1">
		<ShowcaseCode
			number={1}
			title="Define your Command"
			code={`@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional = true, description = "The name of the user.")
	public String name;

	@Argument.Define(argType = StringArgumentType.class, description = "The surname of the user.")
	public Optional<String> surname;

	@Argument.Define(names = {"age", "a"}, description = "The age of the user.", prefix = '+')
	public int age = 18;
}`}
		/>
	</div>

	<div class="showcase-banner">
		<Banner />
	</div>

	<div class="showcase-2">
		<ShowcaseCode
			number={2}
			title="Define your Command"
			code={`@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional = true, description = "The name of the user.")
	public String name;

	@Argument.Define(argType = StringArgumentType.class, description = "The surname of the user.")
	public Optional<String> surname;

	@Argument.Define(names = {"age", "a"}, description = "The age of the user.", prefix = '+')
	public int age = 18;
}`}
		/>
	</div>

	<div class="showcase-3">
		<ShowcaseCode
			number={3}
			title="Define your Command"
			code={`@Command.Define
class MyProgram {
	@Argument.Define(required = true, positional =
`}
		/>
	</div>
</section>

<style lang="scss">
	.entrance {
		display: grid;
		grid-template-columns: repeat(2, minmax(5rem, 1fr)) minmax(
				15rem,
				1.25fr
			);
		gap: 2rem;
		height: 100vh;
		padding: 2rem;

		.showcase-1 {
			grid-column: 1 / span 2;
			grid-row: 1 / 6;
		}

		.showcase-banner {
			grid-column: 3 / span 1;
			grid-row: 1 / 7;
		}

		.showcase-2 {
			grid-column: 1 / span 2;
			grid-row: 6 / 12;
		}

		.showcase-3 {
			grid-column: 3 / span 1;
			grid-row: 7 / 12;
		}
	}
</style>
