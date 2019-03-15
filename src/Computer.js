import React from 'react'
import largeX from './x.png'

class Computer extends React.Component {

  render(){
    return(
      <div style={{display: "grid", height: "300px", width: "300px"}}>
        <img className="layer1" style={{height: "300px"}} alt="computerChoice" src={this.props.displayChoice(this.props.computer)} />
        {this.props.loser && <img className="layer2" src={largeX} alt="x" />}
      </div>
    )
  }
}

export default Computer