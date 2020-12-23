import React, { Component, Fragment } from 'react';
import Square from './Square';
import { generateTilesArray } from '../utils/generateTilesArray';
import { BoardProps, BoardStoreState } from '../types';
import { isEmpty } from 'lodash';
class Board extends Component<BoardProps, BoardStoreState> {
	constructor(props: BoardProps | Readonly<BoardProps>) {
		super(props);
		this.state = {
			squares: Array(225).fill(null),
			isXNext: true,
			tilesBag: [],
			rackA: [],
			rackB: [],
			currentPlayer: 'Player A'
		};
	}

	async componentDidMount() {
		const tilesBag = generateTilesArray();
		await this.setState({
			tilesBag
		});
		this.handOutTilesToPlayer();
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	handOutTilesToPlayer = async () => {
		if(isEmpty(this.state.rackA)) {
			await this.setState({
				rackA: this.state.tilesBag.slice(0, 7),
				tilesBag: this.state.tilesBag.slice(7),
			})
		}
		if(isEmpty(this.state.rackB)) {
			await this.setState({
				rackB: this.state.tilesBag.slice(0, 7),
				tilesBag: this.state.tilesBag.slice(7),
			})
		}
	}

	handleClick = (i: number) => {
		const squares = [...this.state.squares];

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
		const winner = false;
		// const winner = calculateWinner(this.state.squares);
		// const status = winner
		// 	? `Winner: ${winner}`
		// 	: `Next player: ${this.state.isXNext ? 'X' : 'O'}`;

		return (
			<div>
				<div className="status">{status}</div>
				<div className="game-info">
					<p>Game info goes here</p>
				</div>
				<div className="game-info">
					<div></div>
				</div>
				<div>
					<p>Player A‘s rack:[{this.state.rackA}]</p>
				</div>
				<div>
					<p>Player B‘s rack:[{this.state.rackB}]</p>
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

// function calculateWinner(squares: any[]) {
// 	const lines = [
// 	  [0, 1, 2],
// 	  [3, 4, 5],
// 	  [6, 7, 8],
// 	  [0, 3, 6],
// 	  [1, 4, 7],
// 	  [2, 5, 8],
// 	  [0, 4, 8],
// 	  [2, 4, 6],
// 	];
// 	for (let i = 0; i < lines.length; i++) {
// 	  const [a, b, c] = lines[i];
// 	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// 		return squares[a];
// 	  }
// 	}
// 	return null;
// }