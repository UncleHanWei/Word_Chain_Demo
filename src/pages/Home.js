import { Link } from "react-router-dom";
import Directions from "../component/home/Directions";
function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-8 m-auto">
          <h1 className="w-100">Word Chain Demo</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-10 col-xl-8 m-auto bg-secondary rounded p-3">
          <div className="row">
            <div className="col-12">
              <Directions />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <Link className="btn btn-success w-75" to={"/game"}>開始遊戲</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
