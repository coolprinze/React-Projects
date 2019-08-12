import axios from "axios";
import { GET_ADVICE_CATEGORIES, GET_ADVICE_CATEGORY, GET_ADVICE } from "./types";
import config from "../config";
import { createMsg } from "./UtitlityActions";


// Get Advice Categories
export const getAdviceCategories = () => async dispatch => {
  await axios.get(`${config.BASE_URL}/property_advise`, config.header)
    .then(res => {
      dispatch({
        type: GET_ADVICE_CATEGORIES,
        payload: res.data.data
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

// Get Advice Categories
export const getArticlesCategory = (slug) => async dispatch => {
  await axios.get(`${config.BASE_URL}/articles/${slug}`, config.header)
    .then(res => {
      dispatch({
        type: GET_ADVICE_CATEGORY,
        payload: res.data.data
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

// Get Advice Categories
export const getAllArticles = () => async dispatch => {
  await axios.get(`${config.BASE_URL}/articles`, config.header)
    .then(res => {
      dispatch({
        type: GET_ADVICE_CATEGORY,
        payload: res.data.data
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

// Get Advice
export const getAdvice = (advice) => async dispatch => {
  await axios.get(`${config.BASE_URL}/article/${advice}`, config.header)
    .then(res => {
      dispatch({
        type: GET_ADVICE,
        payload: res.data.data
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