# Gulp tasks
Gulp is a task runner on the node platform. It differs from Grunt as it uses in memory streams instead of disk when processing files in tasks.
Gulp is configured using javascript located in gulpfile.js.
Gulp may be used for many different kinds of automation tasks, some of these we will explore in the different exercises.

## Prerequesties
To be able to complete the exercises, npm, bower and gulp must all be installed and available on your commandline.
For instructions on how to install these tools please check the steps in task 1.

## Pull down the npm and bower packages
Run the commands:

```
npm install
bower install
```

## Exercise: copy files
Open gulpfile.js and examine the configuration. Notice especially the following lines:

`var gulp = require('gulp');`

Notice that with gulp we are loading gulp into a variable.

```
var copyJquery = 'bower_components/jquery/dist/jquery.js';
var copyAllJs = ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'];
var copyCss = 'bower_components/bootstrap/dist/css/bootstrap.css';
```

We may create variables for use by our tasks. Notice that we don't have a large configuration object as we did with grunt, but rather precise variables.

```
gulp.task('dependencies', function(){
  gulp
    .src(copyJquery)
    .pipe(gulp.dest('app/scripts'));
});
```

This is the registration of a new gulp task called dependencies which when invoked will pick up the jquery file and move it to correct destination.

## Exercises
Each of the exercises builds on the previous ones. Please complete them in order and commit to your git repo after each exercise to enable "rollback".

### Exercise: copy files
Open your ./app/scripts/ directory and notice we are currently missing jquery.js which is required for our application.
Run the following command and notice jquery.js is copied to the folder:

`gulp dependencies`

Currently bootstrap.js is already existing in the folder, however this is also a dependency copied from the bower_components folder. We need to also copy this file. To achieve our goal, do the following:
* Delete both jquery.js and bootstrap.js from ./app/scripts/ directory
* Commit the removal of bootstrap.js, it should not be checked in
* Open gulpfile.js and modify the dependencies task so that it will copy using the copyAllJs variable instead of the copyJquery variable
* Run the dependencies task and verify that both jquery.js and bootstrap.js are copied to the ./app/scripts/ directory

There is one more file to copy, we are currently not copying the bootstrap.css file. To also copy this file, perform the following steps:
* Delete bootstrap.css from ./app/styles/ directory
* Commit the removal of bootstrap.css, it should not be checked in
* Open gulpfile.js and uncomment the 2 lines below copyAll statement and complete it with the pipe function
* Run the dependencies task and verify bootstrap.css are copied to the ./app/styles directory

### Exercise: serving the application
To launch the web server, we will use the gulp connect module.
In the top of the gulpfile, notice that we are importing the npm tasks for gulp-connect and gulp-open, and that connectConfig variable contains some server configuration.
Connect looks a bit similar to grunt connect, however they work a bit differently, for example you may not specify open in gulp connect module, thus we need the open module for that.

* There is a gulp connect task, run `gulp connect` and verify that the application opens following url in your default web browser: (http://localhost:9602)
* We would like to have a gulp task which will perform both the copy operation and launching the web server. Create a new gulp task called run which will first call the dependencies task, then call the connect task. Gulp tasks may run other gulp tasks in a sequence. Check the documentation at: (https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md)

When launching using the `gulp run` task, open console in your browser and notice its complaining about a missing file, the style.css file.
This is because style.css does not exist in the folder, and it is actually something which should be compiled from the style.scss file.
Scss is the file extension for SASS files, and without elaborating any further on the technology, just note that it is a file which may be compiled into style.css so that our application will be happy!

* We need to import the gulp-sass module in top of gulpfile.js. Name the variable sass.
* The gulp-sass module is already installed by npm, and there is an empty sass task in the fulpfile. Go to the module GitHub page and find out how to configure the sass task: (https://www.npmjs.com/package/gulp-sass). Hint: Look at the examples.
* We should include sass compilation as part of our run task. Make sure sass compilation is done before web server is launched

### Exercise: concatenate and minify
Open ./app/index.html in a text editor and notice we include three different javascript files in the bottom.
Three isn't that many, but in a real world project we may end up with hundreds, maybe even thousands of javascript files.
It would be alot easier if there were only a single javascript file to include, and this may be achieved using concatenation.
There is a gulp module, gulp-concat, already installed. Go to project page and find out how to configure: (https://github.com/wearefractal/gulp-concat)

* Add a gulp task to combine the three javascript files to ./app/dist/awesomeapp.js. Tip: List jquery first, then bootstrap and lastly main.js as this keeps dependencies in correct order.
* The concatenation task should run as part of our run task. Make sure concatenation is done before web server is launched.
* The HTML file still references the three original files, change this to our new concatenated file.

We now have only a single file to reference from our web application. When the source of this single file grows, referencing libraries and extending your application, it may reach a significant size.
To make life easier for mobile phones and poor connections, we should always strive to keep our imprint as small as possible. One way to help reduce size is minification of javascript files.

* Install a gulp module for minification, the gulp-uglify module. Make sure its stored as a development dependency.
* Configure the uglify module to minifying ./app/dist/awesomeapp.js into ./app/dist/awesomeapp.min.js
* Make sure the web application uses correct javascript file.

Having done this with javascript files, perhaps we should do the same with css?

* Install a gulp module for css minification, the gulp-minify-css module. Make sure its stored as a development dependency.
* Concatenate the css files.
* Minify the css file.
* Make sure the web application uses correct css file.
* Make sure the run task does the necessary steps in correct order!