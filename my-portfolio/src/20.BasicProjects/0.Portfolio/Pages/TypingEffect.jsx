import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end Developer.", "React Enthusiast.", "Web Innovator."],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      startDelay: 1000,
      backDelay: 1000,
      cursorChar: "_"
    });

    return () => typed.destroy(); // Cleanup to prevent memory leak
  }, []);

  return <span ref={el} className="text-neonPurple" />;
};

export default TypingEffect;
