import React, { useRef, useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

import "./LoginPage.css";

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
        const current = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(current);
        return currentUser;
    };

    const doUserLogIn = async function (event) {
        event.preventDefault();
        // Note that these values come from state variables that we've declared before
        const usernameValue = loginRef.current.usernamelg.value;
        const passwordValue = loginRef.current.passwordlg.value;
        try {
            const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
            // logIn returns the corresponding ParseUser object
            alert(
                `Success! User ${loggedInUser.get(
                    'username'
                )} has successfully signed in!`
            );
            // To verify that this is in fact the current user, `current` can be used
            const currentUser = await Parse.User.current();
            console.log(loggedInUser === currentUser);
            // Clear input fields
            // Update state variable holding current user
            getCurrentUser();
            return true;
        } catch (error) {
            // Error can be caused by wrong parameters or lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        }
    };


    const loginRef = useRef();



    return <section className="login-page">
        <form ref={loginRef} onSubmit={doUserLogIn}>
            <input id="usernamelg" placeholder="Username" />
            <input id="passwordlg" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </section>



}


export default LoginPage;