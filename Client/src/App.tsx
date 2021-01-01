import React from "react";

import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Contact } from "./Components/Contact";
import { ForgotPassword } from "./Components/forgotpassword";
import { ChangePassword } from "./Components/ChangePassword";
interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/contactform" component={Contact}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route
                        path="/change-password/:tokenId"
                        component={ChangePassword}
                    ></Route>
                    <Route
                        path="/forgotpassword"
                        component={ForgotPassword}
                    ></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </div>
    );
};
export default App;
