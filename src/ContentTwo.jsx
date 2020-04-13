import './styles.css';
import React from 'react';

export default function ContentTwo(){
  return (
    <div>
      <div className="content whatever at all">
        Content Two A
      </div>
      {/* <div style="background-color: pink; border: 2px solid red"> */}
      <div style={{
        backgroundColor: 'pink',
        border: '2px solid red'
      }}>
        Content Two B
      </div>
    </div>
  )
}