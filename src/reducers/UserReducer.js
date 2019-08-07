const INITIAL_STATE = {
  profile: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "EDIT_PROFILE":
      return 'Editing profile'
    default:
      return state
  }
}