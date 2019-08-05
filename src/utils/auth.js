import { setGlobal, getGlobal } from 'reactn';

class Auth {

  /*
    Call this function to log out
    Pass in navigation history to redirect
  */
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('_token');
    localStorage.removeItem('_expires_at');
    setGlobal({ loggedIn: false });
    // navigate to the home route
    window.location.replace('/login');
  }

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem("_expires_at"));
    return new Date().getTime() < expiresAt;
  }

  _storeAuthCred = async (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = new Date(authResult.expires_at).getTime();
    await localStorage.setItem('_token', authResult.access_token);
    await localStorage.setItem('_expires_at', expiresAt);
    setGlobal({ loggedIn: this.isAuthenticated() });
  }


}

export default Auth;
