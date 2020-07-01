require('asset-require-hook')({
  extensions: ["svg", "css", "jpg", "png", "gif"],
  name: '/static/media/[name][hash:8].[ext]'
});

require('@babel/register')({
  presets: [
    ['@babel/env', {
      targets: {
        esmodules: true,
        node: 'current'
      }
    }],
    '@babel/react',
  ],
  ignore: [],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
  ]
});

require('./app.js');