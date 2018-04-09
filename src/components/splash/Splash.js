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
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:700');
    width: 200px;
    position:fixed;
    margin-top:155px;
    left:32%;
    height: 200px;
    color:black;
    font-size:9em;
    font-family: 'Cormorant Garamond', serif; 
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 4s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
    0%   {color: Aquamarine;}
    25%  {color: MintCream;}
    50%  {color: MidnightBlue;}
    100% {color: MediumVioletRed;}
}

/* Standard syntax */
@keyframes example {
    0%   {color: Aquamarine;}
    25%  {color: MintCream;}
    50%  {color: MidnightBlue;}
    100% {color: MediumVioletRed;}
}`

const style = {
  height: '50vh',
  width: '50vw',
  margin: '0 auto',
//   padding: '10%',
//   position:'fixed',
//   left:'14%',
  display: 'flex',
  justifyContent: 'center',
//   backgroundImage:'url("https://images.pexels.com/photos/66875/plumage-feather-bird-pink-66875.jpeg?cs=srgb&dl=drops-feather-feathers-66875.jpg&fm=jpg")',
//   backgroundRepeat:'no-repeat',
//   backgroundSize:'cover'
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
                    <Paper style={style} zDepth={4} >
                    
                    </Paper>               
            </div>
        </MuiThemeProvider>            
        );
    }
}

export default Splash;

