var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userRepo').click(function() {
    var city = $('#userName').val();
    $('#userName').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      $('.showRepo').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error) {
      $('.showRepo').text(error.responseJSON.message);
    });
  });
});
