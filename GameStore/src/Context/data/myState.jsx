import React, { useState } from 'react'
import myContext from './myContext'

function Mystate(props) {

	const [mode,setMode] = 	useState('light');

	const toggleMode = () => {
		if(mode == 'light')
			{
					setMode('dark');
					document.body.style.backgroundColor = "rgb(24, 24, 24)"
			}
		else
		{
			setMode('light');
			document.body.style.backgroundColor = "white"
		}
	}
	return (
		<myContext.Provider value ={{mode,toggleMode}}>
			{props.children}
		</myContext.Provider>
	)
}

export default Mystate
