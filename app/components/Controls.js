import React from 'react';

const Controls = (props) =>(
	<div id='controls-box'>
		<div onClick={props.shuffle} className='button green'>SHUFFLE</div>
	
		{
			props.deck == 0 ? <div onClick={props.reset} className='button red'>RESET</div> :
			<div onClick={props.deal} className='button green'>DEAL</div>
		}
	
		<span>
		{
			props.dealt.length == 0 ? null : 
			`Last dealt: ${props.dealt[props.dealt.length-1].name}`
		}
		</span>

	</div>
)


	


export default Controls;