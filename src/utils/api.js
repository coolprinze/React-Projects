import Auth from './auth';
import {setGlobal} from 'reactn'
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
    .then(async res => {
      await auth._storeAuthCred(res);
    return window.location.replace('/');
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  manageUser = async (id, endpoint) => {
    console.log(endpoint)
    await fetch(`${this.baseURL}/admin/users/${id}/${endpoint}`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'POST',
    })
    .then(res => res.json())
    .then(async res => {
      await this.getAgents();
      await this.getUsers();
      return res 
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  restoreUser = (id) => {
    fetch(`${this.baseURL}/admin/users/${id}/restore`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => res )
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  sendEmail = (body) => {
    fetch(`${this.baseURL}/send_email`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => res )
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  createUser = (body) => {
    fetch(`${this.baseURL}/admin/users/create`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => res )
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  approveDisapproveProperty = (body, endpoint) => {
    let url;
    if (!!endpoint) {
      url = 'disapprove'
    }
    else {
      url = 'approve'
    }
    fetch(`${this.baseURL}/admin/properties/${url}`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'POST',
      body
    })
    .then(res => res.json())
    .then( res => {
      console.log('res', res)
      return res;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  }

  getAgents = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/users?paginate=1000&role=2`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (!!res.data) {
        return {agents: res.data.data}
      }
      else {
        return {agents: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }

  getSubscribers = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/subscribers?paginate=1000`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (!!res.data) {
        return {subscribers: res.data.data}
      }
      else {
        return {subscribers: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }

  getProperties = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/properties?paginate=1000`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (!!res.data) {
        return {properties: res.data.data}
      }
      else {
        return {properties: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }

  getUsers = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/users?paginate=1000&role=1`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      console.log('user')
      if (!!res.data) {
        return {users: res.data.data}
      }
      else {
        return {users: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }

  getRequests = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/properties/requests?paginate=1000`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (!!res.data) {
        return {requests: res.data.data}
      }
      else {
        return {requests: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }

  getReports = async () => {
    await setGlobal(
   fetch(`${this.baseURL}/admin/properties/reports?paginate=1000`, {
      headers: {...this.header, Authorization: `Bearer ${this.token}`},
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (!!res.data) {
        return {reports: res.data.data}
      }
      else {
        return {reports: []}
      }

    })
    .catch(error => {
      console.log(error);
      throw error;
    })
    )
  }
}

export default API;