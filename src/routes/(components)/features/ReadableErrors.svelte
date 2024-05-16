<script>
	import Terminal from "$lib/components/Terminal.svelte"
	import HighlightInfo from "$lib/components/highlightInfo/HighlightInfo.svelte"

	import Feature from "../Feature.svelte"
</script>

<Feature
	title="Readable errors"
	glowTop="var(--color-accent-1)"
	glowRight="var(--color-accent-2)"
>
	Make the users of your software be glad they made that error. Completely
	customizable error messages with different error levels.
	<Terminal>
		<!-- $ my-program josh ! --number 2 sub1 --required 1 --number 121 -->
		$ my-program josh ! --number 2 sub1 --required 1 --number 121<br />
		<br />

		<!--  ┌─ERROR -->
		<warning>&nbsp;┌─WARNING</warning><br />

		<!-- my-program josh --number 2 sub1 --required 1 --number 121 -->
		<aqua>my-program</aqua> <yellow>josh</yellow>
		<yellow highlight>!</yellow> <green>--number</green>
		<yellow>2</yellow> <aqua>sub1</aqua>
		<green>--required</green> <yellow>1</yellow>
		<green>--number</green> <yellow>121</yellow><br />

		<!--
						│ The user cannot be '!'.
						└────────────────── ───── ── ─
						-->
		<warning>
			&nbsp;│ The user '!' was not found.<br />
			&nbsp;└────────────────── ───── ── ─
		</warning>

		<br />
		<br />

		<HighlightInfo>
			<!-- my-program josh --number 2 sub1 --required 1 --number 121 -->
			<error>&nbsp;┌─ERROR</error><br />
			<aqua>my-program</aqua> <yellow>josh</yellow>
			<yellow>!</yellow> <green>--number</green>
			<yellow>2</yellow> <aqua>sub1</aqua>
			<green>--required</green> <yellow>1</yellow>
			<green>--number</green>
			<error highlight>121</error><br />

			<!--
					│ Value must be between 0.0 and 15.23.
					└────────────────── ───── ── ─
					-->
			<error>
				&nbsp;│ Value must be between 0.0 and 15.23.<br />
				&nbsp;└────────────────── ───── ── ─
			</error>

			<svelte:fragment slot="info">
				<p>
					Errors can have different levels, those being
					<error>ERROR</error>, <warning>WARNING</warning>
					, <info>INFO</info> and <debug>DEBUG</debug>. As you might
					have noticed, the error messages are colored according to
					their level.
				</p>
				<p>
					By default, errors with a level of
					<error>ERROR</error>
					will cause the program to exit with a non-zero exit code.
				</p>
			</svelte:fragment>
		</HighlightInfo>
	</Terminal>
</Feature>
