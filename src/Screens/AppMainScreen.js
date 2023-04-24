import WelcomePage from "../Pages/WelcomePage";
import SignUserForm from "../Interfaces/SignUserForm";


const AppMainScreen = ({ app, changedAuthState, currentUser }) => {
    return <div>
        <WelcomePage />
        <SignUserForm
            appConfig={app}
            userState={changedAuthState}
            currentUser={currentUser}
        />
    </div>


}


export default AppMainScreen;