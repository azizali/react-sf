import React from 'react';

export default function Home({isLoggedIn, logoutCb, ...remainingProps}){
  console.log(remainingProps)
  return (
    <div style={{border: '1px solid green'}}>
      I am home
      {isLoggedIn ? "I am here": 'Please Login'}
      <button onClick={logoutCb}>
        logout 
      </button>
    </div>
  )
}