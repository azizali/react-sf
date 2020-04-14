import React from 'react';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: 'SF'
    }
    // Way #1 Pre-binding `this` in key constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickTwo = ()=>{
    this.setState((prevState, prevProp)=>{
      return {
        count: prevState.count + 1,
        age: 12,
      }
    });
  }

  handleClick(){
      this.setState((prevState, prevProp)=>{
        return {
          count: prevState.count + 1,
          age: 12,
        }
      });
  }

  render(){
    console.log('render');
    return (
      <>
        Name: {this.state.name} <br/>
        Age: {this.state.age},
        <button onClick={this.handleClick}>
          Pre-bind: {this.state.count}
        </button>
        {/* // Way #2 */}
        <button onClick={this.handleClick.bind(this)}>
          Bind inline: {this.state.count}
        </button>

        <button onClick={this.handleClickTwo}>
          Handle Click Two: {this.state.count}
        </button>
        
      </>
    )
  }
}
