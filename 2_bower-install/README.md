# Bower Install
Bower is a package manager on the node platform, providing libraries for JavaScript developers.
Bower is commonly used in JavaScript projects to manage dependencies and sharing reusable code.

## Install packages from bower.json
Bower packages may be installed using the syntax `bower install package-name`.
The packages may also be installed using a bower.json file.
This file contains a description of your application and which packages are required as dependencies for the application.
Running the command `bower install` will examine the bower.json file and install all the dependencies listed.

Run the command:

`bower install`

* Open bower.json and examine the dependencies json object.
* Open the current directory and examine the content of the bower_components folder.
* Compare the bower.json content, directory bower_components content to the console output from bower.
* Open the various packages in bower_components and examine their bower.json, investigate how dependencies are loaded.

## Add a new package
When adding dependencies to your application, there is no need to manually edit the bower.json file.
Instead adding a flag to the install command for a library will in addition to installing it, also list it as a dependency in the bower.json file.

Add the `--save` flag to save a package as a module dependency.

`bower install angular-latest --save`

* Examine changes to bower_components directory and bower.json