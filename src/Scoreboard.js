import React from 'react'

class Scoreboard extends React.Component {

// componentDidUpdate() {
//   if (score !== this.state.score)
//   this.setState({score: score})
// }

render(){
    return(
      <div>
        <div>
         Scoreboard:
        </div>
        <div>
          Wins: {this.props.score.wins}, Losses: {this.props.score.losses}, Ties: {this.props.score.ties}  
        </div>
      </div>
    )
  }
}

export default Scoreboard