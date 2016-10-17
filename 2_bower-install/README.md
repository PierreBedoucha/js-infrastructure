# Bower Install

Bower is a package manager on the node platform, providing libraries for JavaScript developers.
Bower is commonly used in JavaScript projects to manage library dependencies used by your app/project (where as npm is used for development tools) and sharing reusable code.

## 1. Install packages from bower.json

Bower packages may be installed using the syntax `bower install package-name`.

The packages may also be installed using a bower.json file, which is the bower equivalent to packages.json from task 1. This file contains metadata of your application and which packages are required as dependencies for the application.

Running the command `bower install` will examine bower.json file and install all the dependencies listed.

* Open bower.json and examine its content and the dependencies json object.
* Run the command `bower install`
* Open the current directory and examine the content of the bower_components folder.
* Compare bower.json to bower_components and the console output during install.
* Open the various packages in bower_components and examine their bower.json, investigate how dependencies are loaded.

## 2. Add a new package

When adding dependencies to your application, there is no need to manually edit the bower.json file. Instead adding a flag to the install command for a library will in addition to installing it, also list it as a dependency in the bower.json file.

* Add the `--save` flag to save a package as a module dependency.

`bower install angular --save`

> AngularJS is a popular Single Page Application (SPA) JavaScript framework used for creating major websites which can act more like a desktop application. It's a good framework to learn if you want to get in on web development.

* Examine changes to bower_components directory and bower.json