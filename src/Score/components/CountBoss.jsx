import React from 'react';

export default function CountBoss({ count, setCountCb, addCountCb }) {
  return (
    <>
      Current Count: {count}
      <br/>
      <button onClick={()=>setCountCb(100)}>Set Count to 100</button>
      <button onClick={addCountCb}>Add Count</button>
    </>
  )
}
