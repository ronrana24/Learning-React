import { useState } from "react";
import Header from "../common/header";
import Square from "./square";
import "./style.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState<string>("");
  const [isXTurn, setIsXTurn] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [count, setCount] = useState<number>(1);

  const handleClick = (index: number) => {
    if (board[index] === "") {
      board[index] = isXTurn ? "X" : "O";
      setBoard(board);
      setIsXTurn(!isXTurn);
      const winnerPlayer = checkWinner();
      if (winnerPlayer !== null) {
        setWinner(winnerPlayer);
        setStatus(`Winner: ${winnerPlayer}`);
        setCount(0);
        return;
      }
      setCount((prevCount) => prevCount + 1);
      if (count === 9) {
        setStatus("Game Draw!");
      }
    }
  };

  const checkWinner = (): string | null => {
    const winningPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningPatterns) {
      if (
        board[a].length === 0 ||
        board[b].length === 0 ||
        board[c].length === 0
      ) {
        continue;
      }
      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="tic-tac-toe-container">
      <Header text="Tic Tac Toe" />
      <h2>{status.length !== 0 ? status : null}</h2>
      <div
        className="board"
        style={{ display: status.length !== 0 ? "none" : "" }}
      >
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {winner && (
        <button onClick={() => setBoard(Array(9).fill(""))}>Restart</button>
      )}
    </div>
  );
}
