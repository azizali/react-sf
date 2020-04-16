import React from 'react';

export default function About(props){
  console.log(props)
  return (
    <div style={{border: '1px solid green'}}>
      I am About
      <button onClick={()=>{
        // console.log(history)
        props.history.goBack()
      }}>Go back</button>
    </div>
  )
}