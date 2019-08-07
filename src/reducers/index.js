import { combineReducers } from 'redux';
import PropertyReducer from './PropertyReducer';
import AgentReducer from './AgentReducer';
import UserReducer from './UserReducer';
import UtilityReducer from './UtilityReducer';
import AuthReducer from './AuthReducer';
import AdviceReducer from './AdviceReducer';

export default combineReducers({
  properties: PropertyReducer,
  agent: AgentReducer,
  user: UserReducer,
  utility: UtilityReducer,
  auth: AuthReducer,
  advice: AdviceReducer,
});