import { useMemo, createContext, useState } from 'react';
import GameConfig from '../../GameConfig';

// import Timer from './Timer';
// import FailChance from './FailChance';
import GameTopic from './GameTopic';
import RemindingArea from './RemindingArea';
import GameBoard from './GameBoard';
import InputArea from './InputArea';
import QuitButton from './QuitButton';
import GameOver from './GameOver';

// 玩家輸入不合法的造詞時要顯示的訊息
export const MSGContext = createContext(null);
// 玩家填入格子時要共用的資料
export const TopicContex = createContext(null);
export const GameTargetContex = createContext(null);

function GameAera() {
  const [msg, getMsg] = useState(GameConfig.remindingMSG);
  const [topic, updateTopic] = useState(GameConfig.topic);
  const gameTopic = useMemo(() => <GameTopic updateTopic={updateTopic} topic={topic} />, [topic]);
  const [board, updateBoard] = useState([]);
  let boardSize = GameConfig.difficulty_map[GameConfig.userDifficulty];
  const [gameTarget, updateGameTarget] = useState(boardSize * boardSize);

  return (
    <GameTargetContex.Provider value={gameTarget}>
      <MSGContext.Provider value={msg}>
        <TopicContex.Provider value={topic}>
          <GameOver />
          <div className="game-area">
            <div className="row mt-4">
              <div className="col-6">
                {/* <Timer /> */}
              </div>
              <div className="col-6">
                {/* <FailChance /> */}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-center">
                {gameTopic}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-center">
                <RemindingArea />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <GameBoard board={board} updateBoard={updateBoard} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-center">
                <InputArea
                  updateMsg={getMsg} updateTopic={updateTopic}
                  board={board} updateBoard={updateBoard} 
                  updateGameTarget={updateGameTarget}
                  />
              </div>
            </div>
            <div className="row mt-1 mb-5">
              <div className="col-12 d-flex justify-content-center">
                <QuitButton />
              </div>
            </div>
          </div>
        </TopicContex.Provider>
      </MSGContext.Provider>
    </GameTargetContex.Provider>
  );
}

export default GameAera;
