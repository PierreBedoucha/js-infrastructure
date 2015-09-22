# JsInfrastructure
This session will cover some of the basic tools used in Javascript infrastructure, such as npm, bower and grunt/gulp.
Start with downloading this git repository. Each of the tasks should be completed within their folder in repository. 
The readme.md file in each of these folders contains the exercises to complete the task. 
It is recommended to use a text editor which formats javascript, html and css, which handles the scss format and which contains a directory browser, like Sublime, Atom or WebStorm.

* Task 1 will introduce the npm package manager
* Task 2 will introduce the bower package manager
* Task 3 will introduce grunt and show how to use grunt to automate tasks
* Task 4 will introduce gulp and show how to use gulp to automate tasks

Bonus tasks if done early or you wish to continue at home:
* Continue on either the grunt or gulp task, whichever you preferred
* These tasks may be quite advanced, and may require spending time understanding concepts not covered by this session. Feel free to email any of the organizers if you need hints on completing these tasks!
* Add static code analysis to your application using JSHint, and run as part of your grunt/gulp process
* Enable live reload of the browser page when one of the source files change. Remember that all previous tasks must rerun to show desired result in the reloaded browser
* Add a jasmine unit test to verify the recalculate function. Hint: you might need to refactor the function to make it testable! Parameters is easier to control than the state of what JQuery picks up from the DOM
* Use Karma to run unit tests in PhantomJS browser, and run as part of your grunt/gulp process
* Add Istanbul to Karma for code coverage and run unit tests on both PhantomJS and Chrome browsers
* Use bower to get angular and lodash. Develop an angular application working on collections, and use lodash to manipulate collections