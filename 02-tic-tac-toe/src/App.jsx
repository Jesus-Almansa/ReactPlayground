import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal 1
  [2, 4, 6]  // diagonal 2
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = 'square' + (isSelected ? ' is-selected' : '');

  const handleClick = () => {
    updateBoard(index);
  }
  return (
    <div onClick={handleClick} className={className} >
        {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // state to store the winner

  // console.log(board);
  // console.log(turn);

  const updateBoard = (index) => {

    if (board[index]) return // if the square is already filled, return

    const newBoard = [...board];  // copy the board
    newBoard[index] = turn;      // fill the square with the current turn
    setBoard(newBoard);         // update the board

    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X); // change the turn
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index} 
                index={index} 
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} > {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O} > {TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
