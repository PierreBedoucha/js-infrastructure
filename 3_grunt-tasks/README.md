# Grunt tasks

Grunt is a task runner on the node platform. It's used to string together common developer tasks such as copying files, compiling things, running tests, starting web servers, etc. Grunt is configured through json object located in the `Gruntfile`.

The gruntfile is a javascript file containing definitions of tasks and configuration for the tasks.

## Prerequesties
To be able to complete the exercises, npm, bower and grunt must all be installed and available on your commandline.
For instructions on how to install these tools please check the steps in task 1.

## 1. Pull down the npm and bower packages

* Run the commands:

```
npm install
bower install
```

## The gruntfile

When Grunt is invoked on the command line (or evaluated by a visual tool), it will always start by looking for the gruntfile.
The Gruntfile is a JavaScript file normally named `Gruntfile.js`.
Grunt uses NodeJS behind the scenes to wire up the neccesary infrastructure. All the tools we use today is based on NodeJS.

Node provides module.exports, which is assigned a function that takes grunt as a parameter.
Node will notice that we have installed grunt locally, and pass the grunt module into the function.
This parameter is our entry point to provide the configuration needed to execute our tasks.

* Open Gruntfile.js in the task 3 folder and try to understand it as you read below.

The gruntfile consists of 3 main sections.

First, we load the npm modules required to execute tasks, then we define configurations for the modules and lastly we define our own custom tasks we wish to execute. In our own custom tasks we can string together any task we want so that all tasks are executed when we run the named Grunt task.

The grunt object passed to our function by Node.js contains a `loadNpmTasks` method, where you may pass in the string name of the npm module you wish to load.

There is also an `initConfig` method which will accept a JSON object containing the configuration of the different tasks.

This JSON object also contains other JSON objects which are the specific configurations for each imported module, and there is a convention as to which property name corresponds to which npm module, for example will the grunt-contrib-copy npm module expect the gruntConfig object to contain a property `copy` which contains an object which is the configuration for tasks running the copy task. Package specific configuration options are listed in their respective repositories or npm website. For example, [this is the docs for grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy)

The last method on the the grunt object we need to understand is the `registerTask` method.
The modules we have imported like *grunt-contrib-copy* is a task in itself, however we would like to be able to specify a task for our project with a name we define, like build, and we would like to specify multiple tasks running in sequence without having to execute them manually.
We create an alias for a sequence of tasks.
when calling `registerTask`, the first argument is the name we want available to us on command-line and the second argument is an array containing an ordered list of tasks to execute in sequence.

## Exercises
Each of the exercises builds on the previous ones. Please complete them in this order and commit to your git repo after each exercise to enable "rollback".

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

### Exercise: copy files
Open your ./app/scripts/ directory and notice we are currently missing jquery.js which is required for our application.
Run the following command and notice jquery.js is copied to the folder:

`grunt dependencies`

Currently bootstrap.js is already existing in the folder, however this is also a dependency copied from the bower_components folder. We need to also copy this file. To achieve our goal, do the following:
* Delete both jquery.js and bootstrap.js from ./app/scripts/ directory
* Commit the removal of bootstrap.js to git, it should not be checked in
* Open Gruntfile.js and modify the dependencies task so that it will run the copy task using the all configuration instead of the jquery configuration. `copy:all`
* Run the dependencies task and verify that both jquery.js and bootstrap.js are copied to the ./app/scripts/ directory. `grunt dependencies`
* If both jquery.js and bootstrap.js are copied, the task was successful

We forgot something in our `copy:all` task configuration, we are currently not copying the bootstrap.css file. To also copy this file, perform the following steps:
* Delete bootstrap.css from ./app/styles/ directory
* Commit the removal of bootstrap.css to git, it should not be checked in
* Open Gruntfile.js and add configuration for bootstrap.css to the files array of the `copy:all` task configuration
* Run the dependencies task and verify bootstrap.css are copied to the ./app/styles directory
* If bootstrap.css are copied, the task was successful

