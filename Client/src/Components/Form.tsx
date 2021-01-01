import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    IconDefinition,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../Css/form.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { useLoginMutation, useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { errorMap } from "../types";
import { useUser } from "../context";
import { Link, useHistory } from "react-router-dom";

interface FormProps {
    icons: Array<IconDefinition>;
    registers: Boolean;
}

export const Form: React.FC<FormProps> = ({ icons, registers }) => {
    let history = useHistory();
    const { user, setuser } = useUser();
    console.log(user);

    const [, register] = useRegisterMutation();
    const [, login] = useLoginMutation();
    const [username, setusername] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [errors, seterrors] = useState<errorMap>();

    //functions to grab email,password,username from form
    const handleusername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setusername(e.target.value);
    };
    const handlepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setpassword(e.target.value);
    };
    const handleemail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setemail(e.target.value);
    };

    //function to handle register mutation
    const handleRegister = async (
        e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        await e.preventDefault();
        const response = await register({ password, username, email });
        if (response.data?.register.user) {
            setuser(response.data?.register.user);
            history.push("/contactform");
        } else if (response.data?.register.errors) {
            const error = toErrorMap(response.data?.register.errors);
            seterrors(error);
        }
    };

    //function to handle login mutation
    const handleLogin = async (
        e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        await e.preventDefault();
        const response = await login({
            usernameorEmail: username,
            password: password,
        });

        if (response.data?.login.user) {
            setuser(response.data?.login.user);
            history.push("/");
        } else if (response.data?.login.errors) {
            const error = toErrorMap(response.data?.login.errors);
            seterrors(error);
            console.log(errors?.error.password);
        }
    };

    return (
        <form className={registers ? "form signUp-form" : "form signIn-form"}>
            <h2 className="form-title">
                {registers === true ? "Sign Up" : "Sign In"}
            </h2>

            <div className="input-field">
                <label
                    className="form-label"
                    data-tooltip={errors?.error[errors.field]}
                >
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="warning-icon"
                    />
                </label>
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                    type="text"
                    name="username"
                    placeholder="name"
                    onChange={handleusername}
                    required
                />
            </div>

            <div className="input-field">
                <label
                    className="form-label"
                    //style={{
                    //    errors?.error[errors.field] === "password"
                    //        ? { style: { display: "flex" } }
                    //        : "form-label"
                    //}}
                    data-tooltip={errors?.error[errors.field]}
                >
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="warning-icon"
                    />
                </label>
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handlepassword}
                    required
                />
            </div>
            {registers === true ? (
                <div className="input-field">
                    <label
                        className="form-label"
                        data-tooltip={errors?.error[errors.field]}
                    >
                        <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            className="warning-icon"
                        />
                    </label>
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                        type="email"
                        name="email"
                        onChange={handleemail}
                        placeholder="Email"
                        required
                    />
                </div>
            ) : null}
            <div className="input-field-forgot-password">
                <Link
                    to="/forgotpassword"
                    className="input-field-forgot-password-link"
                >
                    {" "}
                    forgot password
                </Link>
            </div>
            <input
                type="submit"
                value={registers === true ? "Register" : "Login"}
                onClick={registers ? handleRegister : handleLogin}
                className="btn"
            />

            <p className="social-text">Sign In with Other Methods</p>
            <div className="social-media">
                <div className="social-icons">
                    <FontAwesomeIcon icon={icons[0]} className="social-icon" />
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={icons[1]} className="social-icon" />
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={icons[2]} className="social-icon" />
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={icons[3]} className="social-icon" />
                </div>
            </div>
        </form>
    );
};
