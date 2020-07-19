import React, { Component } from 'react';
import PicDisplay from '../picdisplay/PicDisplay'
import ScoreKeeper from '../scorekeeper/ScoreKeeper'

class ClickyGame extends Component {
    state = {
        score: 0,
        topscore: 0,
        pic1: 0,
        pic2: 0,
        pic3: 0,
        pic4: 0
    }
    updateValue = (event) => {
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <ScoreKeeper scores={this.state}/>
                <PicDisplay/>
            </div>
        );
    }
}

export default ClickyGame;