import React, { Component, Fragment } from 'react';
import { Square }from './Square';
import { generateTilesArray } from '../utils/generateTilesArray';
import { IBoardProps, IBoardStoreState } from '../types';


class Board extends Component<BoardProps, null> {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			isXNext: true,
		};
	}

    componentDidMount() {
		const tilesBag = generateTilesArray();
		this.props.handleGenerateTiles(tilesBag);
	}

	componentDidUpdate() {
	}

	handleClick(i) {
		const squares = [...this.props.squares];

		if (calculateWinner(squares) || squares[i]) return;

		squares[i] = this.props.isXNext ? 'X' : 'O';

		this.props.updateSquares(squares);
	}


	renderBoard() {
		const squares = [...this.props.squares];
		return squares.map(
			(square, i) => {
				return (
					<Square
						key={i}
						onClick={() => this.handleClick(i)}
						value={square}
					/>
				);
			}
		)
	}

	render() {

		const winner = calculateWinner(this.props.squares);
		const status = winner
			? `Winner: ${winner}`
			: `Next player: ${this.props.isXNext ? 'X' : 'O'}`;

		return (
			<div>
				<div className="status">{status}</div>
				<div className="game-info">
					<div>Game info goes here</div>
				</div>
				{!winner && (
					<Fragment>
						<div className="board-container">
							{this.renderBoard()}
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default Board;

function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return squares[a];
	  }
	}
	return null;
}