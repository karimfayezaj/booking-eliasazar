import { useRef } from "react";
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here


const PARSE_APPLICATION_ID = 'NJ3k1bBmN6a2rHeuyqMh7NH3kZ0uYwSllER52cHc';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'iBnhIZNgNX9HtV1oyIWahEvayvwsG4kgJ8KZ50s7';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;



function App() {



  const doUserRegistration = async function (event) {
    event.preventDefault();
    // Note that these values come from state variables that we've declared before
    const usernameValue = signUpRef.current.username.value;
    const passwordValue = signUpRef.current.password.value;
    try {
      // Since the signUp method returns a Promise, we need to call it using await
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      console.log('Done');
      return true;
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error! ${error}`);
      console.log('Not Done');
      return false;
    }
  };


  const signUpRef = useRef();

  return (
    <div>
      <section>
        <form ref={signUpRef} onSubmit={doUserRegistration}>
          <input id="username" placeholder="Username" />
          <input id="password" type="password" placeholder="Password" />
          <input id="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
