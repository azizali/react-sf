import React from 'react';

export default class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      company: 'SF',
      location: ''
    }
    this.companyField = React.createRef()
  }
  render(){
    return (
      <>
        Company: <input
          type="text"
          ref={this.companyField}
          // onChange={(e)=>{
          //   this.setState({
          //     company: e.target.value
          //   })
          // }}
          // value={this.state.company}
        />
        <input type="button" onClick={()=>{
          console.log(this.companyField.current.value);
        }}/>
      </>
    )
  }
}
