import { motion } from "framer-motion";
import { JSX, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Home({
  projects,
}: {
  projects: { [key: string]: JSX.Element };
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="home-container">
      <h1 className="home-title">Interactive Projects</h1>
      <motion.ol
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="project-list"
      >
        {Object.keys(projects).map((item, index) => (
          <motion.li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`project-item ${
              hoveredIndex === index ? "hovered" : ""
            }`}
          >
            <NavLink to={`/${item.toLowerCase().replace(/ /g, "-")}`}>
              {item}
            </NavLink>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
