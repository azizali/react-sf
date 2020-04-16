import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Results from './Results';

export default function Population({history}){
  const [grouping, setGrouping] = useState('');
  const [year, setYear] = useState('');

  useEffect(()=>{
    if(year && grouping) {
      history.push(`/population/${year}?grouping=${grouping}`)
    } else {
      history.push(`/population`)
    }
    
  }, [year, grouping, history]);

  return (
    <>
      <div style={{ display: 'flex'}}>
        <select
          value={grouping}
          onChange={(e)=> setGrouping(e.target.value)}
        >
          <option value="">Select Grouping</option>
          <option value={'State'}>State</option>
          <option value={'Nation'}>Nation</option>
        </select>
        <select
          value={year}
          onChange={(e)=> setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value={2016}>2016</option>
          <option value={2017}>2017</option>
          <option value={2018}>2018</option>
        </select>
      </div>
      
      <Route path="/population/:year" component={Results} />
    </>
  )
}
