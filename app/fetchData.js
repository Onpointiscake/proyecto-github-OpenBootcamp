import fetch from 'cross-fetch';

// Change this to a user you´d like to fetch data from:
const RANDOM_USER = "onpointiscake"

//1. Fetch Repositories
fetch(`//api.github.com/users/${RANDOM_USER}/repos`)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(repo => {
    console.log(repo);
  })
  .catch(err => {
    console.error(err);
  });

