import React, {useState, useEffect, useCallback} from 'react';
import queryString from 'query-string';

export default function Results({match, location}){
  console.log(location.search);
  const { grouping } = queryString.parse(location.search);
  const { year } = match.params

  const [data, setData] = useState([]);
  const getData = useCallback(async ()=>{
    const url = `https://datausa.io/api/data?drilldowns=${grouping}&measures=Population&year=${year}`;
    
    try{
      const response = await fetch(url);
      const json = await response.json()
      setData(json.data);
    } catch (error){
        console.log(error)
    }
  },[year, grouping])

  useEffect(()=>{
    year && grouping && getData()
  },[year, grouping, getData])
  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}
