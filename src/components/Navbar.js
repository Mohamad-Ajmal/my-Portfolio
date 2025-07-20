import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-container">
        <motion.div whileHover={{ scale: 1.1 }} className="nav-logo">
          <Link to="hero" smooth={true} duration={500}>
            <h2>AI Studio</h2>
          </Link>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="nav-item"
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mobile-nav-item"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
