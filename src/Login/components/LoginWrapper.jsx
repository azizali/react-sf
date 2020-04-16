import React from 'react';
import { withRouter } from 'react-router-dom';

function LoginWrapper (props){
  console.log(props)
  return <div>Login Wrapper</div>
}

export default withRouter(LoginWrapper)