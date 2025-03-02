/* eslint-disable react/no-unknown-property */
import { Link } from "react-scroll";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <icosahedronGeometry args={[5, 0]} />
      <meshStandardMaterial color="#8A2BE2" wireframe />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-darkBg text-whiteText overflow-auto md:overflow-hidden flex flex-col items-center justify-center"
      style={{ touchAction: "pan-y" }} // allow vertical scrolling
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:absolute md:left-10 md:top-1/3 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neonBlue">
          Aryan Tanna
        </h1>
        <h2 className="mt-3 text-lg md:text-xl text-neonPurple">
          <TypingEffect />
        </h2>
        <p className="mt-4 md:mt-6 text-sm md:text-md [@media)_(max-width: 767px)]:mx-3">
          Creating stunning, high-performance web applications.
        </p>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-6 md:mt-9"
        >
          <Link to="contact" smooth={true} duration={800}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-5 py-3 w-fit text-neonBlue bg-darkBg border-[3px] border-neonBlue border-opacity-100 font-semibold rounded-lg block cursor-pointer md:mx-0 mx-auto"
            >
              Hire Me
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      {/* 3D Model */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ touchAction: "none" }}
      >
        <Canvas className="w-full h-full" style={{ pointerEvents: "none" }}>
          <OrbitControls enableZoom={false} enablePan={false} enabled={false} />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[3, 2, 1]} />
          <AnimatedSphere />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
