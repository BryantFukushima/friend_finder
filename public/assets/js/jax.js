$.ajax({
    url: '/match',
    method: 'GET'
}).then(function(data) {
    var userInfo = data[data.length - 1];
    var user = $("<h2>");
    user.text(userInfo.user);
    $(".user-info").append(user);


var winner = 50;
var match;
    for (var i = 0; i < data.length - 1; i++) {
    	var compScore = 0;
        for (j in JSON.parse(data[i].scores)) {

            compScore = compScore + Math.abs(parseInt(JSON.parse(data[i].scores)[j]) - parseInt(JSON.parse(userInfo.scores)[j]));
        }

        if (compScore < winner) {
        	winner = compScore;
        	match = data[i].user;
        }

    }

    var matchUser = $('<h2>');
    matchUser.text(match);
    $('.match-info').append(matchUser);

});