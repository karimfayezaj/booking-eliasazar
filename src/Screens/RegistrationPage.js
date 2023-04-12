
import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./RegistrationPage.css";


const RegistrationPage = ({ appConfig }) => {
    const auth = getAuth(appConfig);

    const registerUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            signUpRef.current.email.value,
            signUpRef.current.password.value,
        )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + '\n' + errorMessage);
                // ..
            });
    }
    const signUpRef = useRef();

    return <section className="registration-page">
        <form ref={signUpRef} onSubmit={registerUser}>
            <input id="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    </section>
}


export default RegistrationPage;