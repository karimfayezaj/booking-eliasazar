import Modal from '../Components/Modal';

const RoomBookingModal = ({ bookThisRoom, hideModal, modalData }) => {
    return <Modal>
        <div>
            <form ref={modalData}>
                <p>Check In date:</p>
                <input id="checkIn" type="date"></input>
                <p>Check out date:</p>
                <input id="checkOut" type="date"></input>
            </form>
            <div>
                <button type="submit" onClick={bookThisRoom}>Submit</button>
                <button type="button" onClick={hideModal}>Cancel</button>
            </div>
        </div>
    </Modal>
}




export default RoomBookingModal;