import Axios from "axios";
import config from "../config";
import { GET_USER, GET_ALERTS } from "./types";
import { createMsg } from "./UtitlityActions";




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

export const getAlerts = () => async dispatch => {
  await Axios.get(`${config.BASE_URL}/alerts`, config.header)
    .then(res => {
      dispatch({
        type: GET_ALERTS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch(createMsg(err.response.message));
    })
}