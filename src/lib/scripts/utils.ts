import { browser } from "$app/environment"

export const WIDTH_TABLET = 1024
export const WIDTH_MOBILE = 768

export function setScrollingEnabled(state: boolean) {
	document.body.classList.toggle("no-scroll", !state)
}

export function isMobile() {
	return browser && window.innerWidth < WIDTH_MOBILE
}

export function isTablet() {
	return browser && window.innerWidth < WIDTH_TABLET
}
