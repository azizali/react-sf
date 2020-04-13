import React from 'react';

// const bigObj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// }

// const a = bigOb.a;
// const b = bigOb.b;
// const c = bigOb.c;

// const { a, b, c} = bigObj;

export default function Content (props){
  // Object Destructuring
  let { name, age, locations, info, cb } = props;

  // DO NOT reassign value to prop
  // props.name = 'something else';

  return (
    <div>
      <h2>Content Destructured</h2>
      Name: {name} <br/>
      age: {age} <br/>
      location: {locations} <br/>
      info: {info.address} <br/>
      cb: {cb()} <br/>
    </div>
  )
}
