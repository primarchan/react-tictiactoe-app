import React from "react";

import "./Board.css";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const rederSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board-wrapper">
      <div className="board-row">
        {rederSquare(0)}
        {rederSquare(1)}
        {rederSquare(2)}
      </div>
      <div className="board-row">
        {rederSquare(3)}
        {rederSquare(4)}
        {rederSquare(5)}
      </div>
      <div className="board-row">
        {rederSquare(6)}
        {rederSquare(7)}
        {rederSquare(8)}
      </div>
    </div>
  );
};

export default Board;
