import React from 'react';
import ReactDOM from 'react-dom';
import  { setGlobal} from 'reactn' 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import API from './utils/api';
let api = new API();


setGlobal({
  properties: [
    // {
    //   "id": 54500,
    //   "agent": {
    //     "id": 3500,
    //     "name": "Adam Matthew",
    //     "phone": null,
    //     "username": "example"
    //   },
    //   "title": "Lekki house centre update",
    //   "slug": "lekki-house-centre-update",
    //   "price": 4000000,
    //   "description": "Get All Files Within A Directory\nThe files method returns an array of all of the files in a given directory. If you would like to retrieve a list of a...",
    //   "status": "For Sale",
    //   "type": "Apartment",
    //   "featured": false,
    //   "label": "",
    //   "image": "",
    //   "bedrooms": 2,
    //   "bathrooms": 2,
    //   "toilets": null,
    //   "furnished": false,
    //   "serviced": false,
    //   "parking": 2,
    //   "total_area": 16,
    //   "country": "Nigeria",
    //   "locality": "Agege",
    //   "address": "inside inside",
    //   "views": 0,
    //   "published": false,
    //   "created_at": "18 hours ago"
    // },
    // {
    //   "id": 54500,
    //   "agent": {
    //     "id": 3500,
    //     "name": "Adam Matthew",
    //     "phone": null,
    //     "username": "example"
    //   },
    //   "title": "Lekki house centre update",
    //   "slug": "lekki-house-centre-update",
    //   "price": 6000000,
    //   "description": "Get All Files Within A Directory\nThe files method returns an array of all of the files in a given directory. If you would like to retrieve a list of a...",
    //   "status": "For Sale",
    //   "type": "Apartment",
    //   "featured": false,
    //   "label": "",
    //   "image": "",
    //   "bedrooms": 2,
    //   "bathrooms": 2,
    //   "toilets": null,
    //   "furnished": false,
    //   "serviced": false,
    //   "parking": 2,
    //   "total_area": 16,
    //   "country": "Nigeria",
    //   "locality": "Warri",
    //   "address": "inside inside",
    //   "views": 0,
    //   "published": true,
    //   "created_at": "18 hours ago"
    // }
  ],
  users: [
    // {
    //   "id": 3502,
    //   "name": "Admin Matthew",
    //   "username": "example21",
    //   "email": "example32@example.com",
    //   "image": "",
    //   "isVerified": true,
    //   "role": {
    //     "id": 3,
    //     "name": "Admin"
    //   },
    //   "address": null,
    //   "country": {
    //     "id": 160,
    //     "name": "Nigeria"
    //   },
    //   "state": {
    //     "id": null,
    //     "name": ""
    //   },
    //   "created_at": "2019-06-20 15:09:53",
    //   "updated_at": "2019-06-20 15:12:54",
    //   "verified_at": "2019-06-20 15:12:54",
    //   "suspended_at": false
    // },
    // {
    //   "id": 3500,
    //   "name": "Adam Matthew",
    //   "username": "example",
    //   "email": "example@example.com",
    //   "image": "",
    //   "isVerified": false,
    //   "role": {
    //     "id": 3,
    //     "name": "Admin"
    //   },
    //   "address": null,
    //   "country": {
    //     "id": 160,
    //     "name": "Nigeria"
    //   },
    //   "state": {
    //     "id": null,
    //     "name": ""
    //   },
    //   "created_at": "2019-06-20 12:08:23",
    //   "updated_at": "2019-06-20 12:08:23",
    //   "verified_at": false,
    //   "suspended_at": false
    // }
  ],
  reports: [
    // {
    //   "id": 2,
    //   "property": {
    //     "id": 54504,
    //     "title": "Lekki house centre update"
    //   },
    //   "report": "House is fake",
    //   "created_at": "7 minutes ago"
    // }
  ],
  requests: [
    // {
    //   "id": 2,
    //   "user": {
    //     "name": "Adam Matthew",
    //     "email": "example@example.com"
    //   },
    //   "comment": "This is an example of a comment",
    //   "budget": 100000,
    //   "type": "",
    //   "bedrooms": 2,
    //   "state": "Lagos",
    //   "locality": "Akute",
    //   "created_at": "5 seconds ago"
    // },
    // {
    //   "id": 1,
    //   "user": {
    //     "name": "Adam Matthew",
    //     "email": "example@example.com"
    //   },
    //   "comment": "This is an example of a comment",
    //   "budget": 100000,
    //   "type": "Huge complaints",
    //   "bedrooms": 2,
    //   "state": "Lagos",
    //   "locality": "Akute",
    //   "created_at": "10 minutes ago"
    // }
  ],
  // agents: [
  //   {
  //     "id": 3504,
  //     "name": "Ebuka Nwosu",
  //     "username": "cybertech",
  //     "email": "ebukanwosu45@gmail.co",
  //     "image": "",
  //     "isVerified": false,
  //     "role": {
  //       "id": 2,
  //       "name": "Estate Agent"
  //     },
  //     "address": null,
  //     "country": {
  //       "id": 160,
  //       "name": "Nigeria"
  //     },
  //     "state": {
  //       "id": null,
  //       "name": ""
  //     },
  //     "created_at": "2019-08-03 09:20:06",
  //     "updated_at": "2019-08-03 09:20:06",
  //     "verified_at": false,
  //     "suspended_at": false
  //   },
  //   {
  //     "id": 3503,
  //     "name": "Nwosu Ebuka",
  //     "username": "coolprinc",
  //     "email": "ebukanwosu45@gmail.com",
  //     "image": "",
  //     "isVerified": false,
  //     "role": {
  //       "id": 2,
  //       "name": "Estate Agent"
  //     },
  //     "address": "14b Oroleye Cr",
  //     "country": {
  //       "id": 160,
  //       "name": "Nigeria"
  //     },
  //     "state": {
  //       "id": 25,
  //       "name": "Lagos"
  //     },
  //     "created_at": "2019-08-03 07:44:23",
  //     "updated_at": "2019-08-04 13:09:13",
  //     "verified_at": false,
  //     "suspended_at": false
  //   },
  //   {
  //     "id": 3502,
  //     "name": "Ebuka Nwosu",
  //     "username": "coolprince",
  //     "email": "info@cybertechdigitals.com",
  //     "image": "",
  //     "isVerified": false,
  //     "role": {
  //       "id": 2,
  //       "name": "Estate Agent"
  //     },
  //     "address": null,
  //     "country": {
  //       "id": 160,
  //       "name": "Nigeria"
  //     },
  //     "state": {
  //       "id": null,
  //       "name": ""
  //     },
  //     "created_at": "2019-08-03 07:40:20",
  //     "updated_at": "2019-08-03 07:40:20",
  //     "verified_at": false,
  //     "suspended_at": false
  //   }
  // ]
agents: [],
subscribers: []
})

// api.getAgents();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
