import Card from "../Components/Card";


const RoomPage = () => {

    const bookThisRoom = () => {
        console.log('Book this room');


    }

    const availableRooms = [

    ];


    return <div>
        <Card
            key='Hello1'
            title='Hello'
            description="Room for two"
            price='19.99'
            imgSrc={require('../assets/Room42.jpeg')}
            bookThisRoom={bookThisRoom}
        />
        <Card
            key='Hello2'
            title='Hello'
            description="Room for two"
            price='19.99'
            imgSrc={require('../assets/Room42.jpeg')}
            bookThisRoom={bookThisRoom}
        />

        <Card
            key='Hello3'
            title='Hello'
            description="Room for two"
            price='19.99'
            imgSrc={require('../assets/Room42.jpeg')}
            bookThisRoom={bookThisRoom}
        />

        <Card
            key='Hello4'
            title='Hello'
            description="Room for two"
            price='19.99'
            imgSrc={require('../assets/Room42.jpeg')}
            bookThisRoom={bookThisRoom}
        />


    </div>


}


export default RoomPage;