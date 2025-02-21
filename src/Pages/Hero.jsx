/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <icosahedronGeometry args={[4, 0]} />
      <meshStandardMaterial color="#8A2BE2" wireframe />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-darkBg text-whiteText overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-lg z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-neonBlue">Aryan Tanna</h1>
        <h2 className="mt-3 text-lg sm:text-xl text-neonPurple">
          <TypingEffect />
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-md">
          Creating stunning, high-performance web applications.
        </p>
        <button className="mt-6 sm:mt-9 px-4 sm:px-5 py-2 sm:py-3 bg-neonPurple text-whiteText rounded-lg shadow-lg hover:scale-105 transition">
          Hire Me
        </button>
      </motion.div>

      {/* 3D Model */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
      >
        <Canvas>
          <OrbitControls enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={1} position={[3, 2, 1]} />
          <AnimatedSphere />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;
