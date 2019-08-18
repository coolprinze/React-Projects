import axios from 'axios';
import { GET_COUNTRIES, GET_STATES, GET_LOCALITIES, CREATE_MESSAGE, GET_ERRORS, RESET, SEARCH_DB, LOAD_PAGE, GET_ADVERTS, GET_ADVERT_PROPERTIES, POST_COMMENT } from './types';
import config from '../config';
import Axios from 'axios';

// Get Countries
export const getCountries = () => async dispatch => {  
  await axios.get(`${config.BASE_URL}/countries`)
  .then(res =>  {
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data.data
    })
  })
  .catch(err => {
    if(err.response === undefined){
      dispatch(createMsg("Something went wrong, kindly check your internet connection", false))
      getCountries();
      return
    }
    dispatch(createMsg({ request_failed: err }, false))    
  }); 
}

// Get States
export const getStates = () => async dispatch => {  
  await axios.get(`${config.BASE_URL}/states`)
  .then(res =>  {
    dispatch({
      type: GET_STATES,
      payload: res.data.data
    })
  })
  .catch(err => {
    if(err.response === undefined){
      dispatch(createMsg("Something went wrong, kindly check your internet connection", false))
      getStates()
      return
    }
    dispatch(createMsg({ request_failed: err }, false))    
  }); 
}

// Get Cities
export const getLocalities = (id) => async dispatch => {
  await axios.get(`${config.BASE_URL}/localities/${id}`)
    .then(res =>{
      dispatch({
        type: GET_LOCALITIES,
        payload: res.data.data
      })
    })
    .catch(async err => {
      if(err.response === undefined){
        await dispatch(createMsg("Something went wrong, kindly check your internet connection", false))
        await getCountries()
        return
      }
      await dispatch(createMsg({ request_failed: err }, false))    
    }); 
}

// CREATE MESSAGE
export const createMsg = (msg, type = true) => ({
  type: CREATE_MESSAGE,
  payload: {msg, type}
})

// Error Handler
export const errorHandler = (err, dispatch) => {
  
  const errors = {
    msg: err
  }
  dispatch({
    type: GET_ERRORS,
    payload: errors
  });
  return false
}

// Send Message
export const sendMessage = (data) => async dispatch => {
  await axios.post(`${config.BASE_URL}/send_email`, data, config.header)
    .then(res => {
      dispatch(createMsg(res.data.message))
      dispatch({
        type: RESET,
      })
    })
    .catch(err => dispatch(createMsg( `Request failed due to ${err.response.statusText}, Please Try Again Later`, false)));
}

// Subscribe to newsletter
export const subscribe = (email) => async dispatch => {
  await axios.post(`${config.BASE_URL}/subscribe`, email)
    .then(res => {
      dispatch(createMsg(res.data.message))
      dispatch({
        type: RESET,
      })
    })
    .catch(err => dispatch(createMsg( err.response.data.errors.email[0], false)));
}


// Search Db
export const searchDb = params => async dispatch => {
  
  axios.get(`${config.BASE_URL}/properties/filter?search=${params}`, config.header)
    .then(res => {
      dispatch({
        type: SEARCH_DB,
        payload: res.data.data
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

export const loadPage = (type = LOAD_PAGE) => async  dispatch => await dispatch({
  type
})

// List Adverts properties
export const getAdverts = ()=> async dispatch => {
  Axios.get(`${config.BASE_URL}/adverts`)
    .then(res => {
      dispatch({
        type: GET_ADVERTS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch(createMsg(err.response.message, false));
    })
}

// List Adverts properties
export const getAdvertProperties = (id)=> async dispatch => {
  Axios.get(`${config.BASE_URL}/adverts/${id}`)
    .then(res => {
      dispatch({
        type: GET_ADVERT_PROPERTIES,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch(createMsg(err.response.message, false));
    })
}

// List Adverts properties
export const postComment = comment => async dispatch => {
  await Axios.post(`${config.BASE_URL}/article/comment`, comment, config.header)
    .then(res => {
      dispatch({
        type: POST_COMMENT
      })
      dispatch(createMsg("Comment Posted"));
    })
    .catch(err => {
      dispatch(createMsg(err.response.message, false));
    })
}
