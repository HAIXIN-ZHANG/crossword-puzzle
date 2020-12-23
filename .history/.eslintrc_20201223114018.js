module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
		'react/jsx-wrap-multilines': 0,
		'react/prop-types': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/no-find-dom-node': 0,
		'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'never' }],
		'react/display-name': 0,
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'linebreak-style': 0,
		'array-callback-return': ['error', { allowImplicit: true }],
	}
};
