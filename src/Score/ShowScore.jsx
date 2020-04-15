import React from 'react';

export default class ShowScore extends React.Component {
  constructor(props){
    super(props);
    console.log('Constructor - ShowScore');
  }

  componentDidMount(){
    console.log('componentDidMount - ShowScore');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate - ShowScore');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount - ShowScore');
  }

  render(){
    console.log('Render - ShowScore');
    return <div>{this.props.value}</div>
  }
}