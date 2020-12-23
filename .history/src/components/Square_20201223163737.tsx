import React from 'react';

function Square(props: string) {
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