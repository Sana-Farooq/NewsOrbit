import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import PropTypes from 'prop-types'

export class App extends Component {
  

  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

export default App
