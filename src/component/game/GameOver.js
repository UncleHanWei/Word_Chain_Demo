const toSettingPage = () => {
  window.location.href = "#/setting"
}

function GameOver(props) {
  return (
    <div>
      <button id="gameover-btn" type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#gameOverModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="gameOverModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Game Over</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              遊戲結束
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={toSettingPage}>再玩一次</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOver;