import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { WallScreen } from '../components/reactibook/WallScreen';


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/" component={ WallScreen } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
