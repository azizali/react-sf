import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'input', 'anchor']),
  // to: PropTypes.string,
  to: function(props, propName, componentName) {
    if(props.type === 'anchor' && typeof props[propName] === 'undefined'){
      return new Error(`${propName} is required when type='anchor'`);
    }
  },
}