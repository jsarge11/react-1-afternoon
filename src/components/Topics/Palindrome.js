import React, {Component} from 'react'

export default class Palindrome extends Component {
 constructor() {
  super()

  this.state = {
   userInput: '',
   palindrome: '',
   isPalindrome: ''
  }
 }
 onChange(e) {
  this.setState({ 
   userInput: e
  })
 }
 onClick() {
  let isTrue = (this.state.userInput === this.state.userInput.split('').reverse().join('')) ? true : false
  
  this.setState({ 
   palindrome: this.state.userInput,
   isPalindrome: isTrue ? 'true' : 'false',
   userInput: ''
  })
 }
 render() {
  return(
   <div className="puzzleBox filterStringPB">
    <h4>Palindrome</h4>
    <input className="inputLine" onChange={(e)=>this.onChange(e.target.value)} value={this.state.userInput}/>
    <button className="confirmationButton" onClick={()=>this.onClick()}></button>
    <span className="resultsBox">{this.state.palindrome}<br/><br/>Is Palindrome: {this.state.isPalindrome}</span>
   </div>
  );
 }
}
