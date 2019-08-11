import { GET_COUNTRIES, GET_STATES, CREATE_MESSAGE, GET_ERRORS, RESET, GET_LOCALITIES, EDIT_EMAIL, SEARCH_DB, UPDATE_SEARCH_PARAM } from "../actions/types";

const INITIAL_STATE = {
  pageLoading: false,
  countries: [],
  states: [],
  localities: [],
  errors: { msg: {}, status: null },
  messages: {},
  reset: false,
  email: '',
  searchResult: [],
  searchedParam: ''
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
      
    case EDIT_EMAIL:
      return { ...state, email: action.payload }

    case UPDATE_SEARCH_PARAM:
      return { ...state, searchedParam: action.payload }

    case SEARCH_DB:
      return { ...state, searchResult: action.payload }


    default:
      return state
  }
}