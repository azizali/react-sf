import React from 'react';

export default class HeaderClass extends React.Component {
  render(){
    const { companyName, tagLine } = this.props;
    return (
      <div>
        Header Class {companyName}
        <br />
        {tagLine}
      </div>
    )
  }
}

// export default function HeaderClass (){
//   return (
//     <div>Header Class</div>
//   )
// }
