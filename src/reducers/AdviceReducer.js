import { GET_ADVICE_CATEGORIES, GET_ADVICE_CATEGORY, GET_ADVICE } from "../actions/types";


const INITIAL_STATE = {
  categories: [],
  category: {
    data: [],
    requestType: null,
    first_page_url: '', 
    last_page_url: '', 
    to: '', 
    from: '', 
    total: ''
  },
  article: {
    comments: []
  },
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_ADVICE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_ADVICE_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case GET_ADVICE:
      return {
        ...state,
        article: action.payload
      }
    
    default:
      return state;
  }
}