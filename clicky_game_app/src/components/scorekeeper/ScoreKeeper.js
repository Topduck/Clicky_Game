import React from 'react';

const ScoreKeeper = ({scores}) => {
    const {score, topscore} = scores
    //const scoresString = `Score: ${score}, Top Score: ${topscore}`
    console.log(score)
    return (
        <div>
            <h2>Score: {score}, Top Score: {topscore}</h2>
        </div>
    );
};

export default ScoreKeeper;