export function setScrollingEnabled(state: boolean) {
	document.body.classList.toggle("no-scroll", !state)
}

export function isMobile() {
	return window.innerWidth < 768
}

export function isTablet() {
	return window.innerWidth < 1024
}
