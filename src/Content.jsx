import React from 'react';
import Button from './Button';
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

      <Button
        value="Click me"
        type="anchor"
        // to="https://google.com"
        id="x"
        width="100px"
        border="true"
      />

      <Button
        value="Click me 2"
        type="button"
        id="y"
        width="200px"
        border="true"
      />

      <Button
        value="Click me 3"
        type="input"
        id="z"
        width="300px"
        border="true"
      />
    </div>
  )
}
