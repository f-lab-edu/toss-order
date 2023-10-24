module.exports = {
  extends: ['next', 'airbnb', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
