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
                    <img className={"tile"} key={this.props.champion_id} onClick={this.handleClick} src={this.props.src} alt={this.props.champion_name + " tile"}/>
                </div>
                <div>
                    <img className={"tile"} key={this.props.champion_id} onClick={this.handleClick} src={this.props.back_src} alt={"Back of " + this.props.champion_name + " tile"}/>
                </div>
            </ReactCardFlip>
        )
    }
}



// import React, { Component } from 'react';
// import './Tile.css'

// export default class Tile extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // champion_id: this.props.champion_id,
//             // champion_name: this.props.champion_name,
//             // src: this.props.src,
//             // back_src: this.props.back_src,
//             is_flipped: false
//         }
//     }
    
//     flip = e => {
//         this.setState({
//             is_flipped: !this.state.is_flipped
//         })
//     }

//     render() {
//         return(
//             <div className={this.state.is_flipped ? "f1_container active" : "f1_container"} onClick={this.flip} >
//                 <div className="shadow f1_card">
//                     <div className="front face">
//                         <img key={this.props.champion_id} src={this.props.src} alt={this.props.champion_name + " tile"}/>
//                     </div>
//                     <div className="back face center">
//                         <img key={this.props.champion_id} src={this.props.back_src} alt={"Back of " + this.props.champion_name + " tile"}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }