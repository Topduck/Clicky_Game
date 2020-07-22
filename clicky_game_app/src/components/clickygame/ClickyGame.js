import React, { Component } from 'react';
import PicDisplay from '../picdisplay/PicDisplay'
import ScoreKeeper from '../scorekeeper/ScoreKeeper'
import ducks from '../data/ducks.json';
import Card from '../card/Card';

class ClickyGame extends Component {
    state = {
        ducks,
        clickedPicIds: [],
        score: 0,
        topscore: 0,
        goal:12,
        status:""
    }
    clickyGame = id => {
        let clickedPicIds = this.state.clickedPicIds;
        let Score = this.state.score;
        let topScore = this.state.topscore;
        console.log(`duck id: ${id}`)

        if(clickedPicIds.includes(id)){
            this.setState({clickedPicIds: [], score:0, status: "Whoops! you already licked that one. Game Over! click to play again"})
            console.log(this.state.status)
            return;
        }else{
            clickedPicIds.push(id)
            if(clickedPicIds.length === 12){
                this.setState({clickedPicIds: [], score:12, status: "You Won! click to play again!"});
                console.log(this.state.status)
                return;
            }
                this.setState({ducks, clickedPicIds, score: clickedPicIds.length, status: "active game"});
                console.log(this.state.status)

                for (let i = ducks.length -1; i>0;i--){
                   let x =Math.floor(Math.random() * (i+1));
                   [ducks[i], ducks[x]] = [ducks[x], ducks[i]];
                }
        }
        if(Score > topScore){
            this.setState({topscore: Score+1});
        }
    }

    updateValue = (event) => {
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                <ScoreKeeper scores={this.state}/>
                <PicDisplay>
                    {this.state.ducks.map(duck => (
                        <Card
                            clickyGame={this.clickyGame}
                            key={duck.id}
                            id={duck.id}
                            image={duck.image} 
                        />
                    ))}
                </PicDisplay>
            </div>
        );
    }
}

export default ClickyGame;