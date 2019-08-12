import { GET_PROPERTIES, GET_PROPERTY, RESET, DELETE_PROPERTY, GET_PROPERTY_CATEGORIES, GET_PROPERTY_TYPES } from "../actions/types";

const INITIAL_STATE = {
  property: {
    agent: {}
  },
  listings: {
    data: [],
    requestType: null,
    first_page_url: '', 
    last_page_url: '', 
    to: '', 
    from: '', 
    total: ''
  },
  status: false,
  categories: [],
  types: [],
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_PROPERTIES:
      return {
        ...state,
        loading: false,
        listings: {
          ...state.listings,
          ...action.payload.data,
          requestType: action.payload.type
        }
      }
    case GET_PROPERTY:
      return {
        ...state,
        loading: false,
        property: action.payload
      }
    case GET_PROPERTY_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    case GET_PROPERTY_TYPES:
      return {
        ...state,
        loading: false,
        types: action.payload
      }
    case DELETE_PROPERTY:
      return {
        ...state,
        loading: false,
        listings: {
          ...state.listings,
          data: state.listings.data.filter(property => property.id !== action.payload)
        }
      }
    case RESET:
      return {
        ...state,
        loading: false,
        status: true
      }
    default:
      return state
  }
}