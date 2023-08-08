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
    <button ref={quitBtnRef} className="btn btn-success w-75" type="button">放棄</button>
  );
}

export default QuitButton;