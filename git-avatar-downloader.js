var GITHUB_USER = 'JellyGlow';
var GITHUB_TOKEN = 'e112a4496a7eac2274a57430e2579c01e9874e2c';

var request = require('request');
var fs = require('fs');

//--CURRENT ERROR!!--
//listener argument must be a function

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};

  //make an HTTP request to it
  //using the request function
  request(options, function(err, response, body) {
    if (err) throw err;
    else console.log(body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

//using request package,
//fetch list of contributors as
//a JSON string from GitHub's API
//contributors endpoint

//callback function with the results
//loop and print out the avatar_url
//for each object in collection.

//personal access token is e112a4496a7eac2274a57430e2579c01e9874e2c
