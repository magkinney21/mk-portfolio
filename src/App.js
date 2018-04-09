import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from '../src/components/splash/Splash.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../src/components/layout/NavBar.js';

class App extends Component {
    
      componentWillMount() {
        
      }
      render() {
        return (          
          <Router>
              <Route exact path='/' component={Splash}/>
          </Router>       
        );
      }
    }
    
export default App;
