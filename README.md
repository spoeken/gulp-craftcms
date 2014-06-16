Craft generator
-
Requires [Node](http://nodejs.org/) [Gulp](http://gulpjs.com/)

Getting started
-
run: ```npm install``` and ```bower install```

[Download](http://buildwithcraft.com/) the latest version of craft and move the craft folder to the root.

All template files are within app/templates

```gulp watch``` to start the watch task, use a plugin for now for live reload.

```gulp``` to build for production, all the magic happens and template files will be moved to ```craft/templates```, resources (images/js/css) will be concatinated, minified and wrapped in silk before they end up in public.

Set ```/app``` as server root on development and ```/public``` for production.

