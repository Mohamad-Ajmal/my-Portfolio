import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Kardan University",
      location: "Kabul, Afghanistan",
      period: "2019 - 2023",
      gpa: "3.6/4.0",
      description:
        'Specialized in Software Engineering. Completed thesis on "Mobile Application for Online Shopping".',
    },
    {
      id: 2,
      degree: "Diploma of English Language",
      institution: "Kardan University",
      location: "Kabul, Afghanistan",
      period: "2018 - 2020",
      gpa: "3.2/4.0",
      description:
        "",
    },
  ];

  const certifications = [
   
    {
      name: "Building React Application using ASP.NET MVC5",
      issuer: "Board Infinity",
      date: "2024",
    },
    {
      name: "The Complete Full-Stack JavaScript Course",
      issuer: "Udemy",
      date: "2023",
    },
    {
      name: "Data Science: Python for Data Analysis Full Bootcamp",
      issuer: "Udemy",
      date: "2023",
    },
    {
      name: "The Complete Python Programming Course: Beginner to Advanced",
      issuer: "Udemy",
      date: "2023",
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
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            My academic background and professional certifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="education-container"
        >
          <div className="education-grid">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="education-card"
              >
                <div className="education-header">
                  <div className="education-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="education-info">
                    <h3 className="degree">{edu.degree}</h3>
                    <div className="institution">
                      <MapPin size={16} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="period">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="gpa">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>

              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="certifications-section"
          >
            <h3 className="certifications-title">
              Professional Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="certification-card"
                >
                  <div className="certification-header">
                    <h4>{cert.name}</h4>
                    <span className="certification-issuer">{cert.issuer}</span>
                  </div>
                  <div className="certification-meta">
                    <span className="certification-date">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="education-summary"
        >
          <div className="summary-content">
            <h3>Continuous Learning</h3>
            <p>
              I believe in lifelong learning and continuously update my skills
              through online courses, workshops, and industry conferences.
              Currently pursuing advanced certifications in cloud architecture
              and machine learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
