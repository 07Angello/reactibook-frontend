import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { WallScreen } from '../components/reactibook/WallScreen';
import { startChecking } from '../redux/actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [ dispatch ]);

    if ( checking ) {
        return (<h5>Please wait a few seconds...</h5>);
    }

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ !!uid } />
                <PrivateRoute exact path="/" component={ WallScreen } isAuthenticated={ !!uid } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
