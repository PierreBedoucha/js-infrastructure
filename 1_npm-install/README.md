# NPM Install
Npm is a **package manager** on the node platform, providing other package managers, command line tools, modules and libraries for JavaScript developers.
Npm is commonly used in JavaScript projects to manage dependencies, share reusable code and performing tasks related to project infrastructure.

## 1. Install npm
There are several ways to install npm, the easiest is to download the Node.js installer at https://nodejs.org. Remember to make sure the "Install npm" option is checked during install. 

It is also possible to use a package manager to install Node.JS and npm, please refer to [this repository for instructions](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager?utm_source=%5Bdeliciuos%5D&utm_medium=twitter)

* Verify the installation is correct by running the following in a command shell:

`node -v`

Should not return an error and be >= 0.10

`npm -v`

Should not return an error and be >= 1.4

## 2. Install global utilities
Npm may install packages in both **local** and **global** locations.

Installing a package globally, means it will be available to you regardless of what directory you are currently in. Typically when a utility is required on command line, like *bower* and *grunt* which we will use in later tasks, we need to install them globally to have them available at command line. Remember that utilities such as bower and grunt are separate, standalone programs so when we install these programs, we will install their *runtime* globally. This may require elevated privileges on Windows and sudo on OSX/Linux.

Local installations of npm packages are available from the directory you install from and are typically dependencies needed for developing on a specific project. For example, if you have a command line window open at `C:\dev\` and then do `npm install package-name`, npm will create `c:\dev\node_modules\package-name\`.

The general syntax for installing an npm packages is `npm install package-name`. The `-g` flag will install it globally.

* Execute the following steps, as we need these tools available to us on command line.

`npm install -g http-server`

**Http server** should now be offered as command line utility. This is a simple web server often used when developing NodeJS applications.

`npm install -g grunt-cli`

**Grunt** should now be offered as command line utility. This is an task automation application used to string together common developer tasks such as copying files, compiling things, running tests, starting web servers, etc. Gulp is an alternative to Grunt.

`npm install -g gulp`

**Gulp** should now be offered as command line utility. This is also a task automation application, like Grunt. Gulp is typically faster, but Grunt has more packages/plugins to use. Grunt is often easier to learn.

`npm install -g bower`

**Bower** should now be offered as command line utility. This is a front-end package manager (yes we used npm, an package manager, to download bower - another package manager) often used to install javascript libraries such as jQuery, Angular, Bootstrap, etc.

The common thing about all of the above things we just installed is that they are standalone applications, not just plain libraries.

## 3. Install packages from package.json
Local packages can be installed using the same syntax as global packages, just without the `-g` flag.

Local packages may also be installed using a `packages.json` file. This file contains metadata about your application and which packages are required to run or develop on the application.

Running the command `npm install` will examine the package.json file and install all the dependencies listed locally.

* Open packages.json in the task 1 folder and investigate its content. Note the `devDependencies` json object. This lists the packages that will be installed *locally*.
* Run the command `npm install` (ensure your command shell is in the task 1 folder first)
* Open the task 1 directory and examine the content of the node_modules folder.
* Compare the content of package.json and node_modules to the console output from npm.
* Open the various packages in node_modules and examine their packages.json, further recursive investigate how dependencies are loaded.

PS! The node_modules recursive dependency tree can get quite deep which can be annoying on Windows where there is a limit to how long paths can be. Some operations such as deleting node_modules may have to be done on commandline which bypasses some limitations the Windows GUI enforces with long paths. Having your codebase close to the disk root such as C:\dev\project-name\ is highly recommended.

## 4. Add a new package

When adding packages as dependencies on your application, there is no need to manually edit the packages.json file.
Instead adding a flag to the install command for a module will in addition to install it locally, also list it as a dependency in the packages.json file.

Add the `--save-dev` flag to save a package as a dependency during development.

* Install this as a development dependency:

`npm install gulp-uglify --save-dev`

* Examine changes to node_modules directory and package.json

## 5. Test a node module

When a utility is installed globally for us to use on command line, we may invoke it directly like this:

`http-server -p 9500`

* Open web browser on http://localhost:9500/ and verify you receive a html page with following text: Welcome to this awesome page