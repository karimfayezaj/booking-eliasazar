import React from "react";
import "./WelcomePage.css";

function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>Welcome to Hotel Bookings</h1>
            <div className="buttons">
                <button className="login-button">My Account</button>
            </div>
        </div>
    );
}

export default WelcomePage;
