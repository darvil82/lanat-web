import { browser } from "$app/environment"
import { get, writable } from "svelte/store"

export const WIDTH_TABLET = 1024
export const WIDTH_MOBILE = 768

export const accentTheme = (function () {
	const { subscribe, set } = writable(1)

	const store = {
		subscribe,
		next: () => set((get(store) % 3) + 1),
	}

	return store
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
