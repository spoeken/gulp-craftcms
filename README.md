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

