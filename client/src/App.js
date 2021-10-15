import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import { Landing } from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layouts/Alert";
//Redux imports
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <section className="container">
                            <Alert />
                            <Switch>
                                <Route
                                    exact
                                    path="/register"
                                    component={Register}
                                />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute
                                    exact
                                    path="/dashboard"
                                    component={Dashboard}
                                ></PrivateRoute>
                            </Switch>
                        </section>
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
