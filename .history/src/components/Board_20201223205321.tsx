import React, { Component, Fragment } from 'react';
import Square from './Square';
import { generateTilesArray } from '../utils/generateTilesArray';
import { BoardProps, BoardStoreState } from '../types';
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

	handleClick(i: number) {
		const squares = [...this.props.squares];

		if (calculateWinner(squares) || squares[i]) return;

		squares[i] = this.props.isXNext ? 'X' : 'O';
		this.setState(() => ({
			isXNext: !this.state.isXNext,
			squares,
		}));
	}

	renderBoard() {
		const squares = this.props.squares;
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

function calculateWinner(squares: any[]) {

	return null;
}