import React from 'react';
import Card from '../card/Card'

const PicDisplay = ({list}) => {
    const duckPics = list.map((duck, index) =>{
        return <Card key={index} id={duck.id} image={duck.image} />
    })
    return (
        <div className = "container">
            {duckPics}
        </div>
    );
};
export default PicDisplay;