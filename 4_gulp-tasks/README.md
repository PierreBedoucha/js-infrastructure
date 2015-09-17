# Grunt tasks
Grunt is a task runner on the node platform. Grunt is configured through json object located in the gruntfile.
The gruntfile is a javascript file containing definitions of tasks and configuration for the tasks.
Grunt may be used for many different kinds of automation tasks, some of these we will explore in the different exercises.

## Prerequesties
To be able to complete the exercises, npm, bower and grunt must all be installed and available on your commandline.
For instructions on how to install these tools please check the steps in task 1.

## Pull down the npm and bower packages
Run the commands:

```
npm install
bower install
```

## Exercise: copy files
Open Gruntfile.js and examine the configuration. Notice especially the following lines:

`grunt.loadNpmTasks('grunt-contrib-copy');`

Notice that we are loading a npm task called grunt-contrib-copy. This is the package grunt will use to copy files

`grunt.initConfig(gruntConfig);`

This line will initialize grunt with the configuration for each individual task to be performed.
Examine the gruntConfig object to see copy as the task name corresponding to the grunt-contrib-copy module, and jquery + all as 2 different configurations for this task.

```
grunt.registerTask('dependencies', [
    'copy:jquery'
  ]);
```

This is the registration of a new grunt task called dependencies which when invoked will run the copy task with jquery configuration.

## Exercises
Each of the exercises builds on the previous ones. Please complete them in order and commit to your git repo after each exercise to enable "rollback".

### Exercise: copy files
Open your ./app/scripts/ directory and notice we are currently missing jquery.js which is required for our application.
Run the following command and notice jquery.js is copied to the folder:

`grunt dependencies`

Currently bootstrap.js is already existing in the folder, however this is also a dependency copied from the bower_components folder. We need to also copy this file. To achieve our goal, do the following:
* Delete both jquery.js and bootstrap.js from ./app/scripts/ directory
* Commit the removal of bootstrap.js, it should not be checked in
* Open Gruntfile.js and modify the dependencies task so that it will copy using the all configuration instead of the jquery configuration
* Run the dependencies task and verify that both jquery.js and bootstrap.js are copied to the ./app/scripts/ directory

We forgot something in our copy:all task configuration, we are currently not copying the bootstrap.css file. To also copy this file, perform the following steps:
* Delete bootstrap.css from ./app/styles/ directory
* Commit the removal of bootstrap.css, it should not be checked in
* Open Gruntfile.js and add configuration for bootstrap.css to the files array of the copy:all task configuration
* Run the dependencies task and verify bootstrap.css are copied to the ./app/styles directory

### Exercise: serving the application
To launch the web server, we will use the grunt connect module.
In the top of the Gruntfile, notice that we are importing the npm tasks for grunt-contrib-connect, and that the gruntConfig object contains a connect task.
Connect contains an options object which is a shared configuration for all connect task configurations.
There is also a specific task configuration, serve, which overrides the default port.

* Configured tasks may be invoked by grunt without needing to register a specific grunt task. Try running `grunt connect:serve` and notice the application opens in your default browser on url: http://localhost:9601
* Run `grunt connect` and notice it will actually pick the serve configuration as a default, opening browser on url: http://localhost:9601
* We would like to have a grunt task which will perform both the copy operation and launching the web server. Create a new grunt task called run with will first perform the copy:all task and then launching the web server with the connect:serve task. Check the documentation if you are unsure: (http://gruntjs.com/creating-tasks)

When launching using the `grunt run` task, open console in your browser and notice its complaining about a missing file, the style.css file.
This is because style.css does not exist in the folder, and it is actually something which should be compiled from the style.scss file.
Scss is the file extension for SASS files, and without elaborating any further on the technology, just note that it is a file which may be compiled into style.css so that our application will be happy!

* Importing one and one task in top of grunt file is one way to go, however notice the commented line, which says `require('load-grunt-tasks')(grunt);`. Uncomment the line and remove the explicit loading. Test that your grunt tasks still works
* The grunt-sass module is already installed by npm, and there is an empty sass object in the gruntConfig object in the Gruntfile. Go to the module GitHub page and find out how to configure the sass task: (https://github.com/sindresorhus/grunt-sass). Hint: Look at the examples.
* We should include sass compilation as part of our run task. Make sure sass compilation is done before web server is launched

### Exercise: concatenate and minify
Open ./app/index.html in a text editor and notice we include three different javascript files in the bottom.
Three isn't that many, but in a real world project we may end up with hundreds, maybe even thousands of javascript files.
It would be alot easier if there were only a single javascript file to include, and this may be achieved using concatenation.
There is a grunt module, grunt-contrib-concat, already installed. Go to project page and find out how to configure: (https://github.com/gruntjs/grunt-contrib-concat)

* Add grunt task configuration to combine the three javascript files to ./app/dist/awesomeapp.js. Tip: List jquery first, then bootstrap and lastly main.js as this keeps dependencies in correct order.
* The concatenation task should run as part of our run task. Make sure concatenation is done before web server is launched.
* The HTML file still references the three original files, change this to our new concatenated file.

We now have only a single file to reference from our web application. When the source of this single file grows, referencing libraries and extending your application, it may reach a significant size.
To make life easier for mobile phones and poor connections, we should always strive to keep our imprint as small as possible. One way to help reduce size is minification of javascript files.

* Install a grunt module for minification, the grunt-contrib-uglify module. Make sure its stored as a development dependency.
* Configure the uglify module to minifying ./app/dist/awesomeapp.js into ./app/dist/awesomeapp.min.js
* Make sure the web application uses correct javascript file.

Having done this with javascript files, perhaps we should do the same with css?

* Install a grunt module for css minification, the grunt-contrib-cssmin module. Make sure its stored as a development dependency.
* Concatenate the css files.
* Minify the css files.
* Make sure the web application uses correct css file.
* Make sure the run task does the necessary steps in correct order!