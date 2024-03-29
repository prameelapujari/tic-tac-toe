import './App.css';
import { useState} from 'react';

function Square({value,onClick}) {
  return (
    <div>
      <button 
      className='square' 
      onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

function Board() {
 const [xIsNext, setXIsNext]= useState(true)
 const [squares, setSquare] =useState(Array(9).fill(null))

  function handleClick(i){
    if(squares[i] || calculateWinner(squares))
    {
      return;
    }
   const nextSquare =squares.slice();
   if(xIsNext){
    nextSquare[i] ="X";
   }
   else{
    nextSquare[i] ="O"
   }
   setSquare(nextSquare);
   setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onClick={() =>handleClick(0)}></Square>
        <Square value={squares[1]} onClick={() =>handleClick(1)}></Square>
        <Square value={squares[2]} onClick={() =>handleClick(2)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onClick={() =>handleClick(3)}></Square>
        <Square value={squares[4]} onClick={() =>handleClick(4)}></Square>
        <Square value={squares[5]} onClick={() =>handleClick(5)}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onClick={() =>handleClick(6)}></Square>
        <Square value={squares[7]} onClick={() =>handleClick(7)}></Square>
        <Square value={squares[8]} onClick={() =>handleClick(8)}></Square>
      </div>
    </>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <div className='App'>
      <Board></Board>
    </div>
  );
}
export default App;
