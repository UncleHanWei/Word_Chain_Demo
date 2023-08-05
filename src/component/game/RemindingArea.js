import { useContext } from 'react';
import { MSGContext } from './GameArea'

function RemindingArea() {
  const msg = useContext(MSGContext)
  return (
    <div className="">
      <span className="">{msg}</span>
    </div>
  );
}

export default RemindingArea;