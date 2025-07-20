import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette,Server, Smartphone, Database, Gauge } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using modern technologies like React, Node.js, Laravel, and C#.",
      color: "#6366f1",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description:
        "Creating native and cross-platform mobile applications for iOS and Android using Flutter.",
      color: "#8b5cf6",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description:
        "Designing beautiful and intuitive user interfaces with focus on user experience and accessibility.",
      color: "#ec4899",
    },
    {
      icon: <Server size={40} />,
      title: "Backend Development",
      description:
        "Developing robust server-side applications and APIs using Node.js, Laravel, and ASP.NET.",
      color: "#06b6d4",
    },
    {
      icon: <Database size={40} />,
      title: "Database Development",
      description:
        "Designing and managing scalable, high-performance databases using SQL Server, MySQL, and Oracle for enterprise-grade applications.",
      color: "#10b981",
    },
    {
      icon: <Gauge size={40} />,
      title: "Performance Optimization",
      description:
        "Optimizing application performance, loading speeds, and user experience across all platforms.",
      color: "#f59e0b",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            I offer comprehensive solutions to help bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="service-card"
              style={{
                "--card-color": service.color,
              }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-overlay"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="services-cta"
        >
          <p>Ready to start your project?</p>
          <motion.a
            href="mailto:ibrahimkhail.ajmal@hotmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Let's Discuss
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
