export const WIDTH_TABLET = 1024
export const WIDTH_MOBILE = 768

export function setScrollingEnabled(state: boolean) {
	document.body.classList.toggle("no-scroll", !state)
}

export function isMobile() {
	return window.innerWidth < WIDTH_MOBILE
}

export function isTablet() {
	return window.innerWidth < WIDTH_TABLET
}
