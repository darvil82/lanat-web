<script>
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import TextLink from "$lib/components/TextLink.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature title="Design your own Argument Types">
	<div>
		<p>
			Effortlessly create your own sub-parsers that later will be used to
			parse the values an argument receives. Lanat
			<TextLink
				emphasis
				href="https://darvil82.github.io/lanat-docs/argument-types.html#default-argument-types"
			>
				comes with many argument types
			</TextLink> already made for you.
		</p>
		<p>
			Here's an example of how argument types are used. In this case, by
			using the
			<TextLink
				href="https://darvil82.github.io/lanat-docs/preview/argument-types.html#EnumArgumentType"
				><code>EnumArgumentType</code></TextLink
			>
			we can create an argument that takes an enum value.
		</p>
	</div>

	<h3>Creating the type</h3>

	<div class="codes">
		<Code
			disallowScroll
			code={`
/**
 * An argument type that takes a valid enum value.
 * <p>
 * The user can specify any of the enum values by their names.
 * The names are case-insensitive.
 * </p>
 * @param <T> The enum type.
 */
public class EnumArgumentType<T extends Enum<T>> extends SingleValueListArgumentType<T> {
	/**
	 * Creates a new enum argument type.
	 * @param clazz The class of the enum type to use.
	 */
	public EnumArgumentType(@NotNull Class<T> clazz) {
		super(clazz.getEnumConstants());
		this.setDefault(clazz);
	}

	/**
	 * Sets the default value of the enum type by using the {@link Default} annotation.
	 * @param clazz The class of the enum type to use.
	 */
	private void setDefault(@NotNull Class<T> clazz) {
		var defaultFields = Arrays.stream(clazz.getDeclaredFields())
			.filter(f -> f.isAnnotationPresent(Default.class))
			.toList();

		if (defaultFields.isEmpty())
			return;

		if (defaultFields.size() > 1)
			throw new IllegalArgumentException("Only one default value can be set.");

		this.setInitialValue(
			Arrays.stream(this.listValues)
				.filter(v -> v.name().equals(defaultFields.get(0).getName()))
				.findFirst()
				.orElseThrow()
		);
	}

	@Override
	protected @NotNull String valueToString(@NotNull T value) {
		try {
			return Optional.ofNullable(value.getClass().getField(value.name()).getAnnotation(WithName.class))
				.map(WithName::value)
`}
		/>
		<div class="result">
			<h3>Using the type</h3>
			<div class="result-info">
				<div class="info">
					Create an enum with the options you want to allow the user
					to choose from. You can also specify the default value by
					annotating the enum value properly.
				</div>
				<div class="code-wrapper">
					<Code
						code={`
enum Option {
	ACTIVATE,
	DEACTIVATE,
	@EnumArgumentType.Default
	TOGGLE
}
`}
					/>
				</div>
			</div>

			<div class="result-info">
				<div class="info">
					Then, simply define the argument in your command and use the
					enum as the type of the argument.
				</div>
				<div class="code-wrapper">
					<Code
						code={`
public class MyCommand extends CommandTemplate {
	@Argument.Define
	public Option option;
}
`}
					/>
				</div>
			</div>

			<div class="result-info">
				<div class="info">
					<p>
						Finally, let Lanat take care of the rest! If the user
						writes the name of the enum value, it will be parsed
						correctly and you'll get the actual enum value as a
						result once parsed.
					</p>
					<p>
						Here's how the argument would look like in the help
						message generated:
					</p>
				</div>
				<div class="code-wrapper">
					<Terminal>
						<green>
							--option (ACTIVATE | DEACTIVATE | <HighlightInfo>
								<yellow><b>TOGGLE</b></yellow>
								<svelte:fragment slot="info">
									You can see that the default value is
									highlighted.
								</svelte:fragment>
							</HighlightInfo> )
						</green>
					</Terminal>
				</div>
			</div>
		</div>
	</div>
</Feature>

<style lang="scss">
	.codes {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);

		:global(> :first-child) {
			grid-column: 1 / span 3;
			grid-row: 1 / span 3;
			max-height: 50rem;

			@include if-tablet {
				grid-column: 1;
				grid-row: 1 / 4;
				margin-inline: 1rem;
			}

			@include if-mobile {
				height: 30rem;
			}
		}

		@include if-tablet {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}

		@include if-mobile {
			display: flex;
			flex-direction: column;
		}
	}

	.result {
		grid-column: 2 / span 3;
		grid-row: 2 / span 2;
		border: 0.25rem solid var(--color-accent-2);
		box-shadow: -2rem -2rem 5rem rgba(0, 0, 0, 0.575);

		position: relative;
		display: grid;
		grid-template-rows: auto 1fr 1fr 1fr;
		flex-direction: column;
		gap: 1rem;
		border-radius: var(--border-radius);
		padding: 2rem;
		background-color: var(--color-secondary);
		max-width: 85rem;

		.result-info {
			display: grid;
			grid-template-columns: 1fr minmax(10rem, 1fr);
			gap: 2rem;
			background-color: rgba(0, 0, 0, 0.295);
			border-radius: var(--border-radius);

			.info {
				flex-shrink: 1;
				flex-basis: 50%;
				margin: 1rem 2rem;
				align-self: center;
			}

			.code-wrapper {
				flex-grow: 1;
			}

			@include if-tablet {
				grid-template-columns: minmax(10rem, 1fr);
				grid-template-rows: 1fr 1fr;
				gap: 1rem;
				margin: 0;
				padding: 1rem;
			}

			@include if-mobile {
				.info {
					margin: 0;
				}
			}
		}

		@include if-tablet {
			grid-column: 1;
			grid-row: 2 / 4;
			box-shadow: 0 -2rem 5rem rgba(0, 0, 0, 0.575);
		}

		@include if-mobile {
			display: flex;
			flex-direction: column;
			margin-top: -5rem;
			padding: 1rem;

			.result-info {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
