/** @jsx tsx */

import Widget from 'esri/widgets/Widget';
import { subclass, property } from 'esri/core/accessorSupport/decorators';
import { renderable, tsx } from 'esri/widgets/support/widget';

import './ScrollZoom.scss';

const CSS = {
	wrapper: 'esri-widget esri-scroll-zoom-toggle',
	innerWrapper: 'esri-scroll-zoom-toggle--inner-wrapper',
	checkbox: 'esri-scroll-zoom-toggle--input-checkbox',
};

@subclass('esri.widgets.ScrollZoom')
class ScrollZoom extends Widget {
	constructor(params?: any) {
		super(params);
	}

	//----------------------------------
	//  emphasized
	//----------------------------------
	@property()
	@renderable()
	enabled: boolean = false;

	private _toggleZoomOnScroll = (): void => {
		this.enabled = !this.enabled;
		if (this.enabled) {
			// @ts-ignore
			this.view.navigation.mouseWheelZoomEnabled = true;
			// @ts-ignore
			this.view.navigation.browserTouchPanEnabled = true;
		} else {
			// @ts-ignore
			this.view.navigation.mouseWheelZoomEnabled = false;
			// @ts-ignore
			this.view.navigation.browserTouchPanEnabled = false;
		}
	};

	render() {
		return (
			<div class={CSS.wrapper}>
				<div class={CSS.innerWrapper} onclick={this._toggleZoomOnScroll}>
					<div>Enable Scroll Zoom</div>
					<input type="checkbox" class={CSS.checkbox} checked={this.enabled} />
				</div>
			</div>
		);
	}
}

export default ScrollZoom;
