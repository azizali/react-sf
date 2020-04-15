import React, {useState, useEffect} from 'react';

export default function Population() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // componentDidMount(){
  //   console.log('componentDidMount - Wrapper');
  //   this.getData()
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate - Wrapper');
  // }
  console.log('before useEffect');
  
  // Runs After every render
  // useEffect(()=>{
  //   getData()
  //   console.log('useEffect');
  // })

  // Runs only after the first render
  // useEffect(()=>{
  //   getData()
  //   console.log('useEffect');
  // }, [])

  // Runs after the first render and whenever count changes
  // useEffect(()=>{
  //   console.log('useEffect tracking when count changes');
  // }, [count])

  useEffect(()=>{
    console.log('useEffect tracking when count changes', count);

    return ()=>{
      console.log('Returned function in useEffect', count);
    }
  }, [count])

  console.log('After useEffect');

  const getData = async ()=>{
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    
    try{
      const response = await fetch(url);
      const json = await response.json()
      console.log(json);
      setData(json.data);
      setIsLoading(false);
      // this.setState({
      //   data: json.data,
      //   isLoading: false,
      // });
    } catch (error){
        console.log(error)
        setIsLoading(false);
        // this.setState({
        //   isLoading: false,
        // })
    }
  }

  return (
    <>
      <button onClick={()=> setCount(count+1)}>{count}</button>

      {isLoading && <div>Loading...</div>}
      {!isLoading && data.map((item)=>{
        return <div key={`${item['ID Nation']}-${item['ID Year']}`} style={{borderTop: '1px solid black'}}>
          <div>Nation: {item.Nation}</div>
          <div>Year: {item.Year}</div>
          <div>Population: {item.Population}</div>
        </div>
      })}
    </>
  )
}
