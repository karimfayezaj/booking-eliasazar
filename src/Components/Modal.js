import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';



//This is a functional component that renders a backdrop that covers the entire screen. 
// It accepts a hideModal function as a prop that will be called when the backdrop is clicked.

const Backdrop = ({ hideModal }) => {
    return <div onClick={hideModal} className={classes.backdrop} />;
};



//This is a functional component that renders the modal overlay. It accepts child components that will be rendered inside the modal. 
// The classes object contains CSS classes that will be applied to the modal elements.
const ModalOverlay = (props) => {
    return (
        <div className={classes.modalwrapper}>
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </div>

    );
};

//This gets a reference to an HTML element with the ID overlays,
// which is where the modal will be rendered using the ReactDOM.createPortal function.
const portalElement = document.getElementById('overlays');


//This is the main component that creates the modal. 
//It accepts child components that will be rendered inside the modal. 
//The ReactDOM.createPortal function is used to render the backdrop and 
// modal overlay components inside the portalElement instead of inside the current component's DOM hierarchy.

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop hideModal={props.hideModal} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;