import React from 'react';
import Header from './Header';
import ContentTwo from './ContentTwo';
import Box from './Box';
import Footer from './Footer';

export default function App (props) {
  return (
    <>
      <ContentTwo />
      <Box>
        <Header />
        <Box children="Hi there" />
          Some stuff here
          <h1>Hello Box</h1>
          <Footer />
          <input type="text"/>
        <Footer />
      </Box>
    </>
  )
}
