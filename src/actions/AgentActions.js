import axios from 'axios';
import config from '../config';
import { createMsg, errorHandler } from './UtitlityActions';
import { RESET, GET_PROPERTIES, DELETE_PROPERTY, GET_AGENTS } from './types';

// Get an Agent's Properties
export const saveProperty = property => async dispatch => {
  console.log(property);
  await axios.post(`${config.BASE_URL}/agent/properties/save`, property, config.header)
    .then(res => {
      console.log(res);
      dispatch(createMsg(res.data.message))
      dispatch({
        type: RESET,
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      errorHandler(err.response.data.errors, dispatch)
    })
}


// Agent Delete A Property
export const deleteProperty = id => async dispatch => {
  await axios.delete(`${config.BASE_URL}/agent/properties/delete/${id}`, config.header)
    .then(res => {
      dispatch(createMsg(`Property ${res.data.message}`));
      dispatch({
        type: DELETE_PROPERTY,
        payload: id
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("Something went wrong, kindly check your internet connection", false))
        return
      }
      dispatch(createMsg(err.response.message, false))
    })
}

// Agent Get A Property
export const getAgentProperties = () => async dispatch => {
  await axios.get(`${config.BASE_URL}/agent/properties`, config.header)
    .then(res => {
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg(err.response.message, false))
    })
}

// List agents
export const getAgents = () => async dispatch => {
  await axios.get(`${config.BASE_URL}/agents`, config.header)
    .then(res => {
      dispatch({
        type: GET_AGENTS,
        payload: res.data.data
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg(err.response.message, false))
    })
}
