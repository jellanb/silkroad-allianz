import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Main from './pages/Main'
import SingUp from './pages/SingUp';
import Download from './pages/Download';
import Reload from './pages/Reload';
import Politics from './pages/Politics';

import imagenCenter from './images/SRO-Preview.jpeg'

const sections = [
    { title: 'Comunidad', url: '#' },
    { title: 'Recarga', url: 'reload' },
    { title: 'Descargas', url: 'download' },
    { title: 'Politicas', url: '#' }
];

export default function SilkRoadAllianzApp (){


    return (
        <React.Fragment>
            
            <Router>
            <Header title={imagenCenter} sections={sections} />
                <Switch>
                    <Route exact path='/'>
                        <Main/>
                    </Route>
                    <Route exact path='/singUp'>
                        <SingUp/>
                    </Route>
                    <Route exact path='/reload'>
                        <Reload/>
                    </Route>                    
                    <Route exact path='/download'>
                        <Download/>
                    </Route>
                    <Route exact path='/politics'>
                        <Politics/>
                    </Route>
                </Switch>
            </Router>
            <Footer title="Silkroad survival" description="Servidor privado" />
        </React.Fragment>
    );
}

