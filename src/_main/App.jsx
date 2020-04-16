import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import UserProfile from '../UserProfile'

export default function App (){
  return(
    <Provider store={store}>
      <UserProfile />
    </Provider>
  )
}
