import React from 'react';
import ReactDOM from 'react-dom';

function FirstComponent (props) {
  return (
    <div>Hello World {props.name}, {props.whatever}</div>
  )
}

ReactDOM.render(<FirstComponent name="SF" whatever="2" />, document.getElementById('root'));