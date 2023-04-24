import RoomPage from "../Pages/RoomPage";


const UserMainScreen = ({ app, currentUser, showModal, getCurrentUser, logOutUser }) => {

    return <div>
        <RoomPage appConfig={app} currentUser={currentUser} showModal={showModal} />
        <button onClick={getCurrentUser}>Get User</button>
        <button onClick={logOutUser}>LogOut</button>
    </div>


}

export default UserMainScreen;