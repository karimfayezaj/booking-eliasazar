import { initializeApp } from "firebase/app";

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

function App() {
  return (
    <div>
      <WelcomePage />
      <RegistrationPage appConfig={app} />
      <LoginPage />
      {/* <RoomPage /> */}

    </div>
  );
}

export default App;
