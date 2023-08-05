import { useRef, useContext } from 'react';
import { TopicContex, GameTargetContex } from './GameArea'

import GameConfig from '../../GameConfig';
import WordSource from "../../WordSource.json"

import BoardGrid from './BoardGrid';

let boardIndex = 0;
let allUserAns = [];

function InputArea(props) {
  const inputRef = useRef(null);
  const topic = useContext(TopicContex)
  const gameTarget = useContext(GameTargetContex)

  if(gameTarget === 0) {
    document.getElementById("gameover-btn").click();
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

  const checkInput = async () => {
    let userAns = inputRef.current.value;
    if (userAns.length > 2) {
      updateMsg('字數不能大於 2')
      return
    }
    if (userAns[0] !== topic[0]) {
      updateMsg('字首與題目不同')
      return
    }
    if(allUserAns.includes(userAns[1])) {
      updateMsg('不能使用重複的字')
      return
    }
    let checkRes = await checkHasWord(userAns)
    if (!checkRes) {
      updateMsg('不在字詞列表中')
      return
    }

    updateMsg('')
    props.updateTopic(userAns[1]);
    props.board[boardIndex] = <BoardGrid key={boardIndex} value={userAns[1]} />
    props.updateBoard(props.board)
    boardIndex++;
    inputRef.current.value = userAns[1];
    allUserAns.push(userAns[1])
    props.updateGameTarget(gameTarget-1);
  }

  return (
    <div className="input-group mb-3 w-75">
      <input ref={inputRef} type="text" className="form-control" />
      <button className="btn btn-secondary" type="button" id="button-addon2" onClick={checkInput}>確認</button>
    </div>
  );
}

export default InputArea;