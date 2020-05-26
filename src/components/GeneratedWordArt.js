import React from 'react';

//import style sheet:
import './GeneratedWordArt.css';

const GeneratedWordArt = (props) => {
  	
  	//Extract input text from props:
   	const inputText = props.userInput.inputText;	

	//Extract input style from props:
	const inputStyle= props.userInput.inputStyle;

	//Extract selected color from props:
	const colorSelect = props.userInput.colorSelect;

	//Extract selected font size from props:
	const fontSize  = props.userInput.fontSize;


  return (
    <div className='generated-wordart'>
		<h1 className={inputStyle} style={{ color: `${colorSelect}`, fontSize: `${fontSize}`}}>{inputText}</h1>
    </div>
  )
}

export default GeneratedWordArt;