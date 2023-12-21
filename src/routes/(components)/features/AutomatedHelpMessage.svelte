<script>
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

		This is the description of my program. What do you think about it? Oh by
		the way, don't forget to use the
		<HighlightInfo>
			<aqua><u><b>Example1Type(user/u)</b></u></aqua>

			<svelte:fragment slot="info">
				When defining descriptions, you can reference other elements
				such as arguments, as seen here.
			</svelte:fragment>
		</HighlightInfo> argument!
		<br /><br />

		<aqua><u><b>Example1Type(user/u)</b></u></aqua>
		<yellow>--test Integer</yellow> <green>--help/h</green>
		<purple>--counter/c</purple>
		<blue>--number Double<yellow>[0.0-15.23]</yellow></blue>
		&lbrace;<b>sub1</b>&rbrace;
		<br /><br />

		Description:<br /><br />

		<aqua><u><b>Example1Type(user/u)</b></u></aqua>:<br />
		&nbsp;&nbsp;Specify the user/s to use.<br /><br />

		<green>--help/h</green>:<br />
		&nbsp;&nbsp;Shows this message.<br /><br />

		<blue>--number Double<yellow>[0.0-15.23]</yellow></blue>:
		<br />
		&nbsp;&nbsp;The value that matters the most (not really). Hey, this thing
		is generated
		<br />&nbsp;&nbsp;automatically as well!: A high precision floating
		point number.
		<br />&nbsp;&nbsp;Must be between 0.0 and 15.23. (Inclusive)
		<br /><br />

		Sub-Commands:<br /><br />

		<b>sub1</b>:<br />
		&nbsp;&nbsp;Now this is the description of the subcommand inside the main
		command.

		<br /><br /><br />

		Here's some more extra information about my program. Really don't know
		how to fill this out...
	</Terminal>
</Feature>
