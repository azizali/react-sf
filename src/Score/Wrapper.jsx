import React from 'react';
import ShowScore from './ShowScore';

export default class Wrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: this.props.initialCount,
    }
    console.log('Constructor - Wrapper');
  }

  addCount = ()=>{
    this.setState((prevState)=>{
      return {
        count: prevState.count + 1
      }
    })
  }

  subtractCount = ()=>{
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    })
  }

  componentDidMount(){
    console.log('componentDidMount - Wrapper');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate - Wrapper');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount - Wrapper');
  }

  render(){
    console.log('Render - Wrapper');
    return (
      <>
        <button onClick={this.subtractCount}>-</button>
          {this.state.count !== 3 && <ShowScore value={this.state.count} />}
        <button onClick={this.addCount}>+</button>
      </>
    )
  }
}
