import React, { Component } from 'react';
import PicDisplay from '../picdisplay/PicDisplay'
import ScoreKeeper from '../scorekeeper/ScoreKeeper'
import ducks from '../data/ducks.json'

class ClickyGame extends Component {
    state = {
        clickedPicids: [],
        score: 0,
        topscore: 0,
        status:""
    }
    updateValue = (event) => {
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <ScoreKeeper scores={this.state}/>
                <PicDisplay 
                //shufflePics={this.shufflePics}
                list = {ducks}/>
            </div>
        );
    }
}

export default ClickyGame;