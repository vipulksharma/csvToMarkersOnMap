import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
//import Loader from './components/loader';
//
//
//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<Loader />, div);
//});
import user from './reducers/user';
const initialState = [''];
const action = {
  type:"INDIVIDUAL_USER_DATA_RECIEVED",
  userData: {
    "login": "pjhyett",
    "id": 3,
    "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pjhyett",
    "html_url": "https://github.com/pjhyett",
    "followers_url": "https://api.github.com/users/pjhyett/followers",
    "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
    "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
    "organizations_url": "https://api.github.com/users/pjhyett/orgs",
    "repos_url": "https://api.github.com/users/pjhyett/repos",
    "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pjhyett/received_events",
    "type": "User",
    "site_admin": false,
    "name": "PJ Hyett",
    "company": "GitHub, Inc.",
    "blog": "https://hyett.com",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 8,
    "public_gists": 21,
    "followers": 8185,
    "following": 30,
    "created_at": "2008-01-07T17:54:22Z",
    "updated_at": "2017-07-16T09:17:21Z"
  }
};
const nextState = user(initialState, action);
console.log(nextState);
expect(nextState.userData).to.equal({
  "login": "pjhyett",
  "id": 3,
  "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pjhyett",
  "html_url": "https://github.com/pjhyett",
  "followers_url": "https://api.github.com/users/pjhyett/followers",
  "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
  "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
  "organizations_url": "https://api.github.com/users/pjhyett/orgs",
  "repos_url": "https://api.github.com/users/pjhyett/repos",
  "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pjhyett/received_events",
  "type": "User",
  "site_admin": false,
  "name": "PJ Hyett",
  "company": "GitHub, Inc.",
  "blog": "https://hyett.com",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 8,
  "public_gists": 21,
  "followers": 8185,
  "following": 30,
  "created_at": "2008-01-07T17:54:22Z",
  "updated_at": "2017-07-16T09:17:21Z"
});