module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-will-change'),
		require('autoprefixer')(
			{
				browsers: [
					'last 2 versions',
				],
				cascade: true,
			}
		),
		require('postcss-mq-keyframes'),
		require('postcss-fakeid'),
		require('postcss-single-charset'),
		require('postcss-focus'),
	],
};
