import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import reducers from './reducer'
import './config'
import './index.css'

import AuthRoute from './components/authroute/authroute'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register} ></Route>
            <Route path="/bossinfo" component={BossInfo}></Route>
            <Route path="/geniusinfo" component={GeniusInfo}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)