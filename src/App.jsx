import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function App (props) {
  return (
    <div>
      <Header />
      <Content
        name="SalesForce"
        age={12}
        locations={['Chicago', 'Dallas', 'Indianapolis']}
        info={{
          address: '123 alphabet st',
          city: 'Dallas',
          state: 'Texas'
        }}
        cb={()=>{
          return 'Some Value'
        }}
      />
      <Footer />
    </div>
  )
}
