<script>
	import Code from "$lib/components/Code.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature title="Design your own Argument Types" gridSpan={2}>
	Effortlessly create your own sub-parsers that later will be used to parse
	the values an argument receives. Lanat comes with many Argument Types
	already made for you.

	<div class="codes">
		<Code
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
		<Code
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
`}
		/>
	</div>
</Feature>

<style lang="scss">
	.codes {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 1rem;
		max-height: 50rem;

		:global(> :first-child) {
			grid-column: 1 / span 3;
			grid-row: 1 / span 3;
		}

		:global(> :last-child) {
			grid-column: 2 / span 3;
			grid-row: 2 / span 2;
			border: 0.25rem solid var(--color-accent-2);
			box-shadow: -2rem -2rem 5rem rgba(0, 0, 0, 0.575);
		}
	}
</style>