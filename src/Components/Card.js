import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <div className="card">
                <img src={props.imgSrc} alt="Room" />
                <div className="card-content">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-description">
                        {props.description}
                    </p>
                    <div className="card-footer">
                        <div className="price-tag">${props.price}</div>
                        <button className="book-button" onClick={props.bookThisRoom}>Book this room</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
