const pathSrc = './src';
const pathDest = './public';

export default {
   root: pathDest,

   html: {
      src: pathSrc + '/html/*.html',
      watch: pathSrc + '/html/**/*.html',
      dest: pathDest
   },

   css: {
      src: pathSrc + '/css/*.css',
      watch: pathSrc + '/css/**/*.css',
      dest: pathDest + '/css'
   },

   scss: {
      src: pathSrc + '/scss/*.{scss,sass}',
      watch: pathSrc + '/scss/**/*.{scss,sass}',
      dest: pathDest + '/css'
   },

   js: {
      src: pathSrc + '/js/*.js',
      watch: pathSrc + '/js/**/*.js',
      dest: pathDest + '/js'
   },

   ts: {
      src: pathSrc + '/ts/*.ts',
      watch: pathSrc + '/ts/**/*.ts',
      dest: pathDest + '/js'
   },

   img: {
      src: pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}',
      watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
      dest: pathDest + '/img'
   }
}