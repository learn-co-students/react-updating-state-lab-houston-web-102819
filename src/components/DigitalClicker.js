import React from "react";

export default class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    incrementClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: (previousState.timesClicked + 1)
            }
        })
    }
    
    render(){
        return <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
    }
}