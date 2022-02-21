import React, { Fragment } from 'react';
import Navigation from './Components/Navigation'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css'
import Calenda from './Components/Calenda'
import Design from './Components/Design'
import Short from './Components/Short'
import Long from './Components/Long'
import HomeScreens from './Screens/Home/Screens/HomeScreens';
import DetailsPage from './Screens/Details/screens/DetailsPage';

export default function App() {
    return (
        <BrowserRouter>
        <Navigation />
            <Switch>
                <Route exact path="/" component={HomeScreens} />
                <Route exact path="/details/:slug" render={(props) => ( <DetailsPage {...props} />) } />
            </Switch>
        </BrowserRouter>
        
    )

}