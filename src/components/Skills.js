import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "#61dafb" },
        { name: "JavaScript", level: 95, color: "#f7df1e" },
        { name: "HTML/CSS", level: 90, color: "#e34f26" },
        { name: "Next.js", level: 85, color: "#000000" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Python", level: 75, color: "#3776ab" },
        { name: "Express.js", level: 85, color: "#000000" },
        { name: "Laravel", level: 90, color: "#e535ab" },
        { name: "C#", level: 95, color: "#e535ab" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 85, color: "#61dafb" },
        { name: "SQL Server", level: 95, color: "#3776ab" },
        { name: "Oracle", level: 75, color: "#000000" },
        { name: "Supabase", level: 90, color: "#8dd6f9" },
      
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "#f05032" },
        { name: "Canva", level: 80, color: "#f24e1e" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-container"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skill-card"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-container">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="progress-bar"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="skills-summary"
        >
          <div className="summary-card">
            <h3>Continuous Learning</h3>
            <p>
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies and best practices in web development.
            </p>
          </div>
          <div className="summary-card">
            <h3>Problem Solving</h3>
            <p>
              Strong analytical skills and ability to break down complex
              problems into manageable solutions with efficient algorithms and
              clean code.
            </p>
          </div>
          <div className="summary-card">
            <h3>Team Collaboration</h3>
            <p>
              Experience working in agile environments, code reviews, and
              mentoring junior developers to deliver high-quality software
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
