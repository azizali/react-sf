import React from 'react';
import {connect} from 'react-redux';

function Weather ({ temperature, setTemperature }){
  return(
    <div>
      Temperature: {temperature}
      <button onClick={()=>setTemperature(temperature+1)}>+</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    temperature: state.temperature
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setTemperature: (temperature)=>{
      dispatch({
        type: 'SET_TEMPERATURE',
        payload: temperature
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)