/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";
// import StarsBackground from "./StarsBackground";


const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Sphere rotates along y axis, similarly u can do for x and z axis
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[5, 0]} />
      <meshStandardMaterial color="#8A2BE2" wireframe />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen bg-darkBg text-whiteText overflow-hidden">
      {/* Stars Background */}
      {/* <StarsBackground className="z-0" /> */}

      {/* Left Content */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-10 top-1/3 z-10"
      >
        <h1 className="text-5xl font-bold text-neonBlue">Aryan Tanna</h1>
        {/* Animated Typing Effect */}
        <h2 className="mt-3 text-xl text-neonPurple">
          <TypingEffect />
        </h2>
        <p className="mt-6 text-md">
          Creating stunning, high-performance web applications.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-10 top-[55%] z-10"
      >
        <button className="mt-9 px-5 py-3 bg-neonPurple text-whiteText rounded-lg shadow-lg hover:scale-105 transition">
          Hire Me
        </button>
      </motion.div>

      {/* 3D Model */}
      <Canvas className="z-0">
        <OrbitControls enableZoom={false} />
        {/* eslint-disable react/no-unknown-property */}
        <ambientLight intensity={0.5} />
        {/* eslint-enable react/no-unknown-property */}

        {/* eslint-disable react/no-unknown-property */}
        <directionalLight intensity={1} position={[3, 2, 1]} />
        {/* eslint-enable react/no-unknown-property */}

        <AnimatedSphere />
      </Canvas>
    </section>
  );
};

export default Hero;
