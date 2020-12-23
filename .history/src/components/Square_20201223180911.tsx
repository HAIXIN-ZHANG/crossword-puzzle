import React from 'react';


export const Square = (props): JSX.Element => {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
