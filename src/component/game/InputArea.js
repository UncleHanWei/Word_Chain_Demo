import { useRef, useContext, useEffect } from 'react';
import { TopicContex, GameTargetContex, GameStateContex } from './GameArea'

import GameConfig from '../../GameConfig';
import WordSource from "../../WordSource.json"

import BoardGrid from './BoardGrid';


function InputArea(props) {
  const inputRef = useRef(null);
  const topic = useContext(TopicContex)
  const gameTarget = useContext(GameTargetContex)
  const gameState = useContext(GameStateContex);
  let boardIndex = props.boardIndex;
  let allUserAns = props.allUserAns;

  useEffect(() => {
    if (gameTarget === 0 || !gameState) {
      props.updateGameState(false);
      document.getElementById("gameover-btn").click();
    }
  }, [gameTarget, props, gameState])

  if (gameTarget === 0 || !gameState) {
    return
  }

  const updateMsg = (msg) => {
    GameConfig.remindingMSG = msg
    props.updateMsg(GameConfig.remindingMSG)
  }

  // 戳唐鳳寫的萌典 API 看有沒有這個詞
  const findWordInMoedict = (word) => {
    return new Promise((rs, rj) => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(`https://www.moedict.tw/raw/${word}`, requestOptions)
        .then(response => response.text())
        .then(result => rs(true))
        .catch(error => rs(false));

    })
  }

  const checkHasWord = async (word) => {
    let findWordRes = await findWordInMoedict(word)
    if (findWordRes) {
      return true
    }
    if (WordSource['word-list'].includes(word)) {
      return true
    }
    return false
  }

  const checkInput = async (event) => {
    if (event.type === "keydown" && event.keyCode !== 13) {
      return
    }
    let userAns = inputRef.current.value;
    if (userAns.length !== 1) {
      updateMsg('只能輸入一個字')
      return
    }
    if (allUserAns.includes(userAns)) {
      updateMsg('不能使用重複的字')
      return
    }
    let checkRes = await checkHasWord(`${topic+userAns}`)
    if (!checkRes) {
      updateMsg('不在字詞列表中')
      return
    }

    updateMsg('')
    props.updateTopic(userAns);
    props.board[boardIndex] = <BoardGrid key={boardIndex} value={userAns} />
    props.updateBoard(props.board)
    boardIndex++;
    inputRef.current.value = '';
    allUserAns.push(userAns)
    props.updateGameTarget(gameTarget - 1);
    // 更新使用者的輸入的狀態
    props.updateBoardIndex(boardIndex);
    props.updateAllUserAns(allUserAns);
  }

  return (
    <div className="input-group mb-3 w-75">
      <span className="input-group-text" id="inputGroup-sizing-default">{topic}</span>
      <input ref={inputRef} type="text" className="form-control" onKeyDown={checkInput} onBlur={e => e.target.focus()} />
      <button className="btn btn-secondary" type="button" id="button-addon2" onClick={checkInput}>確認</button>
    </div>
  );
}

export default InputArea;