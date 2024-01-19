import { browser } from "$app/environment"
import { writable } from "svelte/store"

export const WIDTH_TABLET = 1024
export const WIDTH_MOBILE = 576
const NUM_ACCENT_THEMES = 3

export const accentTheme = (function () {
	const { subscribe, update } = writable(0)

	return {
		subscribe,
		next: () => update(n => (n % NUM_ACCENT_THEMES) + 1),
		set: (n: number) => update(() => (n % NUM_ACCENT_THEMES) + 1),
	}
})()

export function setScrollingEnabled(state: boolean) {
	document.body.classList.toggle("no-scroll", !state)
}

export function isMobile() {
	return browser && window.innerWidth < WIDTH_MOBILE
}

export function isTablet() {
	return browser && window.innerWidth < WIDTH_TABLET
}
