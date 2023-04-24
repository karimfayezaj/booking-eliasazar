import { Fragment, useState, useRef } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase, ref, get, child } from "firebase/database";


import RoomBookingModal from './Interfaces/RoomBookingModal';
import UserMainScreen from './Screens/UserMainScreen';
import AppMainScreen from './Screens/AppMainScreen';



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
const database = getDatabase(app);


function App() {

  const databaseRef = ref(database);

  const [userSignedIn, setuserSignedIn] = useState(false);

  let modalData = useRef();
  const [modal, setModal] = useState(false);

  const currentUser = auth.currentUser;


  // function that just changes the state of the modal to true
  // this means the modal would be visible after triggering this function
  const showModal = () => setModal(true);

  // function that just changes the state of the modal to false
  // this means the modal would be hidden after triggering this function
  const hideModal = () => setModal(false);

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


  const bookThisRoom = () => {
    console.log(modalData.current['checkIn'].value);
    console.log(modalData.current['checkOut'].value);
    get(child(databaseRef, `/Room40`))
      .then((response) => {
        console.log(response.toJSON());
      });

  }

  return (
    <Fragment>
      {modal && <RoomBookingModal
        hideModal={hideModal}
        bookThisRoom={bookThisRoom}
        modalData={modalData}
      />}
      <main>
        {userSignedIn ?
          <UserMainScreen
            app={app}
            currentUser={currentUser}
            showModal={showModal}
            getCurrentUser={getCurrentUser}
            logOutUser={logOutUser}
          />
          :
          <AppMainScreen
            app={app}
            changedAuthState={changedAuthState}
            currentUser={currentUser}
          />
        }
      </main>

    </Fragment>

  );
}

export default App;
