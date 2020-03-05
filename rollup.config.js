import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import postcss from 'postcss';
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const plugins = [
  require('postcss-import'),
  require('precss'),
  require('postcss-nested')
];

const preprocess = {
  style: ({ content, filename, attributes }) => {
    // Plugins List:
    // https://github.com/postcss/postcss/blob/master/docs/plugins.md

    // const withGlobals = `@import '/static/styles.css';\r\n${content}`;

    return new Promise((fulfil, reject) => {
      postcss(plugins)
        .process(content, {
          from: 'src',
          parser: require('postcss-comment'),
          map: { inline: false }
        })
        .then(result => {
          fulfil({
            code: result.css.toString(),
            map: result.map.toString()
          });
        })
        .catch(err => reject(err));
    });
  }
};

export default {
  input: './src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      dev,
      preprocess,
      hydratable: true
    }),
    resolve(),
    commonjs()
  ]
}