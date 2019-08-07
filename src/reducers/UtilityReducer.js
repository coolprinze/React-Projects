import { GET_COUNTRIES, GET_STATES, CREATE_MESSAGE, GET_ERRORS, RESET, GET_LOCALITIES } from "../actions/types";

const INITIAL_STATE = {
  pageLoading: false,
  countries: [],
  states: [],
  localities: [],
  errors: { msg: {}, status: null },
  messages: {},
  reset: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type){
    case GET_COUNTRIES:
      return { ...state, countries: action.payload }
    case GET_STATES:
      return { ...state, states: action.payload }
    case GET_LOCALITIES:
      return { ...state, localities: action.payload }
    case CREATE_MESSAGE:
      return {...state, messages: action.payload}
    case GET_ERRORS:
      return { 
        ...state,
        errors: {
          msg: action.payload.msg
        }
      }
    case RESET:
      return { ...state, reset: true }

    default:
      return state
  }
}