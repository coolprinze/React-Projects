import axios from 'axios';
import config from '../config';
import { createMsg, errorHandler } from './UtitlityActions';
import { GET_PROPERTY, GET_PROPERTIES, GET_PROPERTY_CATEGORIES, GET_PROPERTY_TYPES } from './types';



// Get A Property
export const getProperty = slug => async dispatch => {
  await axios.get(`${config.BASE_URL}/property/${slug}`)
    .then(res => {
      dispatch({
        type: GET_PROPERTY,
        payload: res.data.data
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

// Agent Get A Property
export const getProperties = (type = null) => async dispatch => {
  await axios.get(`${config.BASE_URL}/properties`, config.header)
    .then(res => {
      dispatch({
        type: GET_PROPERTIES,
        payload: { data:res.data.data, type }
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg({ request_failed: err }, false))
    })
}

// Search Property
export const searchProperties = (params, type = GET_PROPERTIES) => async dispatch => {
  
  const url = await new URL(`${config.BASE_URL}/search`);
  await Object.keys(params).forEach(key=> url.searchParams.append(key,params[key]));

  await axios.get(url.href, config.header)
    .then(res => {
      dispatch({
        type,
        payload: { data:res.data.data, type: 'search' }
      })
    })
    .catch(err => {
      if(err.response === undefined){

        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg(err.response.statusText, false))
    })

}

// Get Property Categories
export const getPropertyCategories = () => async dispatch => await axios
  .get(`${config.BASE_URL}/property_statuses`, config.header)
  .then(res => dispatch({
    type: GET_PROPERTY_CATEGORIES,
    payload: res.data.data
  }) )
  .catch(err => {
    if(err.response === undefined){

      dispatch(createMsg("You are not connected to the internet, check your network", false))
      return
    }
    dispatch(createMsg(err.response.statusText, false))    
  })


// Get Property Types
export const getPropertyTypes = () => async dispatch => await axios
  .get(`${config.BASE_URL}/property_types`, config.header)
  .then(res => dispatch({
    type: GET_PROPERTY_TYPES,
    payload: res.data.data
  }) )
  .catch(err => {
    if(err.response === undefined){

      dispatch(createMsg("You are not connected to the internet, check your network", false))
      return
    }
    dispatch(createMsg(err.response.statusText, false))    
  })  

// Get Saved Properties
export const getSavedProperties = (type = null) => async dispatch => {
  await axios.get(`${config.BASE_URL}/saved_properties`, {
    headers: {
      ...config.header.headers,   
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => {
      dispatch({
        type: GET_PROPERTIES,
        payload: { data:res.data.data, type }
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg({ request_failed: err }, false))
    })
}

// Get Agent Properties
export const getAgentListing = (agent) => async dispatch => {
  await axios.get(`${config.BASE_URL}/properties/${agent}`, config.header)
    .then(res => {
      dispatch({
        type: GET_PROPERTIES,
        payload: { data:res.data.data, type: 'agent' }
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

// Save Property
export const saveAProperty = property => async dispatch => {
  await axios.post(`${config.BASE_URL}/save_property`, property, config.header)
    .then(res => {      
      dispatch(createMsg(`Property ${res.data.message}`))
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg(err.response.message, false))
    })
}


// Agent Get A Property
export const getPaginatePage = (url, type = null) => async dispatch => {
  await axios.get(url, config.header)
    .then(res => {
      dispatch({
        type,
        payload: type === GET_PROPERTIES? { data:res.data.data, type }: res.data.data
      })
    })
    .catch(err => {
      if(err.response === undefined){
        dispatch(createMsg("You are not connected to the internet, check your network", false))
        return
      }
      dispatch(createMsg({ request_failed: err }, false))
    })
}
