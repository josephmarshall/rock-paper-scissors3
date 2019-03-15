import React from 'react'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'
import largeX from './x.png'

class Player extends React.Component {

  render(){
    return(
      <div style={{display: "flex"}} >
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
          <img style={selectPictureStyle} src={rock} alt="rock" onClick={() => this.props.playerChoice("rock")} />
          <img style={selectPictureStyle} src={paper} alt="paper" onClick={() => this.props.playerChoice("paper")} />
          <img style={selectPictureStyle} src={scissors} alt="scissors" onClick={() => this.props.playerChoice("scissors")} />
        </div>
        <div style={{display: "grid", height: "300px", width: "300px"}}>
          <img className="layer1" style={{height: "300px"}} alt="playerChoice" src={this.props.displayChoice(this.props.player)} />
          {this.props.loser && <img className="layer2" src={largeX} alt="x" />}
        </div>
      </div>      
    )
  }
}

const selectPictureStyle = {
  height: "50px",
  width: "50px",
}
export default Player