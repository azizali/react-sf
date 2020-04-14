import React from 'react';

export default function CarCard ({name, mpg, id}){
  return (
    <div id={id} style={{
      padding: '10px',
      backgroundColor: 'yellow',
      border: '2px solid green',
    }}>
      id: {id}
      <div>{name}</div>
      <div>{mpg}</div>
    </div>
  )
}