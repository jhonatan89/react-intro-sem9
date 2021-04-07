import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Login } from '../pages/Login';
import { ProductList } from '../pages/ProductList';
import { Navbar} from '../components/nav/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <ProductList />
                </Route>
                <Route path="/list">
                    <ProductList />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}
