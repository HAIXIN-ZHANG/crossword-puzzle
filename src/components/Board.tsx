import React, { Component, Fragment } from 'react';
import Square from './Square';
import { BoardProps, BoardStoreState } from '../types';
import { generateTilesArray } from '../utils/generateTilesArray';
import { getHorizontallyLetters, getVerticallyLetters, checkWhetherValidWord } from '../utils/handleCheckWord';
import { readDictionary } from '../utils/readDictionary';
import { isEmpty } from 'lodash';
class Board extends Component<BoardProps, BoardStoreState> {
	constructor(props: BoardProps | Readonly<BoardProps>) {
		super(props);
		this.state = {
			squares: Array(225).fill(null),
			tilesBag: [],
			rackA: [],
			rackB: [],
			scoreA: 0,
			scoreB: 0,
			currentPlayer: 'Player A',
			dictionaryWord: []
		};
	}

	async componentDidMount() {
		const tilesBag = generateTilesArray();
		const dictionaryWord = readDictionary();
		await this.setState({
			tilesBag,
			dictionaryWord
		});
		this.handOutTilesToPlayer();
	}

	calculateWinner = () => {
		if (isEmpty(this.state.rackA) && isEmpty(this.state.rackB) && isEmpty(this.state.tilesBag)) {
			if(this.state.scoreA > this.state.scoreB) {
				return 'winner is PlayerA';
			}
			if(this.state.scoreA < this.state.scoreB) {
				return 'winner is PlayerB';
			}
			if(this.state.scoreA === this.state.scoreB) {
				return 'No winner';
			}
		}
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
		const dictionaryWord = this.state.dictionaryWord;
		const winner = this.calculateWinner();
		if(winner) return;
		if (squares[i]) return;
		if(this.state.currentPlayer === 'Player A') {
			let rackForA = this.state.rackA;
			if(!isEmpty(rackForA)) {
				const horizontallyWordArray = getHorizontallyLetters(squares, i);
				const verticallyWordArray = getVerticallyLetters(squares, i);
				const score = checkWhetherValidWord(horizontallyWordArray, verticallyWordArray, dictionaryWord);
				squares[i] = rackForA[0];
				rackForA.shift();
				this.setState({
					squares,
					rackA: rackForA,
					scoreA: this.state.scoreA + score
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
				const horizontallyWordArray = getHorizontallyLetters(squares, i);
				const verticallyWordArray = getVerticallyLetters(squares, i);
				const score = checkWhetherValidWord(horizontallyWordArray, verticallyWordArray, dictionaryWord);
				squares[i] = rackForB[0];
				rackForB.shift();
				this.setState({
					squares,
					rackB: rackForB,
					scoreB: this.state.scoreB + score
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
		const winner = this.calculateWinner();
		return (
			<div>
				<div className="game-header-wrapper">
					<div className="game-rules-container">
						<div className="game-rules game-rules-title">
							<p>Game info goes here</p>
						</div>
						<div className="game-rules">
							<p>
								Game Rules: Total 100 tiles. Each player get 7 tiles from the bag that they put on the rack.
							</p>
							<p>
								Total 100 tiles. Each player get 7 tiles from the bag that they put on the rack.
							</p>
							<p>
								The player gets points equal to the number of letters in the word.
							</p>
						</div>
					</div>
					<div className="game-info-container">
						<div>
							<p>Now is {this.state.currentPlayer} turn</p>
						</div>
						<div>
							<span>Player A‘s next letter:</span>
							<span>[{this.state.rackA[0]}]</span>
							<p>Player A‘s score:[{this.state.scoreA}]</p>
						</div>
						<div>
							<span>Player B‘s next letter:</span>
							<span>[{this.state.rackB[0]}]</span>
							<p>Player B‘s score:[{this.state.scoreB}]</p>
						</div>
					</div>
				</div>
				{!winner && (
					<Fragment>
						<div className="board-container">
							{this.renderBoard()}
						</div>
					</Fragment>
				)}
				{winner && (
					<Fragment>
						<div className="game-winner-title">
							{winner}
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default Board;
