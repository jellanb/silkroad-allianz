import React from 'react';
import Main from './pages/Main'
import SingUp from './pages/SingUp'
import Download from './pages/Download'
import Reload from './pages/Reload'
import Header from './components/Header';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

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
                </Switch>
            </Router>
            <Footer title="Silkroad survival" description="Servidor privado" />
        </React.Fragment>
    );
}

