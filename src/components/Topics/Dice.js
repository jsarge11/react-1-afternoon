import React from 'react'

class Dice extends React.Component {
 constructor() {
  super()

  this.state = {
   rolls: {
    rollNumber: 0,
    diceNumber: 0,
    rollValue: 0
   },
   sides: 0,
   rollArray: [{}],
   roll_avg: 0,
   roll_sum: 0,
   total_avg: 0,
   total_sum: 0,
   
  }
 }

updateRolls(item) {
  let newItem = Object.assign({}, this.state.rolls);   //creating copy of object
  newItem.rollNumber = item;    
  newItem.diceNumber = this.state.rolls.diceNumber;

  this.setState({rolls: newItem});
}
updateSides(item) {
  this.setState({ sides: item })
}
updateDice(item) {
  let newItem = Object.assign({}, this.state.rolls);   //creating copy of object
  newItem.diceNumber = item;    
  newItem.rollNumber = this.state.rolls.rollNumber

  this.setState({rolls: newItem});
  
}

rollDice() {
 
const {diceNumber} = this.state.rolls;
const {rollNumber} = this.state.rolls;
 let avg;
 let roll;
 let runningTotal = 0;
 let runningAvg = 0;
    //  let finalString = '';
 let newArr = [{}];
 
  for (var j = 1; j <= diceNumber; j++){
    console.log("Running dice: " + j);
    let sum = 0;
    // finalString += "<----------Dice Roll: " + i + '---------->'+ '\n\n';
    // we need to add a title --> do not forget
   
    for (let i = 1; i <= rollNumber; i++) {
      console.log("Running time: " + i);
      roll = Math.floor(Math.random() * this.state.sides) + 1;

      newArr.push({rollNumber: i, diceNumber: j, rollValue: roll});

      sum += roll;
      avg = sum / rollNumber; 
    }
    console.log(`${runningAvg} plus ${avg} is being divided by ${j}`);
    runningAvg = (runningAvg + avg) / j;
    console.log(`and it equals ${runningAvg}`);

    runningTotal += sum;
    
    this.setState({ 
      rollArray: newArr,
      roll_avg: avg,
      roll_sum: sum,
      total_avg: runningAvg,
      total_sum: runningTotal
    })
  }
 
}
 render() {
  let structureRolls = this.state.rollArray.map((e,i, arr)=> {
    return(
      <div key={e+i}>
        <p>Roll Number {e.rollNumber} On Dice: {e.diceNumber} </p>
        <p>{e.rollValue}</p>
      </div>
    );
  })
  
  let listOfThings = 
  <div>
    <div>{structureRolls}</div>
    <div>Avg: {this.state.roll_avg}</div>
    <div> Roll Sum: {this.state.roll_sum}</div>
    <div> Total Average: {this.state.total_avg}</div>
    <div> Total Sum: {this.state.total_sum}</div>
  </div>

  return (
   <div className="puzzleBox" id="overFlow">
    <h4>Dice</h4>
    <div className="headerContainer">
     <span>Rolls<input onChange={((e)=>this.updateRolls(e.target.value))} id="first" maxLength="2" className="headerBox" type="text" required/></span>

     <span>Sides<input onChange={((e)=>this.updateSides(e.target.value))} maxLength="1" className="headerBox" type="text"/></span>

     <span>Dice<input onChange={((e)=>this.updateDice(e.target.value))} id="second" maxLength="1" className="headerBox" type="text"/></span>
    </div>
    <div><button onClick={()=>this.rollDice()}className="confirmationButton"></button></div>
    <div className="resultsBox" id="overFlowResult">{listOfThings}</div>
   </div>
  );
 }
}

export default Dice