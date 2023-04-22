import React, { useRef, useState } from 'react';
import "./SignUserForm.css";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const SignUserForm = ({ appConfig, userState, currentUser }) => {
    const signUserRef = useRef();
    const auth = getAuth(appConfig);
    const [message, setMessage] = useState('');

    const signInUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, signUserRef.current.email.value, signUserRef.current.password.value)
            .then((userCredential) => {
                // Signed in 
                currentUser = userCredential.user;
                userState(true);
                setMessage(currentUser);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMessage(errorMessage);
            });
    }

    const registerUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            signUserRef.current.email.value,
            signUserRef.current.password.value,
        )
            .then((userCredential) => {
                // Signed in 
                currentUser = userCredential.user;
                setMessage(currentUser);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMessage(errorMessage);
                // ..
            });
    }

    return <section className="login-page">
        <form ref={signUserRef}>
            <input id="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />
            {message.length > 0 ? <p>{message}</p> : <p>{ }</p>}
            <div>
                <button type="button" onClick={signInUser}>Login</button>
                <button type="button" onClick={registerUser}>Sign Up</button>
            </div>
        </form>
    </section>
}


export default SignUserForm;