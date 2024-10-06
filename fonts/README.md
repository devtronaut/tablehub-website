# Oursourcing Fonts

These fonts are not placed in the app-root font directory to not load them unnecessarily.  
Hence they have to be moved to the `/src/app/font` directory, referenced in the `/src/app/globals.css` as shown below and set as a font in the `/tailwind.config.ts` as shown below.  
The woff2 files can be moved to the other directory. No need to copy them and have them in both directories.

```css
/* globals.css */

@layer base {
    @font-face {
        font-family: 'rubik-regular';
        font-style: normal;
        /* check here: https://fonts.google.com/specimen/Rubik */
        font-weight: 400;
        /* url is relative to the globals.css file */
        src: url(./fonts/RubikRegular.woff2) format('woff2');
    }

    /* other font faces */
}
```

```js
/* tailwind.config.ts */

const config: Config = {
    theme: {
        fontFamily: {
            // must match the corresponding font-family in the globals.css file (see above)
            normal: 'rubik-regular',
        }
    }
}
```
