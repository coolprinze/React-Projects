import { GET_COUNTRIES, GET_STATES, CREATE_MESSAGE, GET_ERRORS, RESET, GET_LOCALITIES, EDIT_EMAIL, SEARCH_DB, UPDATE_SEARCH_PARAM, LOAD_PAGE, GET_ADVERTS, GET_ADVERT_PROPERTIES, GET_SCHOOLS, GET_APARTMENTS, GET_LANDS, GET_HOUSES, UPDATE_SEARCH_TERM, UNLOAD_PAGE } from "../actions/types";

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
  searchedParam: {
    bedrooms: '',
    state_id: '',
    locality_id: '',
    status_id: '',
    type_id: '',
    min_price: '',
    max_price: '',
  },
  loading: true,
  adverts: {
    data: [],    
  },
  advertProperties: {
    properties: []
  },
  explore: {
    schools: 0,
    lands: 0,
    apartments: 0,
    houses: 0,
  },
  searchTerm: '' 
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
      return { ...state, searchedParam: {
        ...state.searchedParam,
        ...action.payload
      } }

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }

    case SEARCH_DB:
      return { ...state, searchResult: action.payload }

    case LOAD_PAGE:
      return { ...state, loading: false, pageLoading: false }

    case UNLOAD_PAGE:
      return { ...state, loading: true, pageLoading: true }

    case GET_ADVERTS:
      return {
        ...state,
        adverts: action.payload        
      }

    case GET_ADVERT_PROPERTIES:
      return {
        ...state,
        advertProperties: action.payload        
      }

    case GET_SCHOOLS:
      return {
        ...state,
        explore: {
          ...state.explore,
          schools: action.payload.data.total,       
        }
      }

    case GET_APARTMENTS:
      return {
        ...state,
        explore: {
          ...state.explore,
          apartments: action.payload.data.total,       
        }
      }

    case GET_LANDS:
      return {
        ...state,
        explore: {
          ...state.explore,
          lands: action.payload.data.total,       
        }
      }

    case GET_HOUSES:
      return {
        ...state,
        explore: {
          ...state.explore,
          houses: action.payload.data.total,       
        }
      }


    default:
      return state
  }
}