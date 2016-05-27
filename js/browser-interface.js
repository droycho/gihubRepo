var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userRepo').click(function() {
    var gitUser = $('#userName').val();
    $('#userName').val("");
    $.get('https://api.github.com/users/' + gitUser + '/repos?access_token=' + apiKey)
    .then(function(response) {
      debugger;
      $('.showRepo').append("Here is " + gitUser + "'s public repositories: ");
      $('.showRepoName1').append(response[0].name + ": ");
        $('.showRepoDiscription1').append(response[0].description);
      $('.showRepoName2').append(response[1].name + ": ");
        $('.showRepoDiscription2').append(response[1].description);
      $('.showRepoName3').append(response[2].name + ": ");
        $('.showRepoDiscription3').append(response[2].description);
      $('.showRepoName4').append(response[3].name + ": ");
        $('.showRepoDiscription4').append(response[3].description);
      $('.showRepoName5').append(response[4].name + ": ");
        $('.showRepoDiscription5').append(response[4].description);
      $('.showRepoName6').append(response[5].name + ": ");
        $('.showRepoDiscription6').append(response[5].description);
      $('.showRepoName7').append(response[6].name + ": ");
        $('.showRepoDiscription7').append(response[6].description);
      $('.showRepoName8').append(response[7].name + ": ");
        $('.showRepoDiscription8').append(response[7].description);
      $('.showRepoName9').append(response[8].name + ": ");
        $('.showRepoDiscription9').append(response[8].description);
      $('.showRepoName10').append(response[9].name + ": ");
        $('.showRepoDiscription10').append(response[9].description);
      $('.showRepoName11').append(response[10].name + ": ");
        $('.showRepoDiscription11').append(response[10].description);
      $('.showRepoName12').append(response[11].name + ": ");
        $('.showRepoDiscription12').append(response[11].description);
      $('.showRepoName13').append(response[12].name + ": ");
        $('.showRepoDiscription13').append(response[12].description);
      $('.showRepoName14').append(response[13].name + ": ");
        $('.showRepoDiscription14').append(response[13].description);
      $('.showRepoName15').append(response[14].name + ": ");
        $('.showRepoDiscription15').append(response[14].description);
      $('.showRepoName16').append(response[15].name + ": ");
        $('.showRepoDiscription15').append(response[15].description);
      $('.showRepoName17').append(response[16].name + ": ");
        $('.showRepoDiscription17').append(response[16].description);
      $('.showRepoName18').append(response[17].name + ": ");
        $('.showRepoDiscription18').append(response[17].description);
      $('.showRepoName19').append(response[18].name + ": ");
        $('.showRepoDiscription19').append(response[18].description);
      $('.showRepoName20').append(response[19].name + ": ");
        $('.showRepoDiscription20').append(response[19].description);
      $('.showRepoName21').append(response[20].name + ": ");
        $('.showRepoDiscription21').append(response[20].description);
      $('.showRepoName22').append(response[21].name + ": ");
        $('.showRepoDiscription22').append(response[21].description);
      $('.showRepoName23').append(response[22].name + ": ");
        $('.showRepoDiscription23').append(response[22].description);
      $('.showRepoName24').append(response[23].name + ": ");
        $('.showRepoDiscription24').append(response[23].description);
      $('.showRepoName25').append(response[24].name + ": ");
        $('.showRepoDiscription25').append(response[24].description);
      $('.showRepoName26').append(response[25].name + ": ");
        $('.showRepoDiscription26').append(response[25].description);
      $('.showRepoName27').append(response[26].name + ": ");
        $('.showRepoDiscription27').append(response[26].description);
      $('.showRepoName28').append(response[27].name + ": ");
        $('.showRepoDiscription28').append(response[27].description);
      $('.showRepoName29').append(response[28].name + ": ");
        $('.showRepoDiscription29').append(response[28].description);
      $('.showRepoName30').append(response[29].name + ": ");
        $('.showRepoDiscription30').append(response[29].description);
    })
    .fail(function(error) {
      $('.showRepo').text(error.responseJSON.message);
    });
  });
});
