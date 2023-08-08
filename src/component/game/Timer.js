import { useContext, useEffect } from 'react';
import { TimerContex, GameStateContex } from './GameArea'


function Timer(props) {
  const timeCtx = useContext(TimerContex);
  const gameState = useContext(GameStateContex);
  useEffect(() => {
    if(gameState) {
      const interval = setInterval(
        () => {
          props.updateTime(timeCtx + 1)
        }, 1000);
      return () => clearInterval(interval);
    }
  }, [props, timeCtx, gameState]);


  return (
    <div className="timer text-start ps-5">
      {Math.floor(timeCtx / 3600)}:
      {(Math.floor((timeCtx / 60)) % 60).toString().padStart(2, "0")}:
      {(Math.floor((timeCtx % 60))).toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
