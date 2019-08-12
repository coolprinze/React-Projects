import { REG_SUCCESS, AUTH_SUCCESS, GET_USER, LOGOUT_USER, AUTH_LOADING } from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: localStorage.getItem("token") !== null,
  redirect: false,
  user: JSON.parse(localStorage.getItem("user")),
  token: '',
  loading: false
}

console.log(INITIAL_STATE);

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REG_SUCCESS:
      return {
        ...state,
        loading: false,
        redirect: true        
      }

    case AUTH_SUCCESS:
      localStorage.setItem("token", action.payload.access.access_token);
      localStorage.setItem("tokenExpires", action.payload.access.expires_at);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        loading: false, 
        isAuthenticated: true, 
        token: action.payload.access.access_token,
        user: action.payload.user
      }

    case GET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        user: action.payload        
      }

    case LOGOUT_USER:
      return {  
        loading: false,
        isAuthenticated: false,
        redirect: false,
        user: null,
        token: ''      
      }

    case AUTH_LOADING:
      return {  
        ...state,
        loading: true     
      }

    default:
      return state
  }
}

