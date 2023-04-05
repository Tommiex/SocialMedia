import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import { game } from './formSource';



function MyComponent() {
  const [data, setData] = useState({player1: 0},{player2: 0})
  const [inCheck, setInCheck] = useState(true)
  const [isClick, setIsClick] = useState(false)
  const inputClear = useRef()
  var [board,setBoard] = useState(["-","-","-",
                                  "-","-","-",
                                  "-","-","-",])

let player1 = "X"
let player2 = "O"

let [winnerVar, setWinner] = useState()
let winner =null
const printBoard=()=> {
    let n=0
    for (let i=0; i<3; i++) {
        console.log(board[n]+" | "+board[n+1]+" | "+board[n+2])
        n+=3
        console.log("_".repeat(12))
    }
}
const player1Input=()=> {
  let pos1 = parseInt(prompt("Player1 select your position 1-9: "))

  if (pos1<=9 && pos1>=1 && board[pos1-1]=="-") {
    board[pos1-1]=player1
  } else {
    console.log("WRONGGG!!!")
    setBoard(player1Input)
    return player1Input(board)
  }
}
const player2Input=()=> {
  let pos2 = parseInt(prompt("Player2 select your position 1-9: "))
    if (pos2<=9 && pos2>=1 && board[pos2-1]=="-") {
        board[pos2-1]=player2
    } else {
        console.log("WRONGGG!!!")
        return player2Input(board)
    }
}
function checkHorizontle(board){
    if (board[0] == board[1] && board[1] == board[2] && board[0]!="-") {
        winner = board[0]
        return winner
    }
    if (board[3] == board[4] && board[4] == board[5] && board[3]!="-") {
        winner = board[3]
        return winner
    }
    if (board[6] == board[7] && board[7] == board[8] && board[6]!="-") {
        winner = board[6]
        return winner
    }

  }
  function checkVerticle(board){
    if (board[0] == board[3] && board[3] == board[6] && board[0]!=='-') {
      const winner = board[0]
      return winner
    }
    if (board[1] == board[4] && board[4] == board[7] && board[1]!="-") {
      winner = board[1]
      return winner
    }
    if (board[2] == board[5] && board[5] == board[8] && board[2]!="-") {
      winner = board[2]
      return winner
    }

  }
  function checkDiagonal(board){
    if (board[0] == board[4] && board[4] == board[8] && board[0]!="-") {
      winner = board[4] 
      return winner
    }
    if (board[2] == board[4] && board[4] == board[6] && board[2]!="-") {
      winner = board[4]
      return winner
    }

  }
  useEffect(() => {
    checkHorizontle(board)
    checkVerticle(board)
    checkDiagonal(board)
  }, [])
  
  function gameHandle(){
    
    printBoard(board)
    function second(){
      
      player1Input(board)
      checkHorizontle(board)
      checkVerticle(board)
      checkDiagonal(board)
      console.log("player1 pass")
      if(checkHorizontle(board) || checkVerticle(board) || checkDiagonal(board)){
        printBoard(board)
        console.log("X","is the winner!!")
        return;
      }
      printBoard(board)
      player2Input(board)
      console.log("player2 pass")
      if(checkHorizontle(board) || checkVerticle(board) || checkDiagonal(board)){
        printBoard(board)
        console.log("O","is the winner!!")
        return;
      }else{
        printBoard(board)
        second()
      }
      
    }
    second()
}
function first(e){
  e.preventDefault();
  let pos1 = data.player1
  if(pos1 && inCheck==true){
    if (pos1<=9 && pos1>=1 && board[pos1-1]=="-") {
      board[pos1-1]=player1
      console.log("End Player1 Turn")
      printBoard(board)
      checkHorizontle(board)
      checkVerticle(board)
      checkDiagonal(board)
      if(checkHorizontle(board) || checkVerticle(board) || checkDiagonal(board)){
        printBoard(board)
        console.log("X","is the winner!!")
        return;
      }
      
    } else {
      console.log("WRONGGG!!!")
    }
    
  }else{
    console.log("write input")
  }
}
const player1Round=()=> {
  printBoard(board)
  first()
}
console.log(isClick)

const handleInput = (e) => {
  const id = e.target.id;
  const value = e.target.value;

  setData({ ...data, [id]: Number(value) });
};
console.log(data)

  return (
    <>
      <button onClick={gameHandle}>
        Game
      </button>
      <div>
      {game.slice(0, game.lenght).map((input)=>(
        <div>
          <input
            className='posInput'
            type="number"
            onChange={handleInput}
            id={input.id}
            placeholder={input.placeholder}
            // defaultValue={data}
            // value={data.id}
            ref={inputClear}
          />
          <button
            onClick={first}
          >
            asd
          </button>
        </div>
      ))}
      </div>
    </>
  );
}
export default MyComponent
