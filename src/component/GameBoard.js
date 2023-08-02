import gc from "./GameConfig";
import BoardGrid from "./BoardGrid";

function GameBoard() {
  let boardSize = gc.difficulty_map[gc.userDifficulty];
  document.documentElement.style.setProperty("--board-size", boardSize);
  let data = [];
  let board = [];
  for (let r = 0; r < boardSize; r++) {
    data.push([]);
    board.push([]);
    for (let c = 0; c < boardSize; c++) {
      data[r].push([]);
      board[r].push(<BoardGrid key={r+"-"+c}/>);
    }
  }

  console.log(data);
  console.log(board);
  return (
    <div className="row">
      <div className="col-11 m-auto">
        {board}
      </div>
    </div>
  );
}

export default GameBoard;