import React from 'react';

export default class Population extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount(){
    console.log('componentDidMount - Wrapper');
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    
    fetch(url)
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
        console.log(json);
        this.setState({
          data: json.data,
          isLoading: false,
        })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({
          isLoading: false,
        })
      })
  }

  componentDidUpdate(){
    console.log('componentDidUpdate - Wrapper');
  }

  render(){
    return (
      <>
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading && this.state.data.map((item)=>{
          return <div key={`${item['ID Nation']}-${item['ID Year']}`} style={{borderTop: '1px solid black'}}>
            <div>Nation: {item.Nation}</div>
            <div>Year: {item.Year}</div>
            <div>Population: {item.Population}</div>
          </div>
        })}
      </>
    )
  }
}
