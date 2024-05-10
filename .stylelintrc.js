module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'no-irregular-whitespace': true,
    'declaration-no-important': true,
    'length-zero-no-unit': true,
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always',
    'order/properties-order': [
      /* Important Addition */
      'z-index',
      'content',
      'position',
      'display',
      'table-layout',
      'float',

      /* Positioning & Box */
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'min-width',
      'min-height',
      'max-width',
      'max-height',

      /* Text Params & Colors */
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'text-align',
      'text-indent',
      'color',

      /* Border Settings */
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-radius',

      /* Background */
      'background',
      'background-clip',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
    ],
  },
};
