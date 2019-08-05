import Auth from './auth';
let auth = new Auth();

class API {
  constructor() {
    this.baseURL = 'http://api2.castles.com.ng/api';
    this.header = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    this.token = localStorage.getItem("_token") ? localStorage.getItem('_token') : "";
  }

  login = (body) => {
    fetch(`${this.baseURL}/login`, {
      headers: this.header,
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
     return  auth._storeAuthCred(res);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  }



}

export default API;