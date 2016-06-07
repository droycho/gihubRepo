var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
}

exports.Repo.prototype.getRepo = function(gitUser) {
  $.get('https://api.github.com/users/' + gitUser + '/repos?access_token=' + apiKey)
  .then(function(response) {
    $('.showGitHubName').append('<div> <p>Here is your user: ' + gitUser + '</p>');
    for(i = 0; i < response.length; i++) {
      $('.showGitHubName').append('<li>' + '<strong>' + response[i].name + '</strong>' + ": Created on: " + response[i].created_at + '</li>' + '<br>' + '<li>' + "Description: " + response[i].description + '</li>' + '<br>' + '<li>' + "Repository Link: " + response[i].svn_url + '</li>' + '<br>' + '<br>');
    }
    $('.showGitHubName').append('</div>');
  })
  .fail(function(error) {
    $('.showRepo').text(error.responseJSON.message);
  });
}
