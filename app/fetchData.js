import fetch from 'cross-fetch';

// Change this to a user you´d like to fetch data from:
const RANDOM_USER = "onpointiscake"
// Create empty object to fill data of the response:
let repositories = {}

//0. Fetch Repositories
await fetch(`https://api.github.com/users/${RANDOM_USER}/repos`)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(repo => {
    repositories = repo
  })
  .catch(err => {
    console.error(err);
  });

// [Working] Task 1.
function getRepos (data) {
  for (const key in data) {
      console.log(`Repository: ${data[key].name}`);
  }    
}

// Task 2.
/*
function getCommits (repositoryData) {
  for (const key in repositoryData) {
       let emptyObjectWithCommits = {}
        fetch(`https://api.github.com/repos/Onpointiscake/${repositoryData[key].name}/commits`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(repo => {
        console.log(repo)
         emptyObjectWithCommits = repo
      })
      .catch(err => {
        console.error(err);
      });
    //console.log(`Repository: ${repositoryData[key].name}, commits: ${emptyObjectWithCommits.commit}`)
  }
}*/

// Print repos:
console.log(getRepos(repositories))
// Print commits of each repo:
//console.log(getCommits(repositories))

  //commits_url: 'https://api.github.com/repos/Onpointiscake/BestJob-client/commits