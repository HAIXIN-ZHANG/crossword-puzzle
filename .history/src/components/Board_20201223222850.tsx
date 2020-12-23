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
			scoreA: 0,
			scoreB: 0,
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
		if (isEmpty(this.state.tilesBag)) return;
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
		const squares = this.state.squares;
		if (squares[i]) return;
		if (isEmpty(this.state.rackA) && isEmpty(this.state.rackB) && isEmpty(this.state.tilesBag)) return;
		if(this.state.currentPlayer === 'Player A') {
			let rackForA = this.state.rackA;
			if(!isEmpty(rackForA)) {
				squares[i] = rackForA[0];
				rackForA.shift();
				this.setState({
					squares,
					rackA: rackForA
				});
			}else {
				this.setState({
					currentPlayer: 'Player B'
				});
				this.handOutTilesToPlayer();
			};
		}
		if(this.state.currentPlayer === 'Player B') {
			let rackForB = this.state.rackB;
			if(!isEmpty(rackForB)) {
				squares[i] = rackForB[0];
				rackForB.shift();
				this.setState({
					squares,
					rackB: rackForB
				})
			}else {
				this.setState({
					currentPlayer: 'Player A'
				});
				this.handOutTilesToPlayer();
			};
		}
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
				<div>
					<p>Total tiles left:[{this.state.tilesBag.length}]</p>
				</div>
				<div className="game-info">
					<p>Now is {this.state.currentPlayer} turn</p>
				</div>
				<div>
					<p>Player A‘s next letter:[{this.state.rackA[0]}]</p>
					<p>Player A‘s score:[{this.state.scoreA}]</p>
				</div>
				<div>
					<p>Player B‘s next letter:[{this.state.rackB[0]}]</p>
					<p>Player B‘s score:[{this.state.scoreB}]</p>
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