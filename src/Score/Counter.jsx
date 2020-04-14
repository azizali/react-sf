import React from 'react';

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: 'SF'
    }
  }

  render(){
    console.log('render');
    return (
      <>
        Name: {this.state.name} <br/>
        Age: {this.state.age},
        <button onClick={()=>{
          // The wrong way to update state
          // this.state.count = this.state.count + 1
          
          // Right way to update state
          // this.setState({
          //   count: this.state.count + 1,
          //   age: 12,
          // });

          console.log('Count before', this.state.count);
          // Use callback function in this.setState
          // if your new state replies on prevState or prevProp
          this.setState((prevState, prevProp)=>{
            return {
              count: prevState.count + 1,
              age: 12,
            }
          }, ()=>{
            console.log('done callback', this.state.count);
          });

          console.log('Count after', this.state.count);

        }}>
          Count: {this.state.count}
        </button>
      </>
    )
  }
}
