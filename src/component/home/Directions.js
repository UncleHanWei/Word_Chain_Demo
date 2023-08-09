function Directions() {
  return (
    <div>

      <button type="button" className="btn btn-primary w-75" data-bs-toggle="modal" data-bs-target="#exampleModal">
        遊戲說明
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">遊戲說明</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <li><span>玩家先選擇難度(簡單、普通、困難)，困難度會影響棋盤大小</span></li>
              <li><span>遊戲一開始畫面會隨機出現一個字，玩家必須用該字造詞並進行接龍</span></li>
              <li><span>每次造詞只能使用兩個字的詞(即除了題目的字之外，再加一字的詞，例如:題目為"天"，造詞"天才"，玩家則需要輸入 "才" 字)</span></li>
              <li><span>遊戲持續至玩家填滿棋盤(玩家勝利)或按下放棄鍵(玩家失敗)</span></li>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
