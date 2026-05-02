import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VoiceSubtitle from "./VoiceSubtitle";

function Book() {

  const bookRef = useRef(null);

  const navigate = useNavigate();

  const [closing, setClosing] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const [zoomLastPage, setZoomLastPage] = useState(false);

  const totalPages = 6;


  useEffect(() => {

    let currentPage = 0;

    const flipSound = new Audio("/flip.mp3");


    // تقليب الصفحات

    const flipInterval = setInterval(() => {

      if (bookRef.current && currentPage < totalPages - 1) {

        bookRef.current.pageFlip().flipNext();

        flipSound.currentTime = 0;

        flipSound.play().catch(() => {});

        currentPage++;

      }

    }, 2500);


    // zoom الصفحة الأخيرة مباشرة بعد آخر flip

    const zoomTimer = setTimeout(() => {

      setZoomLastPage(true);

    }, totalPages * 2500);


    // إغلاق الكتاب بعد zoom

    const closeTimer = setTimeout(() => {

     setClosing(true);

setShowSubtitle(true);

   const voice = new Audio("/voice.mp3");

voice.volume = 0.9;

voice.play().catch(()=>{});

// تشغيل subtitle فورًا مع الصوت

setShowSubtitle(true);

    }, totalPages * 2500 + 1200);


    // الرجوع للبداية بعد تشغيل الصوت مباشرة

    const restartTimer = setTimeout(() => {

      navigate("/home");

    }, totalPages * 2500 + 2500);


    return () => {

      clearInterval(flipInterval);

      clearTimeout(zoomTimer);

      clearTimeout(closeTimer);

      clearTimeout(restartTimer);

    };

  }, []);


  return (

    <motion.div

      className="book-wrapper"

      initial={{ scale: 1, opacity: 1 }}

      animate={closing ? { scale: 0.8, opacity: 0 } : { scale: 1 }}

      transition={{ duration: 1 }}

    >

      <HTMLFlipBook

     width={window.innerWidth < 768 ? 300 : 450}
height={window.innerWidth < 768 ? 420 : 550}

        ref={bookRef}

        className="flip-book"

      >

        {/* الصفحة الأولى */}

        <div className="page cover">

          <h1 className="shine-text">

            Happy Birthday 🎉

          </h1>

          <img

            src="/photo.jpg"

            className="book-avatar"

          />

          <p className="name-glow">

            To Abdelrahman ❤️

          </p>

        </div>


        {/* الصفحة الثانية */}

        <div className="page inside">

          <h2>رسالة 1</h2>

          <p>

            كل سنة وانت طيب يا صاحبي ❤️  
            وعقبال سنين مليانة نجاح وفرحة 🎂

          </p>

        </div>


        {/* الصفحة الثالثة */}

        <div className="page inside">

          <h2>رسالة 2</h2>

          <p>

            ربنا يحققلك كل أحلامك  
            وتفضل دايمًا ناجح ومبسوط 💪✨

          </p>

        </div>


        {/* الصفحة الرابعة */}

        <div className="page inside">

          <h2>رسالة 3</h2>

          <p>

            وجودك في حياتي حاجة كبيرة  
            وربنا يديم صداقتنا ❤️

          </p>

        </div>


        {/* الصفحة الخامسة */}

        <div className="page inside">

          <h2>رسالة 4</h2>

          <p>

            تستاهل كل خير وفرحة  
            وربنا يحققلك اللي نفسك فيه 🎯

          </p>

        </div>


        {/* الصفحة الأخيرة */}

        <motion.div

          className="page last"

          animate={zoomLastPage ? { scale: 1.15 } : { scale: 1 }}

          transition={{ duration: 1 }}

        >

          <h2 className="name-glow">

            From Abdallah ❤️

          </h2>

          <p>

            Your best friend forever 🎉

          </p>

        </motion.div>

      </HTMLFlipBook>
      {showSubtitle && <VoiceSubtitle />}

    </motion.div>

  );

}

export default Book;