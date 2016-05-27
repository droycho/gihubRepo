var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userRepo').click(function() {
    var gitUser = $('#userName').val();
    $('#userName').val("");
    $.get('https://api.github.com/users/' + gitUser + '/repos?access_token=' + apiKey)
    .then(function(response) {
      debugger;
      $('.showRepo').append("Here is " + gitUser + "'s public repositories: " + response[0].name + " " + response[0].description);
    })
    .fail(function(error) {
      $('.showRepo').text(error.responseJSON.message);
    });
  });
});
