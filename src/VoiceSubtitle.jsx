import { useEffect, useState } from "react";

function VoiceSubtitle() {

  const lines = [

    "كل سنة وانت طيب يا عبدالرحمن ❤️",

    "ربنا يحققلك كل أحلامك وتفضل دايمًا ناجح ومبسوط 🎉"

  ];

  const [lineIndex, setLineIndex] = useState(0);

  const [text, setText] = useState("");

  const typingSpeed = 40; // سرعة الكتابة (مناسبة لـ 3–4 ثواني)


  useEffect(() => {

    let charIndex = 0;

    const currentLine = lines[lineIndex];

    const typingInterval = setInterval(() => {

      setText(currentLine.slice(0, charIndex + 1));

      charIndex++;

      if (charIndex === currentLine.length) {

        clearInterval(typingInterval);

        if (lineIndex < lines.length - 1) {

          setTimeout(() => {

            setLineIndex(lineIndex + 1);

            setText("");

          }, 900);

        }

      }

    }, typingSpeed);

    return () => clearInterval(typingInterval);

  }, [lineIndex]);


  return (

    <div className="subtitle-container">

      <p className="subtitle-text typing-subtitle">

        {text}

      </p>

    </div>

  );

}

export default VoiceSubtitle;