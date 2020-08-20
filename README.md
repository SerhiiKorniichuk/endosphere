QUICK START
---
`$npm i` - install all modules from project

`$gulp` - to start gulp-build


GULP BUILD
---
Plugin name     | Link to documentation
----------------|----------------------
BrowserSync     | https://www.browsersync.io/docs/gulp
File Include    | https://www.npmjs.com/package/gulp-file-include
Delete files    | https://www.npmjs.com/package/del
SCSS/SASS       | https://www.npmjs.com/package/gulp-sass
Autoprefixer    | https://www.npmjs.com/package/gulp-autoprefixer
Group CSS media-queries     | https://www.npmjs.com/package/gulp-group-css-media-queries
Rename          | https://www.npmjs.com/package/gulp-rename
Clean CSS       | https://www.npmjs.com/package/gulp-clean-css
Uglify ES       | https://www.npmjs.com/package/gulp-uglify-es
Babel           | https://www.npmjs.com/package/gulp-babel
Imagemin        | https://www.npmjs.com/package/gulp-imagemin
Fonter          | https://www.npmjs.com/package/gulp-fonter
Conver ttf2woff    | https://www.npmjs.com/package/gulp-ttf2woff
Conver ttf2woff2   | https://www.npmjs.com/package/gulp-ttf2woff2


Compression PNG and JPG images
---
Just drop pictures into a folder: 

    dir /#src/img
    
After run `$gulp`, images will be automatically compressed and uploaded to the release folder.

__Сompression ratio settings:__

Find in `gulpfile.js`:

```js
function images() {
  return src(path.src.img)
    .pipe(
        imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 99, progressive: true }),
            imagemin.optipng({ optimizationLevel: 1 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false }
                ]
            })
        ])
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}
```
__The compression ratio is adjusted in these lines:__

JPG: `imagemin.mozjpeg({ quality: 99, progressive: true })` - from 99 to 1;

PNG: `imagemin.optipng({ optimizationLevel: 1 })` - from 1 to 7.


Automatic FONTS include
---
Drop the TTF files with fonts into the folder:

    dir /#src/fonts
		
After run `$gulp`, fonts are automatically converted `.woff` and `.woff2` formats.

The next step, the function in `gulpfile.js` processes all files and automatically writes the includs in the `fonts.scss`

__Function:__
```js
function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    })
  }
}
```

__File__ `fonts.scss`:
```scss
@include font("Montserrat", "Montserrat-Light", "300", "normal");
@include font("Montserrat", "Montserrat-Bold", "700", "normal");
@include font("Montserrat", "Montserrat-Medium", "500", "normal");
@include font("Montserrat", "Montserrat-Regular", "400", "normal");
@include font("Montserrat", "Montserrat-SemiBold", "600", "normal");
@include font("MontserratA", "MontserratAlternates-Regular", "400", "normal");
```