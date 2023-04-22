import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import WelcomePage from './Screens/WelcomePage';
import RoomPage from './Screens/RoomPage';
import SignUserForm from './Interfaces/SignUserForm';



const firebaseConfig = {
  apiKey: "AIzaSyBZsoXXiB200-D4m3XTxWfslzBeJ30zDrU",
  authDomain: "eliasazar-fece6.firebaseapp.com",
  databaseURL: "https://eliasazar-fece6-default-rtdb.firebaseio.com",
  projectId: "eliasazar-fece6",
  storageBucket: "eliasazar-fece6.appspot.com",
  messagingSenderId: "1055533390822",
  appId: "1:1055533390822:web:af7960209a308252731427",
  measurementId: "G-LTFXW6M7LM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


function App() {

  const [userSignedIn, setuserSignedIn] = useState(false);
  const currentUser = auth.currentUser;

  const getCurrentUser = () => {
    console.log(currentUser);
  }


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
          <RoomPage appConfig={app} currentUser={currentUser} />
          <button onClick={getCurrentUser}>Get User</button>
          <button onClick={logOutUser}>LogOut</button>
        </div> :
        <div>
          <WelcomePage />
          <SignUserForm appConfig={app} userState={changedAuthState} currentUser={currentUser} />
        </div>
      }
    </div>
  );
}

export default App;
