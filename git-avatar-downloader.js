function getRepoContributors(repoOwner, repoName, cb) {
  // ...
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