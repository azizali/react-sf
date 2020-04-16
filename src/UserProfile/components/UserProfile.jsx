import React from 'react';
import {connect} from 'react-redux';
import {setName} from '../actions';

function UserProfile ({ name, setNameCb }){
  return(
    <div>
      Name:{name}
      <hr />
      <input value={name} onChange={(e)=>setNameCb(e.target.value)}/>
    </div>
  )
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    name: state.userProfile.name
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    setNameCb: (name)=>{
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)