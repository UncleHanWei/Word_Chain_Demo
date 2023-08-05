import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import Game from "./pages/Game";
import Setting from "./pages/Setting";

function App() {
  return (
    <HashRouter>
      <div className='body bg-dark text-light text-center'>
        <Navbar />
        <div className="container">
          <div className="row mt-3">
            <div className="col-xl-6 m-auto">

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>

            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
