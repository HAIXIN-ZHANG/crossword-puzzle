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
		'react/jsx-indent': [
			2,
			'tab',
			{
				checkAttributes: true
			}
		],
		'react/jsx-indent-props': [2, 'tab'],
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
    indent: [
			'error',
			'tab',
			{
				ignoredNodes: ['JSXElement *', 'JSXElement'],
				MemberExpression: 1,
				FunctionExpression: { parameters: 'first' },
				CallExpression: { arguments: 'first' },
				ArrayExpression: 'first',
				ImportDeclaration: 'first',
				flatTernaryExpressions: true,
				ignoreComments: true,
				SwitchCase: 1,
				VariableDeclarator: 'first'
			}
		],
  },
};
