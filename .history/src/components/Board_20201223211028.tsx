import React, { Component, Fragment } from 'react';
import Square from './Square';
import { generateTilesArray } from '../utils/generateTilesArray';
import { BoardProps, BoardStoreState } from '../types';
import {
	isEmpty
} from 'lodash';
class Board extends Component<BoardProps, BoardStoreState> {
	constructor(props: BoardProps | Readonly<BoardProps>) {
		super(props);
		this.state = {
			squares: Array(225).fill(null),
			isXNext: true,
			tilesBag: Array(100).fill(null),
			rackA: Array(7).fill(null),
			rackB: Array(7).fill(null),
			currentPlayer: 'Player A'
		};
	}

    componentDidMount() {
		const tilesBag = generateTilesArray();
		this.setState({
			tilesBag
		})
	}

	componentDidUpdate() {
	}

	handOutTilesToPlayer = () => {
		if
	}

	handleClick = (i: number) => {
		const squares = [...this.state.squares];

		if (calculateWinner(squares) || squares[i]) return;

		squares[i] = this.state.isXNext ? 'X' : 'O';
		this.setState(() => ({
			isXNext: !this.state.isXNext,
			squares,
		}));
	}

	renderBoard() {
		const squares = [...this.state.squares];
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
		console.log(this.state.tilesBag);

		const winner = calculateWinner(this.state.squares);
		const status = winner
			? `Winner: ${winner}`
			: `Next player: ${this.state.isXNext ? 'X' : 'O'}`;

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

function calculateWinner(squares: any[]) {
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