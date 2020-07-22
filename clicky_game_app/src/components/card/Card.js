import React from 'react';
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <img src={props.image} alt={props.id} id={props.id}
                onClick={() => props.clickyGame(props.id)}></img>
        </div>
    );
};
 
export default Card;