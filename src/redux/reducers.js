import {CHANGE_USER_INPUT_TEXT} from './constants.js';
import {CHANGE_USER_INPUT_STYLE} from './constants.js';
import {CHANGE_USER_COLOR_SELECT} from './constants.js';
import {CHANGE_USER_FONT_SIZE} from './constants.js';

const initialState = {
	userInput: {
        inputText:'',
        inputStyle:'',
        colorSelect:'',
        fontSize:''
    }
}

export const getUserInput = (state=initialState,action={}) => {

	switch(action.type){
		
		//Input text  case:
		case CHANGE_USER_INPUT_TEXT:
			return Object.assign({},state,{
											userInput:{
												inputText:action.payload,
										        inputStyle:state.userInput.inputStyle,
										        colorSelect:state.userInput.colorSelect,
										        fontSize:state.userInput.fontSize
											}
								    });
		
		//Input style  case:
		case CHANGE_USER_INPUT_STYLE:
			return Object.assign({},state,{
											userInput:{
												inputText:state.userInput.inputText,
										        inputStyle:action.payload,
										        colorSelect:state.userInput.colorSelect,
										        fontSize:state.userInput.fontSize
											}
								    });

		//Input color select  case:
		case CHANGE_USER_COLOR_SELECT:
			return Object.assign({},state,{
											userInput:{
												inputText:state.userInput.inputText,
										        inputStyle:state.userInput.inputStyle,
										        colorSelect:action.payload,
										        fontSize:state.userInput.fontSize
											}
								    });


		//Input font size  case:
		case CHANGE_USER_FONT_SIZE:
			return Object.assign({},state,{
											userInput:{
												inputText:state.userInput.inputText,
										        inputStyle:state.userInput.inputStyle,
										        colorSelect:state.userInput.colorSelect,
										        fontSize:action.payload
											}
								    });


		default:
			return Object.assign({userInput:{
												inputText:'',
										        inputStyle:'',
										        colorSelect:'',
										        fontSize:''
											}});
	}
}