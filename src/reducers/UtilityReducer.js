import { GET_COUNTRIES, GET_STATES, CREATE_MESSAGE, GET_ERRORS, RESET, GET_LOCALITIES, EDIT_EMAIL, SEARCH_DB, UPDATE_SEARCH_PARAM, LOAD_PAGE } from "../actions/types";

const INITIAL_STATE = {
  pageLoading: true,
  countries: [],
  states: [],
  localities: [],
  errors: { msg: {}, status: null },
  messages: {},
  reset: false,
  email: '',
  searchResult: [],
  searchedParam: '',
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type){
    case GET_COUNTRIES:
      return { ...state, loading: false, countries: action.payload }

    case GET_STATES:
      return { ...state, loading: false, states: action.payload }

    case GET_LOCALITIES:
      return { ...state, loading: false, localities: action.payload }

    case CREATE_MESSAGE:
      return {...state, loading: false, messages: action.payload}

    case GET_ERRORS:
      return { 

        ...state, loading: false,
        errors: {
          msg: action.payload.msg
        }
      }
    case RESET:
      return { ...state, loading: false, reset: true }
      
    case EDIT_EMAIL:
      return { ...state, loading: false, email: action.payload }

    case UPDATE_SEARCH_PARAM:
      return { ...state, loading: false, searchedParam: action.payload }

    case SEARCH_DB:
      return { ...state, loading: false, searchResult: action.payload }

    case LOAD_PAGE:
      return { ...state, loading: false, pageLoading: false }


    default:
      return state
  }
}