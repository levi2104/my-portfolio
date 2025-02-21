import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const StarsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let frameId;

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
    renderer.setPixelRatio(window.devicePixelRatio);

    // Append Renderer
    mountRef.current?.appendChild(renderer.domElement);

    // Star Geometry Optimization
    const starCount = 4000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.02,
      transparent: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const animateStars = () => {
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0003;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animateStars);
    };

    gsap.to(camera.position, { z: 3, duration: 1.5, ease: "power2.out" });

    animateStars();

    // Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 w-full h-full" />;
};

export default StarsBackground;
