export default [
  {
    files: ['**/*.js'], // only check .js files in server directory
    rules: {
      semi: 'error', // force semicolons
      'no-unused-vars': 'warn', // warn if variable not used
      // quotes: ['error', 'single'],                         // enforce single quotes
      // indent: ['error', 2],                                // 2 space indentation
      // 'no-console': 'warn',                                // warn for console.log
      // 'no-debugger': 'error',                              // prevent debugger
      // eqeqeq: 'error',                                     // require === instead of ==
      // 'no-var': 'error',                                   // disallow var
      // 'prefer-const': 'error',                             // use const if variable not reassigned
      // curly: 'error',                                      // require {} in if/loops
      // 'no-trailing-spaces': 'error',                       // remove trailing spaces
      // 'comma-dangle': ['error', 'always-multiline'],       // trailing comma
      // 'arrow-spacing': 'error',                            // enforce arrow function spacing
      // 'object-curly-spacing': ['error', 'always'],         // spacing in objects
    },
  },
];
