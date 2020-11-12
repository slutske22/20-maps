/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
export function htmlToElement(html: string): HTMLElement | Node {
	var template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

/**
 *
 * @param value | value to clamp
 * @param min | min value
 * @param max | max value
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}
