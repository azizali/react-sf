
const initial = {
  temperature: '32'
}

export default function(state = initial, { type, payload }){
  switch(type){
    case 'SET_TEMPERATURE':
      return {
        ...state,
        temperature: payload
      }
    default:
      return state;
  }
}
