import { useEffect } from "react";

import Card from "../Components/Card";
import { getStorage, ref, getDownloadURL, list } from "firebase/storage";



const RoomPage = ({ appConfig, currentUser, showModal }) => {
    const storage = getStorage(appConfig);


    const listOfRooms = [
        'Room40.jpeg',
        'Room41.jpeg',
        'Room42.jpeg',
        'Room43.jpeg',
    ]


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        listOfRooms.forEach(roomNumber => {
            const pathReference = ref(storage, roomNumber);
            async function fetchData() {
                await getDownloadURL(pathReference)
                    .then((url) => {
                        const img = document.getElementById(roomNumber);
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        // Handle any errors
                        console.log(error);
                    });
            }
            fetchData();
        });
    });



    const bookThisRoom = (event) => {
        console.log(event.target.id);
        console.log(currentUser.uid);
        showModal();
    }

    return <div>
        <Card
            imgID={listOfRooms[0].toString()}
            key={listOfRooms[0].toString()}
            title={listOfRooms[0].toString()}
            description="Room for two"
            price='19.99'
            bookThisRoom={bookThisRoom}
        />
        <Card
            imgID={listOfRooms[1].toString()}
            key={listOfRooms[1].toString()}
            title={listOfRooms[1].toString()}
            description="Room for two"
            price='19.99'
            bookThisRoom={showModal}
        />
        <Card
            imgID={listOfRooms[2].toString()}
            key={listOfRooms[2].toString()}
            title={listOfRooms[2].toString()}
            description="Room for two"
            price='19.99'
            bookThisRoom={showModal}
        />
        <Card
            imgID={listOfRooms[3].toString()}
            key={listOfRooms[3].toString()}
            title={listOfRooms[3].toString()}
            description="Room for two"
            price='19.99'
            bookThisRoom={showModal}
        />
    </div>
}


export default RoomPage;