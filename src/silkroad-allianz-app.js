import React from 'react';
import Main from './pages/Main'
import SingUp from './pages/SingUp'
//import SingIn from './pages/SingIn'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export default function SilkRoadAllianzApp (){
    

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/SingUp'>
                        <SingUp/>
                    </Route>
                    <Route exact path='/'>
                        <Main/>
                    </Route>                    
                </Switch>       
            </Router>
        </React.Fragment>
    );
}

