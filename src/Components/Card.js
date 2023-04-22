import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <div className="card">
                <img alt="Room" id={props.imgID} />
                <div className="card-content">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-description">
                        {props.description}
                    </p>
                    <div className="card-footer">
                        <div className="price-tag">${props.price}</div>
                        <button id={props.title} className="book-button" onClick={props.bookThisRoom}>Book this room</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
