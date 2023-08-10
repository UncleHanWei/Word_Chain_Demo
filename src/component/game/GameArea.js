import { createContext, useState } from 'react';
import GameConfig from '../../GameConfig';

import Timer from './Timer';
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
export const TimerContex = createContext(null);
export const GameStateContex = createContext(null);

function GameAera() {
  const [msg, getMsg] = useState("");
  const [topic, updateTopic] = useState("");
  const [board, updateBoard] = useState([]);
  const difficulty = window.localStorage.getItem("difficulty") || "Easy";
  let boardSize = GameConfig.difficulty_map[difficulty];
  const [gameTarget, updateGameTarget] = useState(boardSize * boardSize);
  const [boardIndex, updateBoardIndex] = useState(0);
  const [allUserAns, updateAllUserAns] = useState([]);
  const [timeCount, updateTime] = useState(0);
  const [gameState, updateGameState] = useState(true);

  return (
    <GameStateContex.Provider value={gameState}>
      <TimerContex.Provider value={timeCount}>
        <GameTargetContex.Provider value={gameTarget}>
          <MSGContext.Provider value={msg}>
            <TopicContex.Provider value={topic}>
              <GameOver updateGameState={updateGameState} userAnsCount={boardIndex} />
              <div className="game-area">
                <div className="row mt-4">
                  <div className="col-6">
                    <Timer updateTime={updateTime} />
                  </div>
                  <div className="col-6">
                    {/* <FailChance /> */}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 d-flex justify-content-center">
                    <GameTopic updateTopic={updateTopic} topic={topic} />
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
                      boardIndex={boardIndex} updateBoardIndex={updateBoardIndex}
                      allUserAns={allUserAns} updateAllUserAns={updateAllUserAns}
                      updateMsg={getMsg} updateTopic={updateTopic}
                      board={board} updateBoard={updateBoard}
                      updateGameTarget={updateGameTarget}
                      updateGameState={updateGameState}
                    />
                  </div>
                </div>
                <div className="row mt-1 mb-5">
                  <div className="col-12 d-flex justify-content-center">
                    <QuitButton updateGameState={updateGameState} />
                  </div>
                </div>
              </div>
            </TopicContex.Provider>
          </MSGContext.Provider>
        </GameTargetContex.Provider>
      </TimerContex.Provider>
    </GameStateContex.Provider>
  );
}

export default GameAera;
