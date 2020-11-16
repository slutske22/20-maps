const ArcGISPlugin = require('@arcgis/webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-scss',
	],
	webpackFinal: (config) => {
		config.plugins.push(new ArcGISPlugin());
		config.node = {
			...config.node,
			process: false,
			fs: 'empty',
		};

		return config;
	},
};
