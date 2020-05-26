import React from 'react';

// import App.css style sheet:
import './App.css';

// import Title.css  style sheet:

//Import user input component:
import UserInput from '../components/UserInput.js';

//Import the WordArt component to be Generated:
import GeneratedWordArt from '../components/GeneratedWordArt.js';

//Import the title component:
import  Title from './Title.js';

export default class App extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      userInput: {
        inputText:'',
        inputStyle:'',
        colorSelect:'',
        fontSize:''
      }
    }
  }

  //Handle user input. Pass as action.
  onUserInputChange = (event)=>{
    
      this.setState(
        Object.assign(this.state,{
          userInput: {
            inputText:event.target.value,
            inputStyle:this.state.userInput.inputStyle,
            colorSelect:this.state.userInput.colorSelect,
            fontSize:this.state.userInput.fontSize
          } 
        })
      )    
  }

  onStyleInputChange = (event) =>{
  
    console.log('aaaaaa')

    this.setState(
        Object.assign(this.state,{
          userInput: {
            inputText:this.state.userInput.inputText,
            inputStyle:event.target.value,            
            colorSelect:this.state.userInput.colorSelect,
            fontSize:this.state.userInput.fontSize
          } 
        })
      )   
  }

  onColorSelectChange = (event) =>{
  
    console.log('aaaaaa')

    this.setState(
        Object.assign(this.state,{
          userInput: {
            inputText:this.state.userInput.inputText,
            inputStyle:this.state.userInput.inputStyle,            
            colorSelect:event.target.value,
            fontSize:this.state.userInput.fontSize
          } 
        })
      )   
  }

  onFontSizeChange = (event) =>{
  
    this.setState(
        Object.assign(this.state,{
          userInput: {
            inputText:this.state.userInput.inputText,
            inputStyle:this.state.userInput.inputStyle,            
            colorSelect:this.state.userInput.colorSelect,
            fontSize:event.target.value+'px'
          } 
        })
      )   
  }


  

  //Print current state value:
  onClickPrintState = ()=>{
    console.log('##### Current State is:',this.state.userInput)
  }


  render() {

    

    return (
      <div className='component-container'>

        <div style={{backgroundColor: "red"}}>
          <Title></Title>
        </div>
      
        <div style={{backgroundColor: "blue"}}>
           <UserInput inputText={this.state.userInput.inputText}
                   inputStyle={this.state.userInput.inputStyle} 
                   colorSelect={this.state.userInput.colorSelect}
                   onUserInputChange={this.onUserInputChange}
                   onStyleInputChange={this.onStyleInputChange}
                   onColorSelectChange={this.onColorSelectChange}
                   onFontSizeChange={this.onFontSizeChange}/>
/**/
          {<button onClick={this.onClickPrintState}>Print State</button>}
        </div>
        
        <div style={{backgroundColor: "#B4B4B4"}}>
            <GeneratedWordArt userInput={this.state.userInput}/>
        </div>
        
        <div><h2>nothing</h2></div>
      </div>
    );
  }
}
