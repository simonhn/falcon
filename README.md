Falcon LinkedIn Demo
==========
A sample app that displays a social login using LinkedIn, extracts the user profile data, displays it and supports export as CSV.

[View demo](https://falcon-linkedin.herokuapp.com/)

![Screenshot](https://falcon-linkedin.herokuapp.com/img/screen.png)
## Run
Clone the repo `git@github.com:simonhn/falcon.git`

Run a local webserver `php -S localhost:8000` from the app directory

Load the site in your browser at `http://localhost:8000`

## Structure
A simple web app consisting of a main page that presents the login button and the profile after the user has authenticated. The auth part is handled by the [LinkedIn JavaScipt SDK](https://developer.linkedin.com/docs/js-sdk).

App.js handles the main logic of fetching and displaying the profile info.

The csv.php file is used as a tiny api for recieving and outputting the data passed from the frontend.

CSS is written in SCSS and converted using [Gulp](http://gulpjs.com/). [Moustache](https://mustache.github.io/) is used as the template language.