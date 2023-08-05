import { Link } from "react-router-dom";
import GameConfig from "../GameConfig";

const handleChange = event => {
  GameConfig.userDifficulty = event.target.value
};


function Setting() {
  return (
    <div>
      <div className="row">
        <div className="col-8 m-auto">
          <h1 className="w-100">Game Setting</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 col-xl-8 m-auto bg-secondary rounded p-3">
          <div className="row">
            <div className="col-12">

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="player-mode">人數模式</label>
                <select className="form-select" id="player-mode">
                  <option value={1}>單人模式</option>
                </select>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="game-mode">遊戲模式</label>
                <select className="form-select" id="game-mode">
                  <option value={"board"} >棋盤模式</option>
                </select>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="difficulty">遊戲難度</label>
                <select className="form-select" id="difficulty" onChange={handleChange} defaultValue={GameConfig.userDifficulty}>
                  <option value={"Easy"} >Easy</option>
                  <option value={"Normal"}>Normal</option>
                  <option value={"Hard"}>Hard</option>
                </select>
              </div>
            </div>

          </div>
          <div className="row mt-3">
            <div className="col-12">
              <Link className="btn btn-success w-75" to={"/game"}>開始遊戲</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
