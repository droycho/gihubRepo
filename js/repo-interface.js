
var Repo = require('./../js/repo.js').Repo;

$(document).ready(function() {
  var currentRepoObject = new Repo();
  $('#userRepo').click(function() {
    var gitUser = $('#userName').val();
    $('#userName').val("");
    $('.showGitHubName').empty();
    currentRepoObject.getRepo(gitUser);
  });
});

//Not quite sure how to reset previously filled HTML data upon second submission. I believe a .reset() function would do it, but the resources i found didn't quite show how with API info.
