import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

import Login from '../Login'
import UserProfile from './UserProfile'

export default function User({match}){
  const { id } = match.params
  useEffect(()=>{
    console.log(`Get info for ${id}`)
  }, [id])

  return (
    <div style={{border: '1px solid green'}}>
      <Link to={'/user/azizali'}>User: azizali</Link> |&nbsp;
      <Link to={'/user/SF'}>User: SF</Link> |&nbsp;
      <Route path='/user/:id' component={UserProfile} />
      <Login />
    </div>
  )
}
