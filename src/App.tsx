import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrap">
                <Header/>
                <Nav/>
                <main className="main">
                    <Route  path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </main>
            </div>
        </BrowserRouter>
    );
}
export default App;
