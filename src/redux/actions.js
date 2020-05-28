import {CHANGE_USER_INPUT_TEXT} from './constants.js';
import {CHANGE_USER_INPUT_STYLE} from './constants.js';
import {CHANGE_USER_COLOR_SELECT} from './constants.js';
import {CHANGE_USER_FONT_SIZE} from './constants.js';


export const setUserInputText = (text) =>{

	console.log('actions.js - text:',text);

	return(
		{
			type: CHANGE_USER_INPUT_TEXT,
			payload:text
		}
	)
}

export const setUserInputStyle = (style) =>{

	console.log('actions.js - style:',style);

	return(
		{
			type: CHANGE_USER_INPUT_STYLE,
			payload:style
		}
	)
}

export const setUserColorSelect = (color) =>{

	console.log('actions.js - color:',color);

	return(
		{
			type: CHANGE_USER_COLOR_SELECT,
			payload:color
		}
	)
}

export const setUserFontSize = (fontSize) =>{

	console.log('actions.js - fontSize:',fontSize);

	return(
		{
			type: CHANGE_USER_FONT_SIZE,
			payload:fontSize
		}
	)
}