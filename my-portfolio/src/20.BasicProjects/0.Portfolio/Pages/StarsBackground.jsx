import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const StarsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Mount check before appending
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Star Geometry
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = Math.random() * 10;
      starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0x00ffff, // Neon blue
      size: 0.02,
      transparent: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const animateStars = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0005;
      renderer.render(scene, camera);
      requestAnimationFrame(animateStars);
    };

    // Smooth Zoom Effect on Load
    gsap.to(camera.position, { z: 3, duration: 2, ease: "power2.out" });

    animateStars();

    // Cleanup Function (Fixing removeChild issue)
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);


  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default StarsBackground;
