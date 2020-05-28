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

/*Redux Imports*/
import {connect} from 'react-redux';

import {
        setUserInputText,
        setUserInputStyle,
        setUserColorSelect,
        setUserFontSize
       } from '../redux/actions.js';

const mapStateToProps = state => {

  return (
    {
      userInput: {
        inputText:state.userInput.inputText,
        inputStyle:state.userInput.inputStyle,
        colorSelect:state.userInput.colorSelect,
        fontSize:state.userInput.fontSize
      }
    }
  )
}

const mapDispatchToProps = (dispatch) => {

  return {
    onUserInputChange: (event)=> dispatch(setUserInputText(event.target.value)),
    onStyleInputChange: (event)=> dispatch(setUserInputStyle(event.target.value)),
    onColorSelectChange: (event)=> dispatch(setUserColorSelect(event.target.value)),
    onFontSizeChange: (event)=> dispatch(setUserFontSize(event.target.value))
  }
}


class App extends React.Component {
  

  constructor(props) {
    super(props);

    
  }

  

  //Handle user input. Pass as action.
  /*
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
    this.setState(
        Object.assign(this.state,{
          userInput: {
            inputStyle:event.target.value,            
            colorSelect:this.state.userInput.colorSelect,
            fontSize:this.state.userInput.fontSize
          } 
        })
      )   
  }

  onColorSelectChange = (event) =>{
  
    this.setState(
        Object.assign(this.state,{
          userInput: {
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
            inputStyle:this.state.userInput.inputStyle,            
            colorSelect:this.state.userInput.colorSelect,
            fontSize:event.target.value+'px'
          } 
        })
      )   
  }
*/

  

  //Print current state value:
  onClickPrintState = ()=>{
    console.log('##### Current State is:',this.state.userInput);

    console.log('App.js - checking state:',this.props.userInput);
  }


  render() {
    return (
      <div className='component-container'>

        <div style={{backgroundColor: "red"}}>
          <Title></Title>
        </div>
      
        <div style={{backgroundColor: "blue"}}>
           <UserInput inputText={this.props.userInput.inputText}
                   inputStyle={this.props.userInput.inputStyle} 
                   colorSelect={this.props.userInput.colorSelect}
                   fontSize={this.props.userInput.fontSize}
                   onUserInputChange={this.props.onUserInputChange}
                   onStyleInputChange={this.props.onStyleInputChange}
                   onColorSelectChange={this.props.onColorSelectChange}
                   onFontSizeChange={this.props.onFontSizeChange}/>
/**/
          {<button onClick={this.onClickPrintState}>Print State</button>}
        </div>
        
        <div style={{backgroundColor: "#B4B4B4"}}>
            <GeneratedWordArt userInput={this.props.userInput}/>
        </div>
        
        <div><h2>nothing</h2></div>
      </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);