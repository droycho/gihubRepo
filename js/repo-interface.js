
var Repo = require('./../js/repo.js').Repo;

$(document).ready(function() {
  var currentRepoObject = new Repo();
  $('#userRepo').click(function() {
    var gitUser = $('#userName').val();
    $('#userName').val("");
    currentRepoObject.getRepo(gitUser);
  });
});
