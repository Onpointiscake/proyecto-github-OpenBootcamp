import fetch from 'cross-fetch';

// Change this to a user you´d like to fetch data from:
const RANDOM_USER = "onpointiscake"

//Fetch Repositories
let repositories = {}
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

//Task 1.
function getRepos (data) {
  for (const key in data) {
      console.log(`Repository: ${data[key].name}`);
  }    
}
// Task 2.
async function getCommits(data) {
  for (const key in data ) {
    const response = await fetch(`https://api.github.com/repos/Onpointiscake/${data[key].name}/commits`)
    todo = await response.json()
  }
}

// Print the repositories:
console.log(getRepos(repositories))
//Print the commits of repositories:
console.log(getCommits(repositories))
