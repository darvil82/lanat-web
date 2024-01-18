export async function getLatestVersion(): Promise<string> {
	return await fetch("https://api.github.com/repos/darvil82/lanat/tags")
		.then(r => r.json())
		.then(r => r[0].name)
}
