import React from 'react';
// import Header from './Header';
// import HeaderClass from './HeaderClass';
// import ContentTwo from './ContentTwo';
// import Box from './Box';
// import Footer from './Footer';
// import CarsList from './CarsList';
// import Counter from './Score/Counter';
// import Form from './Form';
// import ComplexForm from './ComplexForm';
import ScoreWrapper from './Score/Wrapper';

export default (props) => {
  return (
    <>
      <ScoreWrapper initialCount={10} />
    </>
  )
}
