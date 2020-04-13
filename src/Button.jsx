import React from 'react';

// const props = {
//   type: 'a',
//   value: 'b',
//   z: 'z',
//   x: 'x'
// }

// const { value, type, to, ...everythingElse } = props
// everythingElse = {
//   z: 'z',
//   x: 'x'
// }


export default function Button({ value, type, to, ...remainingProps }){
  if(type === 'anchor'){
    return(
      <a href={to} {...remainingProps}>{value}</a>
    )
  }
  if(type === 'input'){
    return(
      <input type="button" value={value} {...remainingProps} />
    )
  }
  if(type === 'button'){
    return(
      <button {...remainingProps}>{value}</button>
    )
  }
}