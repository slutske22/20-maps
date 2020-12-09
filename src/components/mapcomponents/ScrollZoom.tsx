import React from 'react';
import Widget from 'esri/widgets/Widget';
import { subclass, property } from 'esri/core/accessorSupport/decorators';
import { renderable, tsx } from 'esri/widgets/support/widget';

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

	render() {
		return <div>John Smith</div>;
	}
}

export default ScrollZoom;
