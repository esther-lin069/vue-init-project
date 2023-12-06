module.exports = {
    // 引用官方的 stylelint-config-standard 與第三方的 stylelint-config-sass-guidelines 設定檔
    extends: [
        'stylelint-config-standard', // 官方的 stylelint-config-standard
        'stylelint-config-sass-guidelines', // 第三方的 stylelint-config-sass-guidelines
    ],
    // 引用第三方的 stylelint-order 插件
    plugins: ['stylelint-order'],

    // 配置 overrides 屬性，用來區分不同類型的檔案
    overrides: [
        {
            // 針對 scss、css、html、vue 檔案使用 postcss-scss 語法
            files: ['**/*.(scss|css|html|vue)'],
            customSyntax: 'postcss-scss',
        },
        {
            // 針對 html、vue 檔案使用 postcss-html 語法
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html',
        },
    ],

    // 配置各種檢查規則
    rules: {
        "selector-pseudo-class-no-unknown": [
            true,
            {
              "ignorePseudoClasses": ["deep"]
            }
        ],
        'scss/at-rule-no-unknown': [
            true,
            {
                'ignoreAtRules': ['tailwind'],
                'ignoreFunctions': ['theme']
            }
        ],
        // 是否允許用red、pink這種color命名
        'color-named': null,
        // 拒絕重複宣告屬性
        'declaration-block-no-duplicate-properties': true,
        // 拒絕使用縮寫屬性覆蓋單一屬性
        'declaration-block-no-shorthand-property-overrides': true,
        // 要求在宣告區塊結束加上分號
        'declaration-block-trailing-semicolon': 'always',
        // 指定縮排為 4 個空格
        indentation: 4,
        // 強制使用雙引號
        'string-quotes': 'double',
        // 強制使用大寫十六進位顏色碼
        'color-hex-case': 'upper',
        // 禁止沒必要的空格
        'no-empty-source': true,
        'no-irregular-whitespace': true,
        // 禁止全空的class
        'block-no-empty': true,
        // 允許一個# ID selector
        'selector-max-id': 1,
        // 禁止錯誤的hex color code
        'color-no-invalid-hex': true,
        // 樣式內的加減旁邊要有空格
        'function-calc-no-unspaced-operator': true,
        // 註解上方要有換行
        'comment-empty-line-before': 'always',
        // @上方要有換行
        'at-rule-empty-line-before': 'always',
        // 數字後面不能接零（1.0這種
        'number-no-trailing-zeros': true,
        // 數字前面省略零（變.1
        'number-leading-zero': 'never',
        // class的大括號後要有換行
        'block-opening-brace-newline-after': 'always',
        'block-closing-brace-newline-after': 'always',
        // import是否一定要有url
        'import-notation': 'string',

        // 排序相關的設定
        // 指定屬性的排序方式
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'float',
            'flex',
            'flex-direction',
            "align-items",
            "justify-content",
            'grid',
            'grid-template',
            'grid-template-areas',
            'grid-gap',
            'grid-column-gap',
            'grid-row-gap',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-template-rows',
            'grid-template-columns',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'background',
            'background-color',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'background-clip',
            'background-origin',
            'background-attachment',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-style',
            'border-color',
            'border-radius',
            'box-shadow',
            'color',
            'font',
            'font-size',
            'font-weight',
            'line-height',
            'letter-spacing',
            'text-align',
            'text-decoration',
            'text-transform',
            'white-space',
            'word-spacing',
            'animation',
            'transition',
            'transform',
            'perspective',
            'opacity',
            'mix-blend-mode',
            'cursor',
            'outline',
            'overflow',
            'user-select',
            'pointer-events',
            'resize',
            'table-layout',
            'empty-cells',
            'caption-side',
            'speak',
            'vertical-align',
            'visibility',
            'will-change',
            'fill',
            'stroke',
            'backface-visibility',
            'contain',
            'isolation',
            'perspective-origin',
            'appearance',
            'mask',
            'mask-image',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-clip',
            'mask-origin',
            'mask-composite',
            'mixins',
        ],
    },
};
