module.exports = {
  ignorePatterns: ['*.config.js'],
  rules: {
    // React
    "react/jsx-fragments": "off",

    // React-Hooks Plugin
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "error",
    'react/jsx-curly-brace-presence': ['off', 'element'],
    'react/jsx-fragments': ['off', 'element'],
  },
};
