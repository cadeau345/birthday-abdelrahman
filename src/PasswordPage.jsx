import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordPage() {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const correctPassword = "952006";


  const checkPassword = () => {

    if (password === correctPassword) {
document.documentElement.requestFullscreen().catch(()=>{});
    navigate("/welcome");

    } else {

      setError("❌ Wrong password");

    }

  };


  return (

    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">

          🎂 Enter Birthday Password

        </h1>


        <input

          className="login-input"

          placeholder="Enter password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />


      <button
  className="login-btn"
  onClick={() => {

    if (password === "952006") {

      const audio = new Audio("/music.mp3");

      audio.volume = 0.3;

      audio.play().catch(()=>{});

     navigate("/welcome");

    } else {

      setError("Wrong password ❌");

    }

  }}
>
  Enter 🎉
</button>

        <p className="login-error">

          {error}

        </p>

      </div>

    </div>

  );

}

export default PasswordPage;