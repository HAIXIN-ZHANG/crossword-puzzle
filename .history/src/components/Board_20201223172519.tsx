import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import {
	updateSquares as updateSquaresAction,
	generateTilesBag as generateTilesBagAction
} from '../actions';
import generateTilesBag from '../utils/generateTilesBag';
import BoardStoreState from '../types'

interface BoardProps {

}

class Board extends Component {
    componentDidMount() {
		const tilesBag = generateTilesBag();
		this.props.generateTilesBag(tilesBag);
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

const mapStateToProps = (state: BoardStoreState) => ({
	isXNext: state.board.isXNext,
	squares: state.board.squares,
    tilesBag: state.board.tilesBag,
    rackA: state.board.rackA,
    rackB: state.board.rackB,
    currentPlayer: state.board.currentPlayer,
});

const mapDispatchToProps = dispatch => ({
	updateSquares: squares => dispatch(updateSquaresAction(squares)),
	generateTilesBag: tilesBag => dispatch(generateTilesBagAction(tilesBag))

})

export default connect(mapStateToProps, mapDispatchToProps)(Board);

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