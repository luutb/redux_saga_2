import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import store from './src/redux_saga/store'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import FirstApp from './src/container/testContaier'


export default class MyApp extends Component{
render(){
   return(

      <Provider store={store}>
         <FirstApp></FirstApp>
      </Provider>
   )
}


}