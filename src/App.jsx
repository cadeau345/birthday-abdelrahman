import "./App.css";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (

    <div className="page">

      <div className="left">

        <h1 className="title">

          Happy <span>Birthday</span>

        </h1>


        <button className="date-btn">

          9 May

        </button>


        <button

          className="main-btn"

          onClick={() => navigate("/animation")}

        >

          Click Here Abdelrahman

        </button>


        <button className="from-btn">

          From Abdallah ❤️

        </button>


        <div className="home-icon">

          <FaHome />

        </div>

      </div>


      <div className="right">

      <div className="circle slide-up">

          <img src="/photo.jpg" />

        </div>


        <div className="balloon">

          🎈

        </div>


        <div className="dear">

          Dear Abdelrahman

        </div>

      </div>

    </div>

  );

}

export default App;