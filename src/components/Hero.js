import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  const containerRef = useRef(null);

  const AnimatedSphere = () => {
    return (
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3d1c56"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    );
  };

  return (
    <section id="hero" className="hero-section" ref={containerRef}>
      <div className="hero-background">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            Hi, I'm <span className="highlight">Mohammad Ajmal Ibrahimkhail</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            Full Stack Developer | UI/UX Designer | Creative Technologist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-description"
          >
            With over 3 years of hands-on experience, I specialize in building end-to-end web applications, 
            combining robust backend architecture with pixel-perfect, user-centered designs. From complex 
            enterprise systems to modern frontend frameworks, I bring ideas to life with clean code, smart design,
            and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.a
            href="/Ajmal Ibrahimkhail.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              <Download size={20} />
              Download CV
            </motion.a>

            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="social-links"
          >
            <motion.a
              href="https://github.com/Mohamad-Ajmal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="social-link"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohammad-ajmal-ibrahimkhail"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="social-link"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:ibrahimkhail.ajmal@hotmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="social-link"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-image"
        >
          <div className="profile-card">
            <div className="profile-image">
              <div className="placeholder-image-profile">
                <img src="/Mohammad Ajmal.jpg" alt="Profile" />
              </div>
            </div>
            <div className="profile-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>6+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="scroll-indicator"
      >
        <Link to="services" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-arrow"
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
