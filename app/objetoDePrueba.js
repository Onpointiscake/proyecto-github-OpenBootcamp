import fetch from 'cross-fetch'

let repositories = {}

//0. Fetch Repositories
await fetch(`https://api.github.com/repos/Onpointiscake/BestJob-client/commits`)
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

  console.log(repositories)