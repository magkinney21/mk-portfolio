import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


class routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter> 
                    <Route exact path="/" component={}  />
                    <Route path="/projects" component={} />
                </BrowserRouter> 
            </div>
        );
    }
}

export default routes;