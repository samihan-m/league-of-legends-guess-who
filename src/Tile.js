import React, { Component } from 'react';
import './Tile.css'
import ReactCardFlip from "react-card-flip";

export default class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    render() {
        return (
            <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipSpeedBackToFront={0.5}
                flipSpeedFrontToBack={0.5}
                flipDirection="vertical"
            >
                <div>
                    <img className={"tile"} onClick={this.handleClick} src={this.props.imageSrc} alt={this.props.championName + " tile"}/>
                    <div className={"tile-label"}>{this.props.championName}</div>
                </div>
                <div>
                    <img className={"tile"} onClick={this.handleClick} src={this.props.backImageSrc} alt={"Back of " + this.props.championName + " tile"}/>
                    <div className={"hidden-tile-label"}>‎</div>
                </div>
            </ReactCardFlip>
        )
    }
}