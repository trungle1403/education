import React from 'react';
import Navigation from './Components/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import HomeScreens from './Screens/Home/Screens/HomeScreens';
import DetailsPage from './Screens/Details/screens/DetailsPage';
import Login from './Screens/Login/Login.jsx'
import Signup from './Screens/Login/Signup.jsx'
export default function App() {
    return (
        <BrowserRouter>
        <Navigation />
            <Switch>
                <Route exact path="/" component={HomeScreens} />
                <Route exact path="/details/:slug" render={(props) => ( <DetailsPage {...props} />) } />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
        
    )

}