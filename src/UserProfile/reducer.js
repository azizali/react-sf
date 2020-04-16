import { SET_NAME, SET_AGE } from '../_main/ACTION_CONSTANTS'
const initial = {
  name: 'Hello name',
  age: null,
}

export default function(state = initial, action){
  if(action.type === SET_NAME){
    return {
      ...state,
      name: action.payload
    }
  }
  if(action.type === SET_AGE){
    return {
      ...state,
      age: action.payload
    }
  }
  return state
}

// SAMPLE ACTION
// {
//   type: "SET_NAME",
//   payload: "SF"
// }