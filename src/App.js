import React, { useState } from "react";
import './styles/game.scss'

function App() {
  const computeWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        cells[a] &&
        cells[a] === cells[b] &&
        cells[a] === cells[c]
      ) {
        return [a, b, c]
      }
    }
  }

  let [currentSymbol, setCurrentSymbol] = useState('X')
  let [cellsState,setCellsState] = useState([null,null,null,null,null,null,null,null,null])
  if(computeWinner(cellsState)) {
    alert(`${currentSymbol === 'X' ? 'O' : 'X'} has won`)
    reset()
 }
 if(cellsState.every(el => el)){
  alert(`Field is filled`)
  reset()
 }
  function setCell(el) {
    if(cellsState[el]){
      return alert('Spot has been already taken')
    }
    let temp = [...cellsState]
    temp[el] = currentSymbol
    setCellsState(temp)
    setCurrentSymbol(currentSymbol === 'X' ? 'O' : 'X')
  }

  function reset() {
    setCellsState([null,null,null,null,null,null,null,null,null])
    setCurrentSymbol('X')
  }

  return (
  <div>
    <div className="game">
      <div className="insideGame">
      <div className="label">Current turn {currentSymbol}</div>
      <div className="cells">
        {cellsState.map((el, i) => <button 
        className="cell" 
        onClick={() => setCell(i)}
        ><span>{cellsState[i]}</span></button>)}
      </div>
      <button className="btn" onClick={() => reset()}>Reset</button>
      </div>
    </div>
  </div>
  );
}

export default App;
