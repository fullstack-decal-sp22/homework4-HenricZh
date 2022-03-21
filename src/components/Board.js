import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    var status = 'Next player: X';
   // Array.apply(null, Array(9))
    const [board, setBoard] = useState(Array(9).fill(null, 0, 9));
    const [nextPlayer, setNextPlayer] = useState("X");

    function sqClick(i) {
      const currBoard = board.slice();
      if (!checkWin(currBoard) && (currBoard[i] == null)) {
        currBoard[i] = nextPlayer;
        setBoard(currBoard);
        if (nextPlayer === "X") {
          setNextPlayer("O");
        } else {
          setNextPlayer("X");
        }
      }
    }

    function checkWin(board) {
      const winCondition = [
        [6, 7, 8], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [2, 4, 6]
      ];
      for (const element of winCondition) {
        const [a, b, c] = element;
        if (board[a] != null && (board[b] === board[a] && (board[c] === board[a]))) {
          return board[a];
        }
      }
      return null;
    }

    function renderSquare(val) {
        return <Square value={board[val]} onClick={() => sqClick(val)}/>;
    }
    
    function setStatus() {
      if (winner == null) {
        status = "Next Player: " + nextPlayer;
      } else {
        status = "Winner: " + winner;
      }
    }

    const winner = checkWin(board);
    setStatus();
    

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;