import React, { useRef } from 'react';

import "./LoginPage.css";

const LoginPage = () => {
    const loginRef = useRef();

    return <section className="login-page">
        <form ref={loginRef} onSubmit={() => { }}>
            <input id="usernamelg" placeholder="Username" />
            <input id="passwordlg" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </section>
}


export default LoginPage;