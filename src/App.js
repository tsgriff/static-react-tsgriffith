import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './app.css'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav className="custom-navbar">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
