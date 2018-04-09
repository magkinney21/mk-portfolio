import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';


const Image = styled.img`
    height:50px;
    width:70px;
    border-radius:10%;
    margin-right:-20px;


`
class Logo extends Component {
    render() {
        return (
            <div>  
                <Image style={{margin:'10px -4px'}} src="./../images/one.png"  alt=" icon"/>
                <Image style={{margin:'10px -10px'}} src="./../images/two.png"  alt=" icon"/>      
            </div>  
        );
    }
}

export default Logo;