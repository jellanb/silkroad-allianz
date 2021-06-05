import React from 'react';
import Main from './pages/Main'
import SingUp from './pages/SingUp'
import Download from './pages/Download'
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
                    <Route exact path='/singUp'>
                        <SingUp/>
                    </Route>
                    <Route exact path='/'>
                        <Main/>
                    </Route>
                    <Route exact path='/download'>
                        <Download/>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

