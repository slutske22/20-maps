/** @jsx tsx */

import Widget from 'esri/widgets/Widget';
import { subclass, property } from 'esri/core/accessorSupport/decorators';
import { renderable, tsx } from 'esri/widgets/support/widget';

import './ScrollZoom.scss';

const CSS = {
	base: 'esri-widget esri-scroll-zoom-toggle',
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
			this.view.navigation.mouseWheelZoomEnabled = true;
			this.view.navigation.browserTouchPanEnabled = true;
		} else {
			this.view.navigation.mouseWheelZoomEnabled = false;
			this.view.navigation.browserTouchPanEnabled = false;
		}
		console.log(this);
	};

	render() {
		return (
			<div class={CSS.base}>
				<div>Enable Scroll Zoom</div>
				<input
					type="checkbox"
					onchange={this._toggleZoomOnScroll}
					class={CSS.checkbox}
				/>
			</div>
		);
	}
}

export default ScrollZoom;
