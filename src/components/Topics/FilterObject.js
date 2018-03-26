import React, {Component} from 'react'

export default class FilterObject extends Component {
 constructor() {
  super();

  this.state = {
   unFilteredArray: [{name: 'jay', age: 25, race: 'swedish', canFly: true},{name: 'katie', age: 24, race: 'montanan', blonde: true}, {name: 'pehzman', age:39, race: 'turkish', isCrazy: true},{name: 'boreeek', green: true, isAClown: false, eatsChildren: true, race: 'alien' }],
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
   let newArr = this.state.unFilteredArray.filter((item)=>item.hasOwnProperty(this.state.userInput));
   console.log(newArr);
  // var boolean = this.state.unFilteredArray[0].hasOwnProperty(this.state.userInput);
  // console.log(boolean);

  this.setState({ 
   filteredArray: newArr,
   userInput: '',
  })
 }
 render() {
  let display = this.state.filteredArray.map((item, i)=>{
   return(
   <div key={i}>
    {item.name}
   </div>
   );
  });

  return(
  <div className="puzzleBox filterObjectPB">
   <h4>Filter Object</h4>
   <span className="puzzleText"></span>
   <input className="inputLine" onChange={(e)=>this.updateInput(e.target.value)} value={this.state.userInput}/>
   <button className="confirmationButton" onClick={()=>this.solveProblem()}></button>
   <span className="resultsBox filterObjectRB">{display}</span>
  </div>
  );
 }
}
