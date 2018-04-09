import React, { Component } from 'react';
import NavBar from '../layout/NavBar.js';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const LongButton = styled.div`
        position:fixed;
        left:47%;
        margin-top:26%;
`
const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100');
    position:fixed;
    margin-top:13%;
    left:35%;
    color:#F2FCEE;
    font-size:6em;
    font-weight:100;
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: UPPERCASE;

}`

const styles = {
    plant: {
    backgroundImage: "url('http://pngimagesfree.com/Vines/falling_vines_leaf.png')",
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height: '100vh',
    width: '50vw',
    marginTop: '-6%',
    
    },
    box2: {
        display:'flex',
        border: '5px solid #F2FCEE',
        height: '50vh',
        width: '50vw',
        margin: '40px',
        boxShadow:' 5px 5px 5px grey',
        position:'absolute',
        bottom:'5%',
        left:'5%'

        
    }
}

const style = {
  height: '50vh',
  width: '50vw',
  margin: '0 auto',
  position: 'absolute',
  top: '35%',
  left: '28%',
  display: 'flex',
  justifyContent: 'center',
  border:'3px solid white',
  boxShadow:' 5px 5px 5px grey'

};
const buttons = {
    position:'fixed',
    left:'42%',
    marginTop:'9%'
}
class Splash extends Component {
    render() {
        return (
        <MuiThemeProvider>            
            <div>
                <NavBar />
                <div style={styles.plant}/>        
                <div style={style} >
                    <div style={styles.box2}>
                     <H1>Magdalena</H1>
                    </div>
                </div>     
                 
            </div>
        </MuiThemeProvider>            
        );
    }
}

export default Splash;

