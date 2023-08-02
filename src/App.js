import './App.css';
import Navbar from './component/Navbar';
import GameArea from './component/GameArea';

function App() {
  return (
    <div className='body bg-dark text-light text-center'>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto">
            <GameArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
