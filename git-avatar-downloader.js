//--right now it is going to
//-- https://api.github.com/repos/jquery/jquery/contributors

///////CONFIG
var GITHUB_USER = 'JellyGlow';
var GITHUB_TOKEN = 'e112a4496a7eac2274a57430e2579c01e9874e2c';

var request = require('request');
var fs = require('fs');

////////ROUTES
function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
   }
  };

  request(options, function(err, response, body) {
    if (err) {
      throw err;
    } else {
      // console.log(body);
      var contributors = JSON.parse(body);

      contributors.forEach( function (arrayItem) {
        var url = arrayItem["avatar_url"];
        console.log(url);
      });

      //you iterate over objects in an array by using for... in

    //in node, it's the body, this, that is printed.

    ///OOOOOKAAAAAYYYY
    //iterate over the objects in the array one at a time
    //for every object, dive innnttooo iiiittttt and go get
    }
    });

}
//     HERE.
//theoretically, I should then be able to go through those keys to find AVATAR_URL from the object CONTRIBUTORS

//this will look something like contributors["avatar_url"]

////////LAUNCH
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});




//you want to traverse -body-
//is body the same thing as the "contributors" object yet?

//using request package,
//fetch list of contributors as
//a JSON string from GitHub's API
//contributors endpoint

//callback function with the results
//loop and print out the avatar_url
//for each object in collection.

//personal access token is e112a4496a7eac2274a57430e2579c01e9874e2c
