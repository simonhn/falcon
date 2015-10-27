Falcon LinkedIn Demo
==========
A sample app that displays a social login using Linkedin, extracts the user profile data, displays it and supports export as CSV.

[View demo](https://falcon-linkedin.herokuapp.com/)

![Screenshot](https://falcon-linkedin.herokuapp.com/img/screen.png)
## Run
Clone the repo `git@github.com:simonhn/falcon.git`

Run a local webserver `php -S localhost:8000`

## Structure
A simple web app consisting of a main page that presents the login button and the profile after the user has authenticated.

App.js handles the main logic of fetching and displaying the profile info.

The csv.php file is used a tiny api for recieving and exporting the data passed from the frontend.

CSS is written in SCSS and converted using [Gulp](http://gulpjs.com/). [Moustache](https://mustache.github.io/) is used as the template language.