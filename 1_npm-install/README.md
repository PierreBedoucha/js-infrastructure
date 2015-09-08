# NPM Install
Npm is a package manager on the node platform, providing other package managers, command line tools, modules and libraries for JavaScript developers.
Npm is commonly used in JavaScript projects to manage dependencies, share reusable code and performing tasks related to project infrastructure.

## Install npm
There is several ways to install npm, the easiest is to download the Node.js installer directly from (https://nodejs.org/en/), remember to make sure npm is checked when installing. It is also possible to use a package manager to install Node.JS and npm, please refer to the following repository for instructions: (https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager?utm_source=%5Bdeliciuos%5D&utm_medium=twitter)

Verify the installation is correct by:
`node -v`
Should be >= 0.10
`npm -v`
Should be >= 1.4

## Install some global utilities
The general syntax for installing npm packages is npm install <package>. The -g flag will install something globally.

`npm install -g http-server`
Http server should now be offered as command line utility. Used as a simple web-server.

`npm install -g grunt-cli`
Grunt should now be offered as command line utility. Used as a task runner. Same goal as Gulp.

`npm install -g gulp`
Gulp should now be offered as command line utility. Used as a task runner. Same goal as Grunt.

`npm install -g bower`
Bower should now be offered as command line utility. Used as a package manager for JavaScript libraries.

## Install packages from package.json
Run the command:
`npm install`

* Open packages.json and examine the devDependencies json object.
* Open the current directory and examine the content of the node_modules folder.
* Compare the package.json content, directory node_modules content to the console output from npm.
* Open the various packages in node_modules and examine their packages.json, further recursive investigate how dependencies are loaded.

## Add a new package
Add the --save-dev flag to save a package as a dependency during development.
`npm install gulp-uglify --save-dev`

* Examine changes to node_modules directory and package.json

## Test a node module
`http-server .\web -p 9500`
Open web browser on http://localhost:9500/ and verify you receive a html page with followin text: Welcome to this awesome page