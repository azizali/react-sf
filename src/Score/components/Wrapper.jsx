import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function WrapperHook({initialCount}) {
  const [name, setName] = useState('SF');
  const [count, setCount] = useState(initialCount);

  const subtractCount = ()=>{
    setCount(count - 1);
  }

  const addCount = useCallback(()=>{
  }, [])

  const itemsMemo = useMemo(()=>{
    return [Math.random(), 'b', count];
  }, [])
  
  const items = [Math.random(), 'b', 'c'];

  useEffect(()=>{
    addCount()
  }, [name, addCount])

  return (
    <>
      <button onClick={subtractCount}>-</button>
        {count} <br />
        itemsMemo: {itemsMemo} <br/>
        items: {items}
      <button onClick={addCount}>+</button>
      <hr/>
      <input type="text" onChange={(e)=>{
        setName(e.target.value)
      }}/>
    </>
  )
}
