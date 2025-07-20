import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  // const categories = ["All", "Web", "Mobile", "Full Stack", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio – AI Studio",
      description:
        "My personal portfolio is a fully responsive, interactive web application designed to showcase my expertise as a Full Stack Developer and UI/UX Designer. Built with modern frontend frameworks and a strong focus on performance and user experience, this portfolio acts as a central hub for my projects, skills, and services.",
      image: "/AI studio.png",
      category: "Web",
      technologies: [" React.js", "HTML/CSS", "Motion" , "Supabase"],
      liveUrl: "https://example.com",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Kardan University Website",
      description:
        "I designed and developed the official website of Kardan University from the ground up — covering everything from UI/UX design to frontend and backend development. The site features a modern, responsive interface, seamless navigation, and dynamic content management to enhance user engagement and accessibility.",
      image: "/kardan.png",
      category: "Web",
      technologies: ["HTML/CSS", "JavaScript", "ASP.NET","SQL Server"],
      liveUrl: "https://Kardan.edu.af",
      githubUrl: "https://Kardan.edu.af",
    },
    {
      id: 3,
      title: "The Wild Oasis Guests Website",
      description:
        "The Wild Oasis is a boutique hotel featuring 8 luxury wooden cabins. I developed a user-centric website that empowers guests to explore the hotel’s unique offerings, browse detailed cabin profiles, seamlessly make reservations, and manage their accounts with ease—all through a clean, intuitive interface designed for an exceptional online experience.",
      image: "/wild-oasis-guests-ui.webp",
      category: "Web",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Auth.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Wild Oasis MIS",
      description:
        "The Wild Oasis is a charming boutique hotel featuring 8 luxurious wooden cabins nestled in nature. I developed a custom full-stack application that empowers the hotel management to effortlessly oversee every aspect of their operations — from managing cabin availability and guest bookings to maintaining detailed guest profiles. This tailored solution streamlines workflows, boosts efficiency, and enhances the overall guest experience through intuitive, centralized control.",
      image: "/wild-oasis-ui-webp.webp",
      category: "Web",
      technologies: ["React.js", "Styled Components", "React Router", "React Query", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects;
      // : projects.filter((project) => project.category === selectedCategory);

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
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="filter-container"
        >
          {/* {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </motion.button>
          ))} */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className={`project-card ${project.featured ? "featured" : ""}`}
              >
                <div className="project-image">
                  <div className="placeholder-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="project-link"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="project-link"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-category">{project.category}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="projects-cta"
        >
          {/* <p>Want to see more of my work?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            View All Projects
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
