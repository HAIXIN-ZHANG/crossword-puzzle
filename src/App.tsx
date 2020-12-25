import React from 'react';
import Board from './pages/gameBoard/Board';
import './App.scss';

function App() {
  return (
	<div className="game">
		<div className="game-app-container">
			<Board/>
		</div>
	</div>
  );
}
export default App;
