module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['jest', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		// 'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'prefer-const': [0],
				'no-var': [2],
				'no-constant-condition': [0],
				'@typescript-eslint/camelcase': [0],
			},
		},
	],
	rules: {
		'prefer-const': [0],
		'linebreak-style': ['error', 'unix', 'windows'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'no-console': [1, { allow: ['warn', 'error', 'log', 'enable_trace'] }],
		'no-unused-vars': [0],
		// 'comma-dangle': ['error', 'always-multiline'],
		// 'react/prop-types': [0],
		'@typescript-eslint/no-explicit-any': [0],
		'@typescript-eslint/no-empty-function': [0],
		'@typescript-eslint/no-empty-interface': [0],
		'@typescript-eslint/no-unused-vars': [0],
		'@typescript-eslint/no-use-before-define': [0],
		'@typescript-eslint/explicit-member-accessibility': [0],
		'@typescript-eslint/no-var-requires': [0],
		'@typescript-eslint/no-non-null-assertion': [0],
		'@typescript-eslint/explicit-function-return-type': [0],
	},
	settings: {},
};
