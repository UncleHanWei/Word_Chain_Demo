import Timer from './Timer';
import FailChance from './FailChance';
import GameTopic from './GameTopic';
import RemindingArea from './RemindingArea';
import GameBoard from './GameBoard';

function GameAera() {
  return (
    <div className="game-area">
      <div className="row mt-4">
        <div className="col-6">
          <Timer />
        </div>
        <div className="col-6">
          <FailChance />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <GameTopic />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <RemindingArea />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-center">
          <GameBoard />
        </div>
      </div>
    </div>
  );
}

export default GameAera;
