const isProd = process.argv.includes('--production');
const isDev = !isProd

// Config
import path from './path.js';

export default {
   isProd: isProd,
   isDev: isDev,

   browserSync: {
      server: {
         baseDir: path.root
      },

      notify: false
   },

   htmlmin: {
      collapseWhitespace: true
   },

   rename: {
      suffix: '.min'
   },

   imagemin: {
      verbose: true
   }
}