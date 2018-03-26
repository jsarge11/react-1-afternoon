import React, {Component} from 'react'

export default class Sum extends Component {
 constructor() {
  super()
  this.state = {
   number1: 0,
   number2: 0,
   sum: 0
  }
 }

 updateInput(item) {
  this.setState({ 
   number1: item
  })
 }
 updateInput2(item) {
  this.setState({ 
   number2: item
  })
 }
 calculate() {
  this.setState({ 
   sum: parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10),
   number1: 0,
   number2: 0
  })
 }
 render() {
  

  return(
   <div className="puzzleBox sumPB">
    <h4>Sum</h4>
    <input className="inputLine" onChange={(e)=>this.updateInput(e.target.value)} value={this.state.number1}/>
    <input className="inputLine" onChange={(e)=>this.updateInput2(e.target.value)} value={this.state.number2}/>
    <button className="confirmationButton" onClick={()=>this.calculate()}></button>
    <span className="resultsBox">Sum: {this.state.sum}</span>
   </div>
  );
 }
}
