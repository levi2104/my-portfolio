import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ["Full Stack Developer.", "Frontend Craftsman.", "Web Innovator."],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      startDelay: 1000,
      backDelay: 1000,
      cursorChar: "_",
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return <span ref={el} className="text-neonPurple font-semibold text-lg sm:text-xl md:text-2xl" />;
};

export default TypingEffect;

