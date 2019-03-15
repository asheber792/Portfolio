import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about-me' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
