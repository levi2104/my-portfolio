import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ["Front-end Developer.", "React Enthusiast.", "Web Innovator."],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      startDelay: 500,
      backDelay: 800,
      cursorChar: "_",
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return <span ref={el} className="text-neonPurple font-semibold text-lg sm:text-xl md:text-2xl" />;
};

export default TypingEffect;
