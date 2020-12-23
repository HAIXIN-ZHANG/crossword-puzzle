module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
		es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
		'react/jsx-indent': [
			2,
			'tab',
			{
				checkAttributes: true
			}
		],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'never' }],
		'react/display-name': 0
	},
	settings: {
		polyfills: ['fetch', 'promises', 'url', 'object-values'],//if compat upgrades to v3, please change to Object.values
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			version: 'detect',
			flowVersion: '0.53'
		},
		propWrapperFunctions: [
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' }
		],
		linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
	}
};
