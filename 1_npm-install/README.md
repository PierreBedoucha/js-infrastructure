# NPM Install
Npm is a package manager on the node platform, providing other package managers, command line tools, modules and libraries for JavaScript developers.
Npm is commonly used in JavaScript projects to manage dependencies, share reusable code and performing tasks related to project infrastructure.

## Install npm
There is several ways to install npm, the easiest is to download the Node.js installer directly from (https://nodejs.org/en/), remember to make sure npm is checked when installing. It is also possible to use a package manager to install Node.JS and npm, please refer to the following repository for instructions: (https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager?utm_source=%5Bdeliciuos%5D&utm_medium=twitter)

Verify the installation is correct by running the following on command line:

`node -v`

Should be >= 0.10

`npm -v`

Should be >= 1.4

## Install some global utilities
Npm may install packages both in local and global locations.
Installing a package globally, means it will be available to you regardless of what directory you are currently in.
Typically when a utility is required on command line, like bower and grunt which we will visit in later tasks, we need to install them globally to have them available at command line.
This may require elevated privileges on windows and sudo on osx/linux.
Local installations of npm packages are available from the directory you install from and are typically dependencies needed for developing on a specific project.

The general syntax for installing npm packages is `npm install package-name`.
The `-g` flag will install something globally.
Execute the following steps, as we need these tools available to us on command line.

`npm install -g http-server`

Http server should now be offered as command line utility. Used as a simple web-server.

`npm install -g grunt-cli`

Grunt should now be offered as command line utility. Used as a task runner. Same goal as Gulp.

`npm install -g gulp`

Gulp should now be offered as command line utility. Used as a task runner. Same goal as Grunt.

`npm install -g bower`

Bower should now be offered as command line utility. Used as a package manager for JavaScript libraries.

## Install packages from package.json
Local packages can be installed using the same syntax as global packages, just without the `-g` flag.
Local packages may also be installed using a packages.json file.
This file contains a description of your application and which packages are required to run or develop on the application.
Running the command `npm install` will examine the package.json file and install all the dependencies listed locally.

Run the command:

`npm install`

* Open packages.json and examine the devDependencies json object.
* Open the current directory and examine the content of the node_modules folder.
* Compare the package.json content, directory node_modules content to the console output from npm.
* Open the various packages in node_modules and examine their packages.json, further recursive investigate how dependencies are loaded.

## Add a new package
When adding packages as dependencies on your application, there is no need to manually edit the packages.json file.
Instead adding a flag to the install command for a module will in addition to install it locally, also list it as a dependency in the packages.json file.

Add the `--save-dev` flag to save a package as a dependency during development.

`npm install gulp-uglify --save-dev`

* Examine changes to node_modules directory and package.json

## Test a node module
When a utility is installed globally for us to use on command line, we may invoke it directly like this:

`http-server -p 9500`

Open web browser on http://localhost:9500/ and verify you receive a html page with following text: Welcome to this awesome page