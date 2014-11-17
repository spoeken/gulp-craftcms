Workflow for Craft with Gulp
-
Requires [Nodejs](http://nodejs.org/) and [Gulp](http://gulpjs.com/)

Getting started
-

**Run** ```npm install``` and ```bower install```

**Compass needs the compass ruby gem.**
If you don't already have it: ```gem update --system``` and ```gem install compass```

[Download](http://buildwithcraft.com/) the latest version of craft and move the craft folder to the root.

Tasks
-

_note: Don't touch the templates folder in ```/craft``` it will be overwritten on build. Work on the ones in ```app/templates```_

* ```gulp watch``` to start the watch task, at the moment you will have to use a browser extention for live reload.

* ```gulp``` to build for production, all the magic happens and template files will be moved to ```craft/templates```, resources (images/js/css) will be concatinated, minified and wrapped in silk before they end up in ```/public```.

* ```gulp bower``` Injects bower dependencies into ```_layout.html```. This task will run on ```gulp watch``` as well.
_Remember to ```--save``` when installing components_.

Set ```/app``` as server root on development and ```/public``` for production.


Gulp Plugins
-


* **compass** -
_Css compiler_


* **autoprefixer** -
_So we don't have to write -moz-, -webkit-, -ms-, -o-, -all-, -the-, -time-_


* **concat** -
_Merging css and js to single files_


* **uglify** -
_Javascript minifyer_


* **jshint** -
_A tool that helps to detect errors and potential problems in your JavaScript code._


* **watch** -
_The thing that tells us when a file has changed_


* **livereload** -
_Updates our browsers when js or css changes_


* **usemin** -
_Reads the html to know what files to concat and stuff_


* **util** -
_Logs stuff. And it can ```gutil.beep();``` too :o_


* **del** -
_Our garbage guy_


* **cache** -
_A temp file based caching proxy task for Gulp._


* **imagemin** -
_Optimizes images for you._


* **wiredep** -
_Injects script and link tags when you install something with bower._
