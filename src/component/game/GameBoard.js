import { useEffect } from "react";
import gc from "../../GameConfig";
import BoardGrid from "./BoardGrid";

function GameBoard(props) {
  let board = props.board;
  if (board.length === 0) {
    let boardSize = gc.difficulty_map[gc.userDifficulty];
    document.documentElement.style.setProperty("--board-size", boardSize);
    for (let i = 0; i < boardSize*boardSize; i++) {
      board.push(<BoardGrid key={i} value="" />);
    }
  }
  useEffect(() => {
    props.updateBoard(board)
  }, [props, board])


  return (
    <div className="row">
      <div className="col-11 m-auto board-area">
        {props.board}
      </div>
    </div>
  );
}

export default GameBoard;