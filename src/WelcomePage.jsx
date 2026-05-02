import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

function WelcomePage() {

  const navigate = useNavigate();

  useEffect(() => {

    // تشغيل صوت intro

    const intro = new Audio("/intro.mp3");

    intro.volume = 0.5;

    intro.play().catch(()=>{});


    // confetti animation لمدة 3 ثواني

    const duration = 3000;

    const end = Date.now() + duration;

    (function frame() {

   confetti({

particleCount: 6,

spread: 70,

origin: { y: 0 },

colors: ["#ff4d6d", "#ff758f", "#ffc2d1"]

});

      if (Date.now() < end) {

        requestAnimationFrame(frame);

      }

    })();


    // الانتقال للصفحة التالية

    const timer = setTimeout(() => {

      navigate("/home");

    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div className="welcome-container">

      <h1 className="welcome-text glow-text">

        Welcome

        <span className="name-bounce">

          Abdelrahman 🎉

        </span>

      </h1>

    </div>

  );

}

export default WelcomePage;