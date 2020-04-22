module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    /* espree options */
    // "ecmaVersion": 6,
    // "sourceType": 'module',
    // "ecmaFeatures": {
    //   "impliedStrict": true,
    //   "jsx": true,
    //   "experimentalObjectRestSpread": true
    // }
    /* babel-eslint options */
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  globals: { load: true },
  plugins: ['react'],
  rules: {
    /* Best Practices */
    //强制数组方法的回调函数中有 return 语句
    'array-callback-return': ['error'],
    //禁用不必要的转义字符
    'no-useless-escape': ['error'],
    //要求使用 === 和 !==
    eqeqeq: ['error', 'always'],
    //要求或禁止使用分号代替 ASI
    semi: ['error', 'never'],
    /* Stylistic Issues */
    //强制使用一致的缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    //强制在块之前使用一致的空格
    'space-before-blocks': ['error', 'alawys'],
    //强制在关键字前后使用一致的空格
    'keyword-spacing': ['error'],
    //要求操作符周围有空格
    'space-infix-ops': ['error'],
    //要求或禁止文件末尾存在空行
    'eol-last': ['error'],
    //要求或禁止块内填充
    'padded-blocks': ['error', 'never'],
    //space-in-parens
    'space-in-parens': ['error', 'never'],
    //强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],
    //强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'never'],
    //强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],
    //禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    //强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error'],
    //禁用行尾空格
    'no-trailing-spaces': ['error'],
    //要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error'],
    //强制在逗号前后使用一致的空格
    'comma-spacing': ['error'],
    //强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    //强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    //禁止出现多行空行
    'no-multiple-empty-lines': ['error'],
    //强制在 JSX 属性中一致地使用双引号或单引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    //要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'as-needed'],
    //强制在代码块中使用一致的大括号风格
    'brace-style': ['error'],
    //要求调用无参构造函数时有圆括号
    'new-parens': ['error'],
    //强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    //强制操作符使用一致的换行符
    'operator-linebreak': ['error', 'after'],
    //强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],
    //禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': ['error'],
    //强制使用骆驼拼写法命名约定
    camelcase: ['error'],
    //要求构造函数首字母大写
    'new-cap': ['error'],
    //禁用 Object 的构造函数
    'no-new-object': ['error'],
    //禁用 Array 的构造函数
    'no-array-constructor': ['error'],
    //强制在注释中 // 或 /* 使用一致的空格
    // 'spaced-comment': [
    //   'error',
    //   'always',
    //   {
    //     markers: ['!'],
    //   },
    // ],
    //
    // 禁止使用多个空格
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    // 'react/jsx-tag-spacing': [
    //   'error',
    //   {
    //     closingSlash: 'never',
    //     beforeSelfClosing: 'always',
    //     afterOpening: 'never',
    //   },
    // ],
    /* ECMAScript 6 */
    //强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': ['error'],
    //要求或禁止模板字符串中的嵌入表达式周围空格的使
    'template-curly-spacing': ['error'],
    //禁止重复模块导入
    'no-duplicate-imports': ['error'],
    //强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': ['error', 'after'],
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
