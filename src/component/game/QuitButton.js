const showGameover = () => {
  document.getElementById("gameover-btn").click();
}

function QuitButton() {
  return (
    <button className="btn btn-success w-75" type="button" onClick={showGameover}>放棄</button>
  );
}

export default QuitButton;