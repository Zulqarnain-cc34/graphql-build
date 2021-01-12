import React from "react";

import "./App.css";
import Login from "./pages/Pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Pages/Home";
import { Contact } from "./pages/Pages/Contact";
import { ForgotPassword } from "./pages/Pages/forgotpassword";
import { ChangePassword } from "./pages/Pages/ChangePassword";

interface AppProps { }

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
                    <Route path="/rooms/:roomId" component={Home}></Route>
                    <Route
                        path="/forgotpassword"
                        component={ForgotPassword}
                    ></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </div >
    );
};
export default App;
