import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.id}></img>
        </div>
    );
};
 
export default Card;