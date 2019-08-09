import Axios from "axios";
import config from "../config";
import { AUTH_SUCCESS, REG_SUCCESS, GET_USER, LOGOUT_USER } from "./types";
import { createMsg, errorHandler } from "./UtitlityActions";

export const registerUser = (user) => async dispatch => {
  await Axios.post(`${config.BASE_URL}/registration`, user, config.header)
    .then(res => {
      dispatch(createMsg(`Registration successfull!! ${res.data.message}`));
      dispatch({
        type: REG_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 500){
        console.log(err.response)
        dispatch(createMsg(`Registration successfull!! Proceed to login`));
        dispatch({
          type: REG_SUCCESS
        });
      } else {
        errorHandler(err.response.data.errors, dispatch)
      }
    });
}

export const authenticateUser = (user) => async dispatch=> {
  await Axios.post(`${config.BASE_URL}/login`, user, config.header)
    .then(async res => {
      await Axios.get(`${config.BASE_URL}/user`, {
        headers: {
          ...config.header.headers,   
          'Authorization': `Bearer ${res.data.access_token}`
        }
      }).then(user => {

        dispatch(createMsg("Login succeccful!!!"))
        dispatch({
          type: AUTH_SUCCESS,
          payload: { access: res.data, user: user.data.data }
        })
      }).catch(err => {
        dispatch(createMsg(`Get User Failed: ${err.response}`, false))
      });  
    })
    .catch(err => {
      dispatch(createMsg(`Login Failed: ${err.response.data.message}`, false))
    });    
}

export const getUser = () => async dispatch => {
  await Axios.get(`${config.BASE_URL}/user`, {
    headers: {
      ...config.header.headers,   
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => {
      // dispatch(createMsg(`Welcome back ${res.data.data.name}`))
      dispatch({
        type: GET_USER,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch(createMsg(`Get User Failed: ${err.response}`, false))
    });    
}

export const logOut = () => async dispatch => {
  await localStorage.removeItem('user');
  await localStorage.removeItem('token');
  await localStorage.removeItem('tokenExpires');

  await dispatch(createMsg(`Thank you for your time with us`))
  await dispatch({
    type: LOGOUT_USER
  })
}