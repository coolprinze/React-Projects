import { GET_PROPERTIES, GET_PROPERTY, RESET, DELETE_PROPERTY, GET_PROPERTY_CATEGORIES, GET_PROPERTY_TYPES, UPDATE_CITY_ID } from "../actions/types";

const INITIAL_STATE = {
  property: {
    agent: {},
    pictures: []
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
  loading: true,
  cityId: '' 
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_PROPERTIES:
      return {
        ...state,
        listings: {
          ...state.listings,
          ...action.payload.data,
          requestType: action.payload.type
        }
      }
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload
      }
    case GET_PROPERTY_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_PROPERTY_TYPES:
      return {
        ...state,
        types: action.payload
      }
    case DELETE_PROPERTY:
      return {
        ...state,
        listings: {
          ...state.listings,
          data: state.listings.data.filter(property => property.id !== action.payload)
        }
      }

    case UPDATE_CITY_ID:
      return{
        ...state,
        cityId: action.payload
      }

    case RESET:
      return {
        ...state,
        status: true
      }
    default:
      return state
  }
}