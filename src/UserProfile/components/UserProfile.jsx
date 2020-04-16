import React from 'react';
import {connect} from 'react-redux';

function UserProfile ({ name, setName }){
  return(
    <div>
      Name:{name}
      <hr />
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setName: (name)=>{
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)