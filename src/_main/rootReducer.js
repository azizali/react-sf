import { compobineReducers, combineReducers } from 'redux';

import { reducer as userProfile } from '../UserProfile';
import { reducer as weather } from '../Weather';

const rootReducer = combineReducers({
  userProfile,
  weather
});

export default rootReducer;