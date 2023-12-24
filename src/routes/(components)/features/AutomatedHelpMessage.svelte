<script>
	import Tab from "$lib/components/Tab.svelte"
	import Terminal from "$lib/components/Terminal.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature title="Automated help messages">
	Detailed help messages automatically generated for you, based on the
	structure of your commands.

	<Terminal>
		<!-- $ my-program --help -->
		$ my-program --help<br />
		<br />

		<b>my-program</b>:<br /><br />

		<Tab />This is the description of my program. What do you think about
		it? Oh by the way,
		<br /><Tab />don't forget to use the
		<HighlightInfo>
			<aqua><u><b>Example1Type(user/u)</b></u></aqua>

			<svelte:fragment slot="info">
				When defining descriptions, you can reference other elements
				such as arguments, as seen here.
			</svelte:fragment>
		</HighlightInfo> argument!
		<br /><br />

		<Tab /><aqua><u><b>Example1Type(user/u)</b></u></aqua>
		<yellow>--test Integer</yellow> <green>--help/h</green>
		<purple>--counter/c</purple>
		<blue>--number Double<yellow>[0.0-15.23]</yellow></blue>
		&lbrace;<b>sub1</b>&rbrace;
		<br /><br />

		Description:<br /><br />

		<Tab /><aqua><u><b>Example1Type(user/u)</b></u></aqua>:<br />
		<Tab number={2} />Specify the user/s to use.<br /><br />

		<Tab /><green>--help/h</green>:<br />
		<Tab number={2} />Shows this message.<br /><br />

		<Tab /><blue>--number Double<yellow>[0.0-15.23]</yellow></blue>:
		<br />
		<Tab number={2} />The value that matters the most (not really). Hey,
		this thing is generated
		<br /><Tab number={2} />automatically as well!: A high precision
		floating point number.
		<br /><Tab number={2} />Must be between 0.0 and 15.23. (Inclusive)
		<br /><br />

		Sub-Commands:<br /><br />

		<Tab /><b>sub1</b>:<br />
		<Tab number={2} />Now this is the description of the subcommand inside
		the main command.

		<br /><br /><br />

		Here's some more extra information about my program. Really don't know
		how to fill this out...
	</Terminal>
</Feature>
