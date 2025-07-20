import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Kardan International School",
      location: "Kabul, Afghanistan",
      period: "2023 - Present",
      description: [
        "Web Portal and software application building or debugging.",
        "Identifying problems by the end users feedback and testing, and correcting or referring problems to appropriate personnel for correction.",
        "Web Application Development using .NET Framework",
        "Windows Application Development using .NET Framework",
        "Programming using VB .Net, C# and related technologies.",
        "Designing data-driven and effective UIs",
        "Integrating, and managing DBs (SQL Server)",
        "Debugging, securing, setting up, and deploying projects and solutions",
        "Developing and integrating reports using Crystal Reports and Microsoft Reporting Services",
        "Work with Crystal Reports",
        "Microsoft SQL Server Database Development and Administration",
        "Analyzing data requirements and creating databases accordingly",
        "Microsoft SQL Server Database Designing and Management",
        "Managing, securing, backing up, and restoring databases",
      ],
    },
    {
      id: 2,
      title: "Website Developer",
      company: "Kardan University",
      location: "Kabul, Afghanistan",
      period: "2023 - Present",
      description: [
        "Writing well designed, testable, efficient code by using best software development practices",
        "Develop, maintain and update official website of Kardan University",
        "Work closely with analysts, designers and staff",
        "Creating website layout/user interfaces by using standard HTML/CSS practices",
        "Integrating data from various back-end services and databases",
        "Gather and refine specifications and requirements based on technical needs",
        "Maintain system once it is up and running",
        "Create and maintain software documentation",
        "Be responsible for maintaining, expanding, and scaling our site",
        "Stay plugged into emerging technologies/industry trends and apply them into operations and activities",
        
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career progression
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="timeline"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="timeline-card"
              >
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>{experience.title}</h3>
                    <div className="company-info">
                      <Building size={16} />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <div className="timeline-period">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="timeline-location">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
               
                <div className="timeline-achievements">
                  <h4>Description:</h4>
                  <ul>
                    {experience.description.map(
                      (desc, achievementIndex) => (
                        <li key={achievementIndex}>{desc}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="experience-summary"
        >
          <div className="summary-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-item">
              <h3>2+</h3>
              <p>Team Collaborations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
