# SCSS Structure Explanation and Documentation

This document is to help serve as a guide to how the structure of the files should work


***
## main.scss

This file is dedicated as the centralized file you import into the very root of your application.  It's dedicated to normalizing and enhancing default element styles within the HTML.

Elements can include:
  - html & body
  - header & section
  - div, ul, li, etc...

Resetting the style of the basic elements at the root level allows you to set shared styles amongst basic components.  You can do more of the fine work later on within the specific composition of the elements into your components.

***
## mixins

Creating a directory specific to your mixin files allows you to compose a collection of mixins surrounding CSS attributes while supporting multiple browsers.

From this collection, you can import the specific mixin tools you need in your individual component SCSS files.

### *Example*:

  '_flexbox.scss'
  + Contains generalized CSS Flexbox helpers intended to help the user compose components
  + Mixins allow for cross-browser support without having to write all lines manually
  +    
        // In _flexbox.scss - Declaration
        @mixin flex {
          display:  -webkit-box;
          display:  -webkit-flex;
          display:  -ms-flexbox;
          display:  flex;
        }

        @mixin align-items ($position) {
          -webkit-box-align:    $position;
          -webkit-align-items:  $position;
          -ms-flex-align:       $position;
          align-items:          $position;
        }

        // In _container.scss - Composition
        @import '{*path to*}/sass/mixins/flexbox';

        .container {
          @include flex;
          @include align-items(center);
          margin: 0;
          padding: 20px;
        }


### *NOTE*:

Your SCSS files are read in a top-to-bottom cascading fashion.  If you attempt to reference a SCSS module in a file that is declared above the module you are attempting to reference, it will not hoist and will throw an error


***
## _colors.scss

This is where you declare all of your re-usable color variables.  

Having a central place to store all of your color codes ensures that you don't need to worry about the specific RGB value combination you used in the last couple of files; just declare it in the colors file once, and re-use it from there.
