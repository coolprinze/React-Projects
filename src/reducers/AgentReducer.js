import { GET_AGENTS } from "../actions/types";

const INITIAL_STATE = {
  agents: {
    data: [],
    requestType: null,
    first_page_url: '', 
    last_page_url: '', 
    to: '', 
    from: '', 
    total: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_AGENTS:
      return {
        agents: action.payload
      }
    default:
      return state
  }
}