import { useEffect, useRef } from "react";



function QuitButton(props) {
  const quitBtnRef = useRef(null);
  useEffect(() => {
    const showGameover = () => {
      props.updateGameState(false);
      document.getElementById("gameover-btn").click();
    }
    quitBtnRef.current.onclick = showGameover;
  }, [props])
  return (
    <>
      <button id="quit-btn" className="btn btn-success w-75" type="button" data-bs-toggle="modal" data-bs-target="#quitConfirmModal">放棄</button>

      <div className="modal fade" id="quitConfirmModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Game Over</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              確定要放棄遊戲嗎?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">繼續玩</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" ref={quitBtnRef}>放棄</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuitButton;