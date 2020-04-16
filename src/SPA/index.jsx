import React, {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import User from './User';
import About from './About';
import NotFound from './NotFound';

export default function SPA(){
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div>
        <Link to={'/'}>Home</Link> |&nbsp;
        <Link to={'/about'}>About</Link> |&nbsp;
        <Link to={'/user/azizali'}>User: azizali</Link> |&nbsp;
        <Link to={'/user/SF'}>User: SF</Link> |&nbsp;
        <Link to={'/user'}>User</Link> |&nbsp;
        <Link to={'/contact'}>Contact</Link>
      </div>
      <Switch>
        <Route exact={true} path="/">
          <Home logoutCb={()=>setIsLoggedIn(false)} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/about" render={(routeProps)=>{
          return <About {...routeProps}/>
        }} />
        <Route path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}