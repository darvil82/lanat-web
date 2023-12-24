<script>
	import Code from "$lib/components/Code.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature title="Design your own Argument Types">
	Effortlessly create your own sub-parsers that later will be used to parse
	the values an argument receives. Lanat comes with many Argument Types
	already made for you.

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
	private final @NotNull T @NotNull [] values;

	/**
	 * Creates a new enum argument type.
	 * @param defaultValue The default value of the enum type. This is also used to infer the type of the enum.
	 */
	public EnumArgumentType(@NotNull T defaultValue) {
		super(defaultValue);
		this.values = defaultValue.getDeclaringClass().getEnumConstants();
	}

	@Override
	public T parseValues(@NotNull String @NotNull [] args) {
		for (var enumValue : this.values) {
			if (enumValue.name().equalsIgnoreCase(args[0])) {
				return enumValue;
			}
		}
		this.addError("Invalid enum value: '" + args[0] + "'.");
		return null;
	}

	@Override
	public @NotNull TextFormatter getRepresentation() {
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
			<div class="result-info">
				<div class="info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente debitis minus repudiandae non reiciendis.
					Accusantium ex facilis voluptatibus perspiciatis
					praesentium! Repellendus unde ipsa debitis voluptas sint,
					dolor illo excepturi eius!
				</div>
				<div class="code-wrapper">
					<Code
						code={`
enum Options {
	ACTIVATE,
	DEACTIVATE,
	TOGGLE
}
`}
					/>
				</div>
			</div>

			<div class="result-info">
				<div class="info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente debitis minus repudiandae non reiciendis.
					Accusantium ex facilis voluptatibus perspiciatis
					praesentium! Repellendus unde ipsa debitis voluptas sint,
					dolor illo excepturi eius!
				</div>
				<div class="code-wrapper">
					<Code
						code={`
Argument.create(
	new EnumArgumentType<>(Options.TOGGLE)
	, "option"
);`}
					/>
				</div>
			</div>

			<div class="result-info">
				<div class="info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente debitis minus repudiandae non reiciendis.
					Accusantium ex facilis voluptatibus perspiciatis
					praesentium! Repellendus unde ipsa debitis voluptas sint,
					dolor illo excepturi eius!
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
		}

		:global(> :last-child) {
			grid-column: 2 / span 3;
			grid-row: 2 / span 2;
			border: 0.25rem solid var(--color-accent-2);
			box-shadow: -2rem -2rem 5rem rgba(0, 0, 0, 0.575);
		}

		@include utils.if-tablet {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;

			:global(> :first-child) {
				grid-column: 1;
				grid-row: 1 / 4;
				margin-inline: 1rem;
			}

			:global(> :last-child) {
				grid-column: 1;
				grid-row: 2 / 4;
				box-shadow: 0 -2rem 5rem rgba(0, 0, 0, 0.575);
			}
		}
	}

	.result {
		position: relative;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		flex-direction: column;
		gap: 1rem;
		border-radius: var(--border-radius);
		padding: 2rem;
		background-color: var(--color-secondary);
		max-width: 85rem;

		.result-info {
			display: grid;
			grid-template-columns: 1fr minmax(20rem, 1fr);
			gap: 2rem;
			background-color: rgba(0, 0, 0, 0.295);
			border-radius: var(--border-radius);

			.info {
				flex-shrink: 1;
				flex-basis: 50%;
				display: grid;
				place-items: center;
				margin-inline: 2rem;
			}

			.code-wrapper {
				flex-grow: 1;
			}

			@include utils.if-tablet {
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 1fr;
				gap: 1rem;
				margin: 0;
				padding: 1rem;
			}
		}
	}
</style>
