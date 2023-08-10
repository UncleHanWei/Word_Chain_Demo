import { useEffect } from "react";
import gc from "../../GameConfig";
import BoardGrid from "./BoardGrid";

function GameBoard(props) {
  let board = props.board;
  if (board.length === 0) {
    const difficulty = window.localStorage.getItem("difficulty") || "Easy";
    let boardSize = gc.difficulty_map[difficulty];
    document.documentElement.style.setProperty("--board-size", boardSize);
    board.push(<BoardGrid key={0} value="" class={"border-5 border-secondary-subtle"} />);
    for (let i = 1; i < boardSize * boardSize; i++) {
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