import React from 'react';

export default function Box(props){
  return (
    <div style={{
      border: '2px solid brown',
      borderRadius: '2em',
      padding: '20px'
    }}>
      <h3>Title</h3>
      <hr />
      {props.children}
      <hr />
      <button>Ok</button>
      <button>Cancel</button>
    </div>
  )
}