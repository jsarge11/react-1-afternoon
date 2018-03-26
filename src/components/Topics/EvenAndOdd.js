import React, {Component} from 'react'

export default class EvenAndOdd extends Component {
 constructor() {
  super();

  this.state = {
   evenArray: [],
   oddArray: [],
   userInput: '',
  }
 }

 updateInput(e) {
  this.setState({ 
   userInput: e,
  })
 }
 solveProblem() {
  let newStr = this.state.userInput.split(' ');
  let newEvenArr = newStr.filter((item)=> item % 2 === 0);
  let newOddArr = newStr.filter((item)=> item % 2 !== 0);


  this.setState({ 
   evenArray: newEvenArr,
   oddArray: newOddArr,
   userInput: ''
  })
 }

 render() {

  return(
   <div className="puzzleBoxevenandOddPB">
    <h4>Evens and Odds</h4>
    <input className="inputLine" onChange={(e)=>this.updateInput(e.target.value)} value={this.state.userInput}/>
    <button className="confirmationButton" onClick={()=>this.solveProblem()}></button>
    <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>
    <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>


   </div>
  );
 }
}
