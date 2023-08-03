import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <HashRouter>
    <div className='body bg-dark text-light text-center'>
      <Navbar />
      <div className="container pt-5">
        <div className="row mt-5">
          <div className="col-xl-6 m-auto">
            
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            
          </div>
        </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
