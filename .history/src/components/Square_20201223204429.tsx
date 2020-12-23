import React from 'react';

function Square(props:
	{ onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; value: React.ReactNode; }
	): JSX.Element {
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