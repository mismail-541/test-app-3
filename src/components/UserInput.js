import React from 'react';

//import style sheet:
import './UserInput.css';

const UserInput = (props) => {
  
  	//Extract input text from props:
	const inputText = props.inputText;

	//Extract the selected color from props:
	const colorSelect = props.colorSelect;

	//Extract the set font size from props:
	const fontSize = props.fontSize;
	
	//Get the user input text ACTION from props:
	const onUserInputChange = props.onUserInputChange;

	//Get the user input Style ACTION from props:
	const onStyleInputChange = props.onStyleInputChange;

	//Get the user color selection ACTION from props:
	const onColorSelectChange = props.onColorSelectChange;

	//Get the user font size set ACTION from props:
	const onFontSizeChange = props.onFontSizeChange;

  return (
    <div className='user-input-form'>
    		
    		<label htmlFor="style-selector" className='user-input-form-label'>Select Style</label>
	    	<select name="style-selector" onChange={onStyleInputChange} className='user-input-form-element'>
	    	  <option value="">Please Select a Style</option>
	          <option value="style-1">Style 1</option>
	          <option value="style-2">Style 2</option>
	          <option value="style-3">Style 3</option>
	      	</select>
    	
			<label htmlFor="user-input" className='user-input-form-label'>Input Text</label>
			<input name="user-input" 
			       type='text' 
			       placeholder='Enter Your Text' 
			       onChange={onUserInputChange}
			       className='user-input-form-element'/>
			
			<label htmlFor="color-picker" className='user-input-form-label'>Color Selection</label>
			<input type="color" 
			       id="head" 
			       name="color-picker"
           		   value={colorSelect}
           		   onChange={onColorSelectChange}
           		   className='user-input-form-element'/>


			<label htmlFor="font-sizer" className='user-input-form-label'>Font Size</label>
			<input type="number" 
			       id="head" 
			       name="font-sizer"
           		   value={fontSize}
           		   onChange={onFontSizeChange}
           		   className='user-input-form-element user-input-form-element-font-size'/>

				
	</div>
  )
}

export default UserInput;