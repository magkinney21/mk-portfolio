import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';
import Logo from '../splash/Logo';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const style = {
    margin: 12,
  };
const containerStyle = {
    background: '#0B153'
}
  
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
      handleToggle = () => this.setState({open: !this.state.open});
    
    render() {
        return (
            <MuiThemeProvider>
                <AppBar 
                    style={{background:'rgba(0,0,0,0.4)', marginBottom:'20px'}} 
                    title={<Logo />}   
                    iconStyleRight={{background:"black"}} 
                    onClick={this.handleToggle}
                    >
                    <Drawer 
                        style
                        style={{background:'black'}}
                        open={this.state.open} 
                            >
                      <MenuItem>Menu Item</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                  </AppBar>
                </MuiThemeProvider>  
            );
    }
}

export default NavBar;

