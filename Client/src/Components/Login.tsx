import React, { useState } from "react";
import { Form } from "./Form";
import "../Css/login.css";
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Rocket from "../img/rocket.svg";
import Table from "../img/table.svg";
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [SignUp, setSignUp] = useState<boolean>(false);

    return (
        <div
            className={SignUp === true ? "container sign-up-mode" : "container"}
        >
            <div className="SignIn-SignUp">
                <Form
                    icons={[faGoogle, faFacebook, faTwitter, faLinkedin]}
                    registers={false}
                />
                <Form
                    icons={[faGoogle, faFacebook, faTwitter, faLinkedin]}
                    registers={true}
                />
            </div>
            <div className="panel-container">
                <div className="panel panel-left">
                    <div className="panel-content">
                        <h2>New here ?</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eos laborum et veniam.
                        </p>
                        <button
                            className="btn"
                            onClick={() => {
                                setSignUp(!SignUp);
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                    <img src={Rocket} alt="logo" />
                </div>
                <div className="panel panel-right">
                    <div className="panel-content">
                        <h2>One of Us?</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eos laborum et veniam.
                        </p>
                        <button
                            onClick={() => {
                                setSignUp(false);
                            }}
                            className="btn"
                        >
                            Sign In
                        </button>
                    </div>
                    <img src={Table} alt="logo" />
                </div>
            </div>
        </div>
    );
};
export default Login;
