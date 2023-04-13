import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import WelcomePage from './Screens/WelcomePage';
import RegistrationPage from './Screens/RegistrationPage';
import LoginPage from './Screens/LoginPage';
import RoomPage from './Screens/RoomPage';



const firebaseConfig = {
  apiKey: "AIzaSyBZsoXXiB200-D4m3XTxWfslzBeJ30zDrU",
  authDomain: "eliasazar-fece6.firebaseapp.com",
  databaseURL: "https://eliasazar-fece6-default-rtdb.firebaseio.com",
  projectId: "eliasazar-fece6",
  storageBucket: "eliasazar-fece6.appspot.com",
  messagingSenderId: "1055533390822",
  appId: "1:1055533390822:web:af7960209a308252731427",
  measurementId: "G-LTFXW6M7LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const getCurrentUser = () => {
  const user = auth.currentUser;
  console.log(user);
}

function App() {

  const [userSignedIn, setuserSignedIn] = useState(false);

  const changedAuthState = (change) => {
    setuserSignedIn(change);
  }

  const logOutUser = () => {
    auth.signOut();
    setuserSignedIn(false);
    console.log('User signed Out');
  }




  return (
    <div>
      {userSignedIn ?
        <div>
          <RoomPage />
          <button onClick={getCurrentUser}>Get User</button>
          <button onClick={logOutUser}>LogOut</button>
        </div> :
        <div><WelcomePage />
          <RegistrationPage appConfig={app} userState={changedAuthState} />
          <LoginPage appConfig={app} userState={changedAuthState} />
        </div>
      }
    </div>
  );
}

export default App;
