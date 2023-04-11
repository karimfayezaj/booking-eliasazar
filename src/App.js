import Parse from 'parse/dist/parse.min.js';
import WelcomePage from './Screens/WelcomePage';
import RegistrationPage from './Screens/RegistrationPage';
import LoginPage from './Screens/LoginPage';
import RoomPage from './Screens/RoomPage';


// Your Parse initialization configuration goes here


const PARSE_APPLICATION_ID = 'NJ3k1bBmN6a2rHeuyqMh7NH3kZ0uYwSllER52cHc';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'iBnhIZNgNX9HtV1oyIWahEvayvwsG4kgJ8KZ50s7';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;



function App() {
  return (
    <div>
      {/* <WelcomePage />
      <RegistrationPage />
      <LoginPage /> */}
      <RoomPage />

    </div>
  );
}

export default App;
