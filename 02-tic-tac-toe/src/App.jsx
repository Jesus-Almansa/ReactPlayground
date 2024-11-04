import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

// Define the Square component
const Square = ({children, updateBoard, index}) => {}

function App() {
  // const updateBoard = (index) => {
  //   console.log('Updating board at index:', index);
  // }

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
              >
                {index}
              </Square>
                // updateBoard={updateBoard}
            )
          })
        }
      </section>
    </main>
  )
}

export default App
