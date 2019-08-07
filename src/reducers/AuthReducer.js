import { REG_SUCCESS, AUTH_SUCCESS, GET_USER } from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: localStorage.getItem("token") !== null,
  redirect: false,
  user: JSON.parse(localStorage.getItem("user")),
  token: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REG_SUCCESS:
      return {
        ...state,
        redirect: true        
      }

    case AUTH_SUCCESS:
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("tokenExpires", action.payload.expires_at);
      return {
        ...state, 
        isAuthenticated: true, 
        token: action.payload.access_token
      }

    case GET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload        
      }

    default:
      return state
  }
}

