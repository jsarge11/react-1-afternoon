import React, {Component} from 'react'

export default class FilterString extends Component {

 constructor() {
  super();

  this.state = {
   unFilteredArray: ['happy','jay','thisIsFun','aliensEatChildren','starcraft', 'eagameschallengeeverything'],
   userInput: '',
   filteredArray: []
  }
 }

 updateInput(e) {
  this.setState({ 
   userInput: e,
  })
 }

 solveProblem() {
   let newArr = this.state.unFilteredArray.filter((item)=>item.includes(this.state.userInput));
   console.log(newArr)
   if (newArr.length <= 0) {
    newArr.push('None Found');
   }

  this.setState({ 
   filteredArray: newArr,
   userInput: '',
  })
 }
 render() {
  let display = this.state.filteredArray.map((item, i)=>{
   return(
   <div key={i}>
    {item}
   </div>
   );
  });

  return(
  <div className="puzzleBox filterStringPB">
   <h4>Filter String</h4>
   <span className="puzzleText"></span>
   <input className="inputLine" onChange={(e)=>this.updateInput(e.target.value)} value={this.state.userInput}/>
   <button className="confirmationButton" onClick={()=>this.solveProblem()}></button>
   <span className="resultsBox filterStringRB">{display}</span>
  </div>
  );
 }
}