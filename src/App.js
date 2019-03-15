import React, { Component } from 'react';
import './App.css';
import Player from './Player'
import Computer from './Computer'
import Scoreboard from './Scoreboard'
import rock from "./rock.png"
import paper from "./paper.png"
import scissors from "./scissors.png"
import blank from "./blank.png"

class App extends Component {

  state = { player: "",
            computer: "",
            score: {wins: 0, losses: 0, ties: 0},
            outcome: ""
  }

  displayChoice = (choice) => {
    let chosenImage;
    switch (choice) {
      case "rock":
      chosenImage = rock
      break
      case "paper":
      chosenImage = paper
      break
      case "scissors":
      chosenImage = scissors
      break
      default:
      chosenImage = blank
    }
    return chosenImage
  }

  setPlayerChoice = (playerChoice) => {
    this.setState({player: playerChoice}, () => {this.setComputerChoice()})
  }

  setComputerChoice = () => {
    let compChoices = ["rock", "paper", "scissors"]
    let compRandChoice = Math.floor(Math.random() * 3) 
    this.setState({computer: compChoices[compRandChoice]}, () => { 
    this.calculateResult(this.state.player, this.state.computer)})
  }

  // componentDidUpdate(){
  //   let score = this.calculateResult(this.state.player, this.state.computer)
  //   if (score !== this.state.score){
  //   this.setState({score: score})
  //   }}

  calculateResult = (player, computer) => {
  
    let result;
    let score = this.state.score
    if (player===computer) {
      result= "tie"
      score.ties++
    } else if ((player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")) {
      score.wins++
      result = "win"
    } else {
      score.losses++
      result = "lose"
    }
  
    console.log(this.state.player)
    console.log(this.state.computer)
    console.log(result)
    this.setState({score: score})
    this.setState({outcome: result}, () => {
    this.playerLoser() 
    this.compLoser()})
    return score
  }

  playerLoser = () => this.state.outcome === "lose" ? true : false
  compLoser = () => this.state.outcome === "win" ? true : false
  
  
  render() {
    return (
      <div className="App">
        <h1>Paper Rock Scissors 3</h1>
        <div style={{display: "flex", alignItems: "center"}}>
          <Player loser={this.playerLoser()} displayChoice={this.displayChoice} playerChoice={this.setPlayerChoice} player={this.state.player} />
          <div style={{fontSize: "2em"}}>
          VS
          </div>
          <Computer loser={this.compLoser()} displayChoice={this.displayChoice} computer={this.state.computer} />
        </div>
          <Scoreboard score={this.state.score} />
      </div>
    );
  }
}

export default App;
