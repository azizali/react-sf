import React from 'react';
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div style={{border: '1px solid green'}}>
      Page not found
      <Link to="/">Go to Home</Link>
    </div>
  )
}