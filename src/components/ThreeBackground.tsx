import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, knot: THREE.Group;
    let time = 0;
    let animationFrameId: number;

    const init = () => {
      scene = new THREE.Scene();
      
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      mountRef.current?.appendChild(renderer.domElement);

      function createKnotGeometry() {
        const group = new THREE.Group();
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xefefef, // Off-white
          metalness: 0.1,
          roughness: 0.8,
        });
        
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2;
          const pathPoints = [];
          
          pathPoints.push(new THREE.Vector3(-1.0, 1.0, 0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));
          pathPoints.push(new THREE.Vector3(-0.15, 1.0, 0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));
          pathPoints.push(new THREE.Vector3(-0.15, 0.15, 0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));
          pathPoints.push(new THREE.Vector3(-0.15, -0.15, 0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));
          pathPoints.push(new THREE.Vector3(-0.05, -0.15, -0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));
          pathPoints.push(new THREE.Vector3(0.15, -0.15, 0.1).applyAxisAngle(new THREE.Vector3(0, 0, 1), angle));

          const curve = new THREE.CatmullRomCurve3(pathPoints);
          const geometry = new THREE.TubeGeometry(curve, 100, 0.08, 8, false);
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        }
        return group;
      }

      knot = createKnotGeometry();
      scene.add(knot);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1, 10);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      window.addEventListener('resize', onWindowResize, false);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;

      if (knot) {
        knot.rotation.y += 0.001;
        knot.position.y = Math.sin(time * 0.5) * 0.1;
      }

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      if (camera && renderer && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    init();
    animate();

    // Initial resize to fit container
    onWindowResize();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(to bottom, #111, #222)' }} />;
};

export default ThreeBackground;
