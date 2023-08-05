import { useContext, useEffect } from 'react';
import { TopicContex } from './GameArea'
import WordSource from "../../WordSource.json"
import GameConfig from "../../GameConfig";


function GameTopic(props) {
  let ctxTopic = useContext(TopicContex)
  let topic;
  if (ctxTopic === '') {
    topic = WordSource.topic[Math.floor(Math.random() * WordSource.topic.length)]
    GameConfig.topic = topic;
  } else {
    topic = ctxTopic;
  }
  
  useEffect(() => {
    props.updateTopic(topic);
  }, [props, topic]);

  return (
    <div className="game-topic bg-secondary d-flex align-items-center justify-content-center">
      <span className="">{topic}</span>
    </div>
  );
}

export default GameTopic;