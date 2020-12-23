import React from 'react';

const Square = (props: string): JSX.Element => {
	return: JSX.Element (
		<button
			className="square"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Square;