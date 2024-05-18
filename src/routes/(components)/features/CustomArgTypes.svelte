<script>
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature title="Design your own Argument Types">
	<div>
		<p>
			Effortlessly create your own sub-parsers that later will be used to
			parse the values an argument receives. Lanat comes with many
			Argument Types already made for you.
		</p>
		<p>
			Heres's an example of how the Argument Types are used. In this case,
			by using the
			<code>EnumArgumentType</code> we can create an argument that takes an
			enum value.
		</p>
	</div>

	<h3>Creating the type</h3>

	<div class="codes">
		<Code
			disallowScroll
			code={`
/**
 * An argument type that takes an enum value.
 * By supplying a default value in the constructor, the enum type is inferred.
 * <p>
 * The user can specify the enum value by its name, case insensitive.
 * </p>
 * @param <T> The enum type.
 */
public class EnumArgumentType<T extends Enum<T>> extends ArgumentType<T> {
	private final T[] values;

	/**
	 * Creates a new enum argument type.
	 * @param defaultValue The default value of the enum type. This is also used to infer the type of the enum.
	 */
	public EnumArgumentType(T defaultValue) {
		super(defaultValue);
		this.values = defaultValue.getDeclaringClass().getEnumConstants();
	}

	@Override
	public T parseValues(String[] args) {
		for (var enumValue : this.values) {
			if (enumValue.name().equalsIgnoreCase(args[0])) {
				return enumValue;
			}
		}
		this.addError("Invalid enum value: '" + args[0] + "'.");
		return null;
	}

	@Override
	public TextFormatter getRepresentation() {
		final var fmt = new TextFormatter("(");
		for (var i = 0; i < this.values.length; i++) {
			final var value = this.values[i];

			// if value is the default value, make it bold and yellow
			if (value == this.getInitialValue())
				fmt.concat(new TextFormatter(value.name())
					.withForegroundColor(Color.YELLOW)
					.addFormat(FormatOption.BOLD)
				);
			else
				fmt.concat(value.name());


			if (i < this.values.length - 1)
				fmt.concat(" | ");
		}
		return fmt.concat(")");
	}
`}
		/>
		<div class="result">
			<h3>Using the type</h3>
			<div class="result-info">
				<div class="info">
					Create an enum with the options you want to allow the user
					to choose from.
				</div>
				<div class="code-wrapper">
					<Code
						code={`
enum Options {
	ACTIVATE,
	DEACTIVATE,
	TOGGLE // this is the default value
}
`}
					/>
				</div>
			</div>

			<div class="result-info">
				<div class="info">
					<p>
						Then, create an <code>EnumArgumentType</code>
						with the default value we want to use specified in the constructor.
					</p>
					<p>
						Once created, we can use it in an <code>Argument</code>.
					</p>
				</div>
				<div class="code-wrapper">
					<Code
						code={`
Argument.create(
	new EnumArgumentType<>(Options.TOGGLE),
	"option"
);
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
	@use "$lib/utils.scss";

	.codes {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);

		:global(> :first-child) {
			grid-column: 1 / span 3;
			grid-row: 1 / span 3;
			max-height: 50rem;

			@include utils.if-tablet {
				grid-column: 1;
				grid-row: 1 / 4;
				margin-inline: 1rem;
			}

			@include utils.if-mobile {
				height: 30rem;
			}
		}

		@include utils.if-tablet {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}

		@include utils.if-mobile {
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

			@include utils.if-tablet {
				grid-template-columns: minmax(10rem, 1fr);
				grid-template-rows: 1fr 1fr;
				gap: 1rem;
				margin: 0;
				padding: 1rem;
			}

			@include utils.if-mobile {
				.info {
					margin: 0;
				}
			}
		}

		@include utils.if-tablet {
			grid-column: 1;
			grid-row: 2 / 4;
			box-shadow: 0 -2rem 5rem rgba(0, 0, 0, 0.575);
		}

		@include utils.if-mobile {
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
