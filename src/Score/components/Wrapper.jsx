import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function WrapperHook({initialCount}) {
  console.log('run')
  const [name, setName] = useState('SF');
  const [count, setCount] = useState(initialCount);

  const setFieldLength = useCallback(() =>{
    setCount(name.length);
  }, [name.length]);
 
  useEffect(()=>{
    setFieldLength()
    // setCount(name.length)
  }, [name, setFieldLength]);

  return (
    <>
      <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>{count}
    </>
  )
}
