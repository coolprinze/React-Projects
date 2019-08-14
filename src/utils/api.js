import Auth from './auth';
import { setGlobal } from 'reactn'
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

  login = async (body) => {
    return await fetch(`${this.baseURL}/login`, {
      headers: this.header,
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(async res => {
        if (!!res.access_token) {
          await auth._storeAuthCred(res);
          return true;
        }
        else {
          return false
        }
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }

  manageUser = async (id, endpoint) => {
    return await fetch(`${this.baseURL}/admin/users/${id}/${endpoint}`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
    })
      .then(res => res.json())
      .then(async res => {
        if (res.status == 1) {
          await this.getAgents();
          await this.getUsers();
          return true;
        }
        else {
          return false
        }
      })
      .catch(error => {
        console.log(error);
        // throw error;
        return false
      });
  }


  sendEmail = (body) => {
    fetch(`${this.baseURL}/send_email`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  createUser = (body) => {
    fetch(`${this.baseURL}/admin/users/create`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => res)
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  saveProperty = async (body) => {
    let url;
    await delete body.errors;
    await delete body.agent;
    await delete body.state;
    await delete body.locality;
    await delete body.tab
    console.log('body to be send', body);
    // if(body.id) {
      url = `${this.baseURL}/admin/properties/save`
    // }
    // else {
    //   url = `${this.baseURL}/admin/properties/save`
    // }
    return await fetch(url, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(async res => {
        if (res.status == 1) {
          await this.getProperties();
          return true
        }
        else {
          return false
        }
      })
      .catch(error => {
        console.log(error);
        // throw error;
        return false
      });
  }

  deleteProperty = async (id) => {
    return await fetch(`${this.baseURL}/admin/properties/destroy`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
      body: JSON.stringify({"id": [id]})
    })
      .then(res => res.json())
      .then(async res => {
        console.log('res', res)
        if (res.status == 1) {
          await this.getProperties();
          return true
        }
        else {
          return false
        }

      })
      .catch(error => {
        console.log(error);
        // throw error;
        return false
      });
  }

  approveDisapproveProperty = async (body, endpoint) => {
    return await fetch(`${this.baseURL}/admin/properties/${endpoint}`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(async res => {
        if (res.status == 1) {
          await this.getProperties();
          return true
        }
        else {
          return false
        }
      })
      .catch(error => {
        console.log(error);
        // throw error;
        return false
      });
  }

  getAgents = async () => {
    await setGlobal(
      fetch(`${this.baseURL}/admin/users?paginate=1000&role=2`, {
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { agents: res.data.data }
          }
          else {
            return { agents: [] }
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
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { subscribers: res.data.data }
          }
          else {
            return { subscribers: [] }
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
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { properties: res.data.data }
          }
          else {
            return { properties: [] }
          }

        })
        .catch(error => {
          console.log(error);
          throw error;
        })
    )
  }

  getProperty = async (slug) => {
    return await fetch(`${this.baseURL}/admin/properties/${slug}`, {
      headers: { ...this.header, Authorization: `Bearer ${this.token}` },
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        if (!!res.data) {
          return res.data
        }
        else {
          return null;
        }
      })
      .catch(error => {
        console.log(error);
        throw error;
      })
  }

  getUsers = async () => {
    await setGlobal(
      fetch(`${this.baseURL}/admin/users?paginate=1000&role=1`, {
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { users: res.data.data }
          }
          else {
            return { users: [] }
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
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { requests: res.data.data }
          }
          else {
            return { requests: [] }
          }

        })
        .catch(error => {
          console.log(error);
          throw error;
        })
    )
  }

  getCountries = async () => {
    return await setGlobal(
      fetch(`${this.baseURL}/countries`, {
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { countries: res.data }
          }
          else {
            return { countries: [] }
          }
        })
        .catch(error => {
          console.log(error);
          throw error;
        })
    )
  }

  getStates = async () => {
    return await setGlobal(
      fetch(`${this.baseURL}/states`, {
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { states: res.data }
          }
          else {
            return { states: [] }
          }

        })
        .catch(error => {
          console.log(error);
          throw error;
        })
    )
  }

  getLocalities = async (id) => {
    return await setGlobal(
      fetch(`${this.baseURL}/localities/${id}`, {
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (!!res.data) {
            return { localities: res.data }
          }
          else {
            return { localities: [] }
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
        headers: { ...this.header, Authorization: `Bearer ${this.token}` },
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          if (!!res.data) {
            return { reports: res.data.data }
          }
          else {
            return { reports: [] }
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