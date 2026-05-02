import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";
import { useState, useRef, useEffect } from "react";
import Book from "./Book";

function AnimationPage() {

  const [page, setPage] = useState(1);

  const [countdown, setCountdown] = useState(3);

const audioRef = useRef(null);

useEffect(() => {

  const audio = audioRef.current;

  if (audio) {

    audio.volume = 0.4;

  }

}, []);


  // countdown animation

  useEffect(() => {

    if (countdown > 0) {

      const timer = setTimeout(() => {

        setCountdown(countdown - 1);

      }, 1000);

      return () => clearTimeout(timer);

    }

  }, [countdown]);


  // confetti animation

  const startConfetti = () => {

    const duration = 6000;

    const end = Date.now() + duration;

    (function frame() {

      confetti({

        particleCount: 6,

        angle: 60,

        spread: 80,

        origin: { x: 0 }

      });

      confetti({

        particleCount: 6,

        angle: 120,

        spread: 80,

        origin: { x: 1 }

      });

      if (Date.now() < end) {

        requestAnimationFrame(frame);

      }

    })();

  };


  // الانتقال للمشهد الثاني

 const goNextPage = () => {

  startConfetti();

  setTimeout(() => {

    setPage(2);

    // تشغيل موسيقى عيد الميلاد هنا (بعد interaction)

    const music = new Audio("/music.mp3");

    music.loop = true;

    music.volume = 0.4;

    music.play().catch(()=>{});

  }, 1000);

};


  return (

    <div className="container">

      <audio ref={audioRef} loop>

        <source src="/music.mp3" type="audio/mpeg" />

      </audio>


      {/* countdown screen */}

      {countdown > 0 && (

        <h1 className="countdown">

          {countdown}

        </h1>

      )}


      {/* scene 1 */}

      {countdown === 0 && page === 1 && (

        <div>

          <TypeAnimation

            sequence={[

              "🎉 Happy Birthday Abdelrahman 🎉",

              1200,

              goNextPage

            ]}

            wrapper="h1"

            speed={60}

            cursor={true}

            className="title"

          />

          <img

            src="/cake.png"

            className="cake"

          />

        </div>

      )}


      {/* scene 2 */}

      {page === 2 && (

        <motion.div

          initial={{ y: 600 }}

          animate={{ y: 0 }}

          transition={{ duration: 2 }}

        >

          <h1 className="title">

            🎉 Happy Birthday Abdelrahman 🎉

          </h1>


          <motion.div

            animate={{ y: [-20, -150, -300] }}

            transition={{ duration: 4 }}

            className="balloon-container"

          >

            <div className="balloon">🎈</div>

            <div className="string"></div>


            <img

              src="/photo.jpg"

          className="avatar"

            />

          </motion.div>


          <motion.p

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 2 }}

            className="final-message"

          >

            ربنا يحققلك كل أحلامك يا صاحبي ❤️  
            وعقبال مليون سنة نجاح وفرحة 🎂🎉

          </motion.p>


          <button

            className="book-btn"

            onClick={() => setPage(3)}

          >

            📖 افتح الرسالة

          </button>

        </motion.div>

      )}


      {/* scene 3 */}

      {page === 3 && (

        <Book />

      )}

    </div>

  );

}

export default AnimationPage;