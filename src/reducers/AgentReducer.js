import { GET_AGENTS, AGENT_LOADING, LOAD_PAGE, UNLOAD_PAGE } from "../actions/types";

const INITIAL_STATE = {
  agents: {
    data: [],
    requestType: null,
    first_page_url: '', 
    last_page_url: '', 
    last_page: 1, 
    current_page: 1, 
    to: '', 
    from: '', 
    total: ''
  },
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_AGENTS:
      return {
        agents: action.payload
      }

    case LOAD_PAGE:
      return {
        ...state,
        loading: false
      }
      
    case UNLOAD_PAGE:
        return { ...state, loading: true, pageLoading: true }
  
    default:
      return state
  }
}