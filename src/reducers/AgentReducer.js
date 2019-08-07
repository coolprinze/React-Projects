const INITIAL_STATE = {
  agent: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "ADD_AGENT":
      return 'Agen Added'
    default:
      return state
  }
}