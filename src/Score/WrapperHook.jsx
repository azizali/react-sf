import React, { useState } from 'react';
import ShowScore from './ShowScore';

export default function WrapperHook({initialCount}) {
  console.log('WrapperHook run')
  // this.state = {
  //   count: this.props.initialCount,
  // }

  // With array destructuring
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState('SF');
  const [age, setAge] = useState(12);

  // No not put a lot of unrelated state information in on state
  const [bigState, setBigState] = useState({
    count: initialCount,
    name: 'SF',
    age: 12
  });

  // Without array destructuring
  // const returnedArray = useState(initialCount);
  // const count = returnedArray[0];
  // const setCount = returnedArray[1];

  const addCount = ()=>{
    setCount(count + 1);
    setBigState({
      ...setBigState,
      count: count + 1
    })
    // this.setState((prevState)=>{
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
  }

  const subtractCount = ()=>{
    setCount(count - 1);
    // this.setState((prevState)=>{
    //   return {
    //     count: prevState.count - 1
    //   }
    // })
  }

  return (
    <>
      <button onClick={subtractCount}>-</button>
        {count !== 3 && <ShowScore value={count} />}
      <button onClick={addCount}>+</button>
    </>
  )
}
