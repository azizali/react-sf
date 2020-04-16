import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Population from './Population';

export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/population" component={Population} />
      </Switch>
    </BrowserRouter>
  )
}