### Exercise: serving the application
To launch the web server, we will use the grunt connect module.
In the top of the Gruntfile, notice that we are importing the npm tasks for grunt-contrib-connect, and that the gruntConfig object contains a connect task.
Connect contains an options object which is a shared configuration for all connect task configurations.
There is also a specific task configuration, serve, which overrides the default port.

* Configured tasks may be invoked by grunt without needing to register a specific alias grunt task. Try running `grunt connect:serve` and notice the application opens in your default browser on url: http://localhost:9601
* Run `grunt connect` and notice it will actually pick the serve configuration as a default, opening browser on url: http://localhost:9601
* We would like to have a grunt task which will perform both the copy operation and launching the web server. Create a new grunt task called `run` which will first perform the `copy:all` task and then launching the web server with the `connect:serve` task. Check the documentation if you are unsure: (http://gruntjs.com/creating-tasks)
* This part is successful when files are copied and the web page launches in your browser.

When launching using the `grunt run` task, open console in your browser (F12) and notice its complaining about a missing file, the style.css file.
This is because style.css does not exist in the folder, and it is actually something which should be compiled from the style.scss file.
Scss is the file extension for SASS files, and without elaborating any further on the technology, just note that it is a file which may be compiled into style.css so that our application will be happy!

* Importing one and one task in top of gruntfile is one way to go, however notice the commented line, which says `require('load-grunt-tasks')(grunt);`. Uncomment the line and remove the explicit loading. Test that your grunt tasks still works. `require` tells Node.js that we require that the load-grunt-tasks npm module executes. This module again finds all installed npm modules whose name starts with 'grunt-' and loads them using the loadNpmTasks on the grunt object we pass in to the load-grunt-tasks module.
* The grunt-sass module is already installed by npm, and there is an empty `sass` object in the gruntConfig object in the Gruntfile. Go to the module GitHub page and find out how to configure the sass task: (https://github.com/sindresorhus/grunt-sass). Hint: Look at the examples.
* We should include sass compilation as part of our `run` task. Make sure sass compilation is done before web server is launched
* This exercise is completed once the background for the calculator becomes blue.

### Exercise: concatenate and minify
Open ./app/index.html in a text editor and notice we include three different javascript files in the bottom.
Three isn't that many, but in a real world project we may end up with hundreds, maybe even thousands of javascript files.
It would be alot easier if there were only a single javascript file to include, and this may be achieved using concatenation.
There is a grunt module, grunt-contrib-concat, already installed. Go to project page and find out how to configure: (https://github.com/gruntjs/grunt-contrib-concat)

* Add grunt task configuration to combine the three javascript files to ./app/dist/awesomeapp.js. Tip: List jquery first, then bootstrap and lastly main.js as this keeps dependencies in correct order.
* The concatenation task should run as part of our `run` task. Make sure concatenation is done before web server is launched.
* The HTML file still references the three original files, change this to our new concatenated file.
* If the application still behaves the same way after you changed the script tag, this part of the exercise is successful.

We now have only a single file to reference from our web application. When the source of this single file grows, referencing libraries and extending your application, it may reach a significant size.
To make life easier for mobile phones and poor connections, we should always strive to keep our imprint as small as possible. One way to help reduce size is minification of javascript files.

* Install a grunt module for minification, the grunt-contrib-uglify module. Make sure its stored as a development dependency.
* Configure the uglify module to minifying ./app/dist/awesomeapp.js into ./app/dist/awesomeapp.min.js
* Make sure the web application uses correct javascript file.
* If the application still behaves the same way after you changed the script tag, this part of the exercise is successful.

Having done this with javascript files, perhaps we should do the same with css?

* Install a grunt module for css minification, the grunt-contrib-cssmin module. Make sure its stored as a development dependency.
* Concatenate the css files.
* Minify the css file.
* Make sure the web application uses correct css file.
* Make sure the run task does the necessary steps in correct order!
* Exercise is complete when application is modified to reference the minified css file and the background of the calculator still turns blue.