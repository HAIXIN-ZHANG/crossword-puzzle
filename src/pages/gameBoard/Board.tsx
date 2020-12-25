import React, { Component, Fragment } from 'react';
import Square from './components/Square';
import { IBoardStoreState, IHandleHandOutTiles } from '../../interfaces';
import { isEmpty } from 'lodash';
import { PLAYER_A, PLAYER_B, PLAYER_A_TURN, PLAYER_B_TURN, SHUFFLE_AND_CHANG_PLAYER } from '../../constants'
import { generateTilesArray } from '../../utils/generateTilesArray';
import { getHorizontallyLetters, getVerticallyLetters, checkWhetherValidWord } from '../../utils/handleCheckWord';
import { readDictionary } from '../../utils/readDictionary';
import { calculateWinner } from '../../utils/calculateWinner';
import { handOutTilesToPlayer } from '../../utils/handleHandOutTiles';
class Board extends Component<any, IBoardStoreState> {
	constructor(props: any) {
		super(props);
		this.state = {
			squares: Array(225).fill(null),
			tilesBag: [],
			dictionaryWord: [],
			currentPlayer: PLAYER_A,
			notificationMessage: PLAYER_A_TURN,
			playerAInfo: {
				name: PLAYER_A,
				score: 0,
				rack: []
			},
			playerBInfo: {
				name: PLAYER_B,
				score: 0,
				rack: []
			}
		};
	};

	componentDidMount() {
		const dictionaryWord: Array<string> = readDictionary();
		const tilesBag: Array<string> = generateTilesArray();
		const tilesAndNewBag: IHandleHandOutTiles = handOutTilesToPlayer(tilesBag);
		this.setState({
			dictionaryWord,
			tilesBag: tilesAndNewBag.newTilesBag,
			playerAInfo: { ...this.state.playerAInfo, rack: tilesAndNewBag.rack }
		});
	};


	handleClick = (i: number) => {
		const squares: Array<string> = this.state.squares;
		const dictionaryWord: Array<string> = this.state.dictionaryWord;
		const tilesBag: Array<string> = this.state.tilesBag;
		const currentPlayerAScore: number = this.state.playerAInfo.score;
		const currentPlayerBScore: number = this.state.playerBInfo.score;
		const rackA: Array<string> = this.state.playerAInfo.rack;
		const rackB: Array<string> = this.state.playerBInfo.rack;
		let winner: string | null = null;
		let score: number;
		let horizontallyWordArray: Array<string> = [];
		let verticallyWordArray: Array<string> = [];
		let tilesAndNewBag: IHandleHandOutTiles;

		if(isEmpty(tilesBag) && isEmpty(rackA) && isEmpty(rackB)) {
			winner = calculateWinner(currentPlayerAScore, currentPlayerBScore);
		};

		if(!isEmpty(winner) || !isEmpty(squares[i])) return;

		if(this.state.currentPlayer === PLAYER_A) {
			if(!isEmpty(rackA)) {
				squares[i] = rackA[0];
				rackA.shift();
				horizontallyWordArray = getHorizontallyLetters(squares, i);
				verticallyWordArray = getVerticallyLetters(squares, i);
				score = checkWhetherValidWord(horizontallyWordArray, verticallyWordArray, dictionaryWord);
				this.setState({
					squares,
					notificationMessage: PLAYER_A_TURN,
					playerAInfo: { ...this.state.playerAInfo, rack: rackA, score: currentPlayerAScore + score }
				});
			}else {
				tilesAndNewBag = handOutTilesToPlayer(tilesBag);
				this.setState({
					currentPlayer: PLAYER_B,
					tilesBag: tilesAndNewBag.newTilesBag,
					notificationMessage: SHUFFLE_AND_CHANG_PLAYER,
					playerBInfo: { ...this.state.playerBInfo, rack: tilesAndNewBag.rack }
				});
			};
		};

		if(this.state.currentPlayer ===  PLAYER_B) {
			if(!isEmpty(rackB)) {
				squares[i] = rackB[0];
				rackB.shift();
				horizontallyWordArray = getHorizontallyLetters(squares, i);
				verticallyWordArray = getVerticallyLetters(squares, i);
				score = checkWhetherValidWord(horizontallyWordArray, verticallyWordArray, dictionaryWord);
				this.setState({
					squares,
					notificationMessage: PLAYER_B_TURN,
					playerBInfo: { ...this.state.playerAInfo, rack: rackB, score: currentPlayerBScore + score }
				});
			}else {
				tilesAndNewBag = handOutTilesToPlayer(tilesBag);
				this.setState({
					currentPlayer: PLAYER_A,
					tilesBag: tilesAndNewBag.newTilesBag,
					notificationMessage: SHUFFLE_AND_CHANG_PLAYER,
					playerAInfo: { ...this.state.playerAInfo, rack: tilesAndNewBag.rack }
				});
			};
		};
	};

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
				)
			}
		)
	};

	render() {
		const tilesBag: Array<string> = this.state.tilesBag;
		const rackA: Array<string> = this.state.playerAInfo.rack;
		const rackB: Array<string> = this.state.playerBInfo.rack;
		let winner: string | null = null;

		if(isEmpty(tilesBag) && isEmpty(rackA) && isEmpty(rackB)) {
			winner = calculateWinner(this.state.playerAInfo.score, this.state.playerBInfo.score);
		};

		return (
			<div>
				{!winner && (
					<div className="game-header-wrapper">
						<div className="game-rules-container">
							<div className="game-rules-title">
								<p>Game info goes here</p>
							</div>
							<div>
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
								<p>
									<span>Player A‘s next letter: </span>
									<span className="game-info-letter">[{this.state.playerAInfo.rack[0]}]</span>
								</p>
							</div>
							<div>
								<p>
									<span>Player B‘s next letter: </span>
									<span className="game-info-letter">[{this.state.playerBInfo.rack[0]}]</span>
								</p>
							</div>
							<div>
								<p>Player A‘s score: [{this.state.playerAInfo.score}]</p>
								<p>Player B‘s score: [{this.state.playerBInfo.score}]</p>
							</div>
						</div>
					</div>
				)}
				{!winner && (
					<div className="game-notification-container">
						<p>{this.state.notificationMessage}</p>
					</div>
				)}
				{!winner && (
					<Fragment>
						<div className="game-board-container">
							{this.renderBoard()}
						</div>
					</Fragment>
				)}
				{winner && (
					<Fragment>
						<div className="game-winner-title">
							<p>{winner}</p>
							<p>Thanks For Playing The Crossword Puzzle Game</p>
						</div>
					</Fragment>
				)}
			</div>
		);
	}
}

export default Board;
