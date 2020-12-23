import React from 'react';


const Square = (props): JSX.Element => {
	return (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Square;