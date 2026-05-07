import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VoiceSubtitle from "./VoiceSubtitle";

function Book() {

  const bookRef = useRef(null);
    const videoRefs = useRef([]);

  const navigate = useNavigate();

  const [closing, setClosing] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const [zoomLastPage, setZoomLastPage] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

 useEffect(() => {

  videoRefs.current.forEach((video, index) => {

    if (!video) return;

    if (index === currentVideo) {

      video.play().catch(()=>{});

    } else {

      video.pause();

      video.currentTime = 0;

    }

  });

}, [currentVideo]);

 const totalPages = 17;


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

    }, 8000);


    // zoom الصفحة الأخيرة مباشرة بعد آخر flip

    const zoomTimer = setTimeout(() => {

      setZoomLastPage(true);

    }, totalPages * 8000);


    // إغلاق الكتاب بعد zoom

    const closeTimer = setTimeout(() => {

     setClosing(true);

setShowSubtitle(true);

   const voice = new Audio("/voice.mp3");

voice.volume = 0.9;

voice.play().catch(()=>{});

// تشغيل subtitle فورًا مع الصوت

setShowSubtitle(true);

}, totalPages * 8000 + 1200);


    // الرجوع للبداية بعد تشغيل الصوت مباشرة

    const restartTimer = setTimeout(() => {

      navigate("/home");

   }, totalPages * 8000 + 2500);


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

width={window.innerWidth < 768 ? 320 : 450}

height={window.innerWidth < 768 ? 460 : 550}

size="stretch"

minWidth={280}

maxWidth={600}

minHeight={400}

maxHeight={700}

maxShadowOpacity={0.5}

showCover={true}

mobileScrollSupport={true}

usePortrait={true}

ref={bookRef}
onFlip={(e) => {

  setCurrentVideo(e.data);

}}

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
        <div className="page inside">

  <h2>❤️</h2>

  <p>

   ❤️ message from Abdallah Omar ❤️

  </p>

  <video
ref={(el) => (videoRefs.current[5] = el)}
    className="memory-video"

    src="/video1.mp4"

autoPlay={currentVideo === 6}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

❤️ A message from Abdeldayem ❤️
  </p>

  <video

ref={(el) => (videoRefs.current[5] = el)}
    className="memory-video"

    src="/video2.mp4"

autoPlay={currentVideo === 7}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

❤️ A message from Hesham ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video3.mp4"

autoPlay={currentVideo === 8}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

  A message from Hamza ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video4.mp4"

autoPlay={currentVideo === 9}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

❤️ A message from Moaz Mahmoud ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video5.mp4"

autoPlay={currentVideo === 10}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

 ❤️ A message from Mohamed Hamza ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video6.mp4"

autoPlay={currentVideo === 11}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

  ❤️ A message from Aktham ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video7.mp4"

autoPlay={currentVideo === 12}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

  ❤️ A message from Ali ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video8.mp4"

autoPlay={currentVideo === 13}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

  ❤️ A message from Mohamed Ramadan ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video9.mp4"

autoPlay={currentVideo === 14}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

 ❤️ A message from Moaz Eltaweel ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video10.mp4"

autoPlay={currentVideo === 15}

controls

playsInline

muted={false}

loop

/>

</div>
<div className="page inside">

  <h2>❤️</h2>

  <p>

  ❤️ A message from Adham ❤️

  </p>

  <video
  ref={(el) => (videoRefs.current[5] = el)}

    className="memory-video"

    src="/video11.mp4"

autoPlay={currentVideo === 16}

controls

playsInline

muted={false}

loop

/>

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