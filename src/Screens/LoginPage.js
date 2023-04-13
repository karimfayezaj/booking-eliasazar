import React, { useRef, useState } from 'react';

import "./LoginPage.css";



import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginPage = ({ appConfig, userState }) => {
    const loginRef = useRef();
    const auth = getAuth(appConfig);



    const signInUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, loginRef.current.emaillg.value, loginRef.current.passwordlg.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                userState(true);
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + '\n' + errorMessage);
            });
    }

    return <section className="login-page">
        <form ref={loginRef} onSubmit={signInUser}>
            <input id="emaillg" placeholder="Email" />
            <input id="passwordlg" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </section>
}


export default LoginPage;