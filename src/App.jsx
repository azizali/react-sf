import React from 'react';
import Header from './Header';
import HeaderClass from './HeaderClass';
// import ContentTwo from './ContentTwo';
// import Box from './Box';
// import Footer from './Footer';
import CarsList from './CarsList';

export default function App (props) {
  return (
    <>
      <Header companyName="SF" tagLine="We are the geeks" />
      <HeaderClass
        companyName="SF2"
        tagLine="We are the geeks"
      />
    </>
  )
}
