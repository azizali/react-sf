import React from 'react';
import cars from './cars.json';
import CarCard from './CarCard';

export default function List (){
  console.log(cars)
  return (
    <div>
      {cars.map(function(item, index){
        return <CarCard name={item.name} mpg={item.mpg} id={index} />
      })}
    </div>
  )
}


// [
//         [
//           <div key={index}>{item.name}</div>
//           <div key={index}>{item.mpg}</div>
//         ]
//   <div key="">chevy</div>,
//   <div key="">audi</div>,
//   ...
// ]