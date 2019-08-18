import { GET_ALERTS } from "../actions/types";

const INITIAL_STATE = {
  profile: {},
  alerts: {
    data: [],
    requestType: null,
    first_page_url: '', 
    last_page_url: '', 
    last_page: 1, 
    current_page: 1, 
    to: '', 
    from: '', 
    total: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_ALERTS:
      return {
        ...state,
        alerts: action.payload
      }
    default:
      return state
  }
}