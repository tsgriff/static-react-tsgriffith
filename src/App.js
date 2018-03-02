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
          <div className="nav-icon-contain">
            <i className="fa fa-laptop"></i>
            <i className="fa fa-code"></i>
            <i className="fa fa-coffee"></i>
          </div>
        </nav>
        <div className="content">
          <Routes />
        </div>
        <div className="blog-footer">
          <div className="blog-footer-text">&copy; {new Date().getFullYear()} | Powered by <a href="https://nozzle-react-static.netlify.com/" target="_blank" rel="noopener noreferrer">React-Static</a> and <a href="https://www.netlifycms.org/" target="_blank" rel="noopener noreferrer">Netlify CMS</a></div>
        </div>
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
