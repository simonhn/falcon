/* Create namespace to avoid polluting global */
var falcon = {

  /* Setup an event listener to make an API call once auth is complete */
  onLinkedInLoad: function () {
    IN.Event.on(IN, "auth", falcon.getProfileData);
  },

  /* Handle the successful return from the API call */
  onSuccess: function (profiles) {
    var person = profiles.values[0];
    var profileDiv = document.getElementById('profile');

    /* Pass data to template and render */
    var template = document.getElementById('template').innerHTML;
    Mustache.parse(template);
    var rendered = Mustache.render(template, person);

    /* Insert renderet content into profile div */
    profileDiv.innerHTML = rendered;

    /* Fade in the profile */
    profileDiv.classList.add('show');
    profileDiv.classList.remove('hide');

  },

  /* Handle an error response from the API call */
  onError: function (error) {
    document.getElementById('profile').textContent = 'Error authenticating';
  },

  /* Call relevant functions once profile is fetched */
  getProfileData: function () {
    IN.API.Profile("me")
      .result(falcon.onSuccess)
      .error(falcon.onError);
  }
};