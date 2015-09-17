# Bower Install
Bower is a package manager on the node platform, providing libraries for JavaScript developers.
Bower is commonly used in JavaScript projects to manage dependencies and sharing reusable code.

## Install packages from bower.json
Run the command:

`bower install`

* Open bower.json and examine the dependencies json object.
* Open the current directory and examine the content of the bower_components folder.
* Compare the bower.json content, directory bower_components content to the console output from bower.
* Open the various packages in bower_components and examine their bower.json, investigate how dependencies are loaded.

## Add a new package
Add the --save flag to save a package as a module dependency.

`bower install angular-latest --save`

* Examine changes to bower_components directory and bower.json