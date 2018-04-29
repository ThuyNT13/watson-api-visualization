var express = require('express');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/", function (request, response) {

  var personality_insights = new PersonalityInsightsV3({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    version_date: process.env.WATSON_VERSION,
    headers: {
      'X-Watson-Learning-Opt-Out': 'true'
    }
  });

  var params = {
    // Get the content from data submitted by the user
    content: require('./profile.txt'), // Fix this line next
    content_type: 'text/plain',
    consumption_preferences: true,
    raw_scores: true
  };

  personality_insights.profile(params, function(error, response) {
    if (error)
      console.log('Error:', error);
    else
      console.log(JSON.stringify(response, null, 2));
    }
  );

  // response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
