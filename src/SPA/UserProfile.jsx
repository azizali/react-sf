import React from 'react';
import { useEffect } from 'react';

export default function UserProfile({match}){
  const { id } = match.params
  useEffect(()=>{
    console.log(`Get info for ${id}`)
  }, [id])

  return (
    <div style={{border: '1px solid green'}}>
        User with id {id}
    </div>
  )
}
