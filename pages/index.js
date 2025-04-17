import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
// import Link from 'next/link' // Not strictly needed for scrolling anchors
import skillsData from '../data/skills.json'
import projects from '../data/projects.json'

// Helper function to group skills by category (remains the same)
const groupSkillsByCategory = (skills) => {
  if (!Array.isArray(skills)) {
    console.error("Skills data is not an array:", skills);
    return {};
  }
  return skills.reduce((acc, skill) => {
    // Ensure skill object and category exist
    if (typeof skill !== 'object' || skill === null || typeof skill.category !== 'string' || skill.category.trim() === '') {
      console.warn("Skipping skill due to invalid format or missing category:", skill);
      return acc; // Skip items without a valid category string
    }
    const category = skill.category.trim(); // Use trimmed category name
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    acc[category].sort((a, b) => a.name.localeCompare(b.name));
    return acc;
  }, {});
};

export default function Home() {
  const [expandedProject, setExpandedProject] = useState(null);

  const groupedSkills = useMemo(() => groupSkillsByCategory(skillsData), [skillsData]);

  // --- ACTION REQUIRED ---
  // NEW: Updated categoryOrder based on your resume reference.
  // ** Ensure these strings EXACTLY match the "category" values in your skills.json **
  const categoryOrder = [
    "Programming Languages",
    "Data Science and ML",
    "DevOps & CI/CD",
    "Cloud & Big Data",
    "Databases",
    "Certifications",
    "Courses"
    // Add any other custom categories from your resume/skills.json if needed
  ];

  return (
    <>
      <Head>
        <title>Pruthvi M Javali | Technical Portfolio</title> {/* Adjusted title */}
        <meta name="description" content="Technical Portfolio of Pruthvi M Javali, showcasing skills in Software Engineering and Data Science." /> {/* Adjusted description */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* ======= Home Section ======= */}
      {/* (No changes from the previous version) */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{ backgroundImage: "linear-gradient(to right, rgba(26, 32, 44, 0.85), rgba(49, 46, 129, 0.85)), url('/images/bg-image.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}
        className="min-h-screen flex flex-col items-center justify-center text-white px-4 pt-20"
      >
         <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-center"
        >
          Welcome, I'm Pruthvi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-xl md:text-2xl text-center text-gray-200 max-w-3xl mb-8"
        >
          Data-driven Software Engineer building a future in Data Science and Analytics.
        </motion.p>

        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
           className="w-60 h-60 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500/50"
        >
          <img src="/images/pruthvi-photo.jpg" alt="Pruthvi M Javali" className="w-full h-full object-cover" />
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="#about"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="px-8 py-3 bg-white text-indigo-800 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Learn More About Me
        </motion.a>
      </motion.section>


      {/* ======= About Section ======= */}
      {/* (No changes from the previous version) */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl space-y-6 text-gray-300 text-left md:text-center"
          >
              {/* Multi-paragraph content here... (keep previous content) */}
               <p>
              I'm Pruthvi, a Software Engineer navigating the exciting intersection of code and data. With a foundation built at LSEG crafting solutions with .NET, SQL, and RPA, I've seen firsthand how crucial data is. Now, I'm enthusiastically pivoting, applying that engineering rigor to the fascinating world of Data Science and Analytics.
            </p>
            <p>
              What kicked off this data obsession? Honestly, it started with cricket! Trying to understand player stats and game predictions pulled me into the world of analytics. From there, I was hooked. Exploring AI/ML felt like unlocking superpowers – seeing machines learn and uncover patterns humans might miss? Absolutely captivating. It's this blend of analytical challenge and futuristic potential that drives my passion for the field.
            </p>
            <p>
              My Software Engineering background isn't just history; it's an asset. Years of wrangling complex SQL queries mean I'm comfortable diving deep into databases. Experience with .NET application structures helps me understand where data comes from and how it flows. And a focus on robust code and automation (thanks, RPA!) translates directly to building reliable data pipelines and analytical tools.
            </p>
            <p>
              My focus now is on leveraging techniques like machine learning to solve tangible problems. For instance, in a recent project, I tackled customer churn prediction for a telecom company, using models like XGBoost and Random Forest alongside SHAP for interpretability. Diving deep into data with Pandas, NumPy, and visualizing findings with Matplotlib/Seaborn is where I thrive. I'm particularly drawn to predictive modeling and continually expanding my skillset in machine learning applications.
            </p>
            <p>
              I'm actively seeking a full-time Data Scientist or Analyst role where I can contribute both my engineering mindset and growing data expertise. I'm eager to tackle challenging projects, ideally in the tech or finance sectors, {/* Review needed */} or any data-rich environment, and I'm excited by opportunities in Bangalore (WFO) or remote.
            </p>
          </motion.div>
          <motion.a
            href="/Pruthvi_M_Javali.pdf"
            download="Pruthvi_M_Javali_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.section>


      {/* ======= Skills Section ======= */}
      {/* UPDATED: Section Title and Category Handling */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 py-24 sm:px-6 lg:px-8" // Added more vertical padding
      >
        <div className="w-full max-w-5xl mx-auto"> {/* Increased max-width */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // UPDATED: Section Title
            className="text-4xl font-bold text-center mb-16" // Increased bottom margin
          >
            Technical Skillset
          </motion.h2>

          {/* Grid layout for categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
             {/* Filter categories based on `categoryOrder` AND ensure they exist in `groupedSkills` */}
            {categoryOrder
              .filter(category => groupedSkills[category] && groupedSkills[category].length > 0)
              .map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }} // Animate from bottom
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }} // Slightly adjusted stagger
                className="bg-gray-700/30 p-6 rounded-lg shadow-lg" // Added background tint, padding, rounding
              >
                {/* Category Title Styling */}
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b-2 border-blue-400/30 pb-2">{category}</h3>
                
                {/* Skills Tags container */}
                <div className="flex flex-wrap gap-3">
                  {/* Map skills within the current category */}
                  {groupedSkills[category].map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} // Each tag animates as it enters
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }} // Stagger skill appearance
                      whileHover={{ scale: 1.1, zIndex: 10, backgroundColor: 'rgb(59 130 246 / 0.9)', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)'}} // Enhanced hover
                      className="inline-block bg-gray-600 rounded-md px-4 py-2 text-sm font-medium text-gray-100 shadow-md cursor-default" // Adjusted styling
                    >
                      {skill.name}
                      {/* If you add certifications/courses as skills, you might display details differently */}
                      {/* Example: {category === 'Certifications' ? `(${skill.issuer})` : ''} */}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
           {/* Fallback message if no skills are categorized correctly */}
           {Object.keys(groupedSkills).length === 0 && (
             <p className='text-center text-gray-400 mt-10'>Skills data not loaded or categories missing in `skills.json`.</p>
           )}
        </div>
      </motion.section> {/* Closing Skills Section */}


      {/* ======= Projects Section ======= */}
       {/* (No changes from the previous version) */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-4xl mx-auto">
           <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Projects Showcase
          </motion.h2>
          <div className="space-y-8">
            {Array.isArray(projects) && projects.map((project, idx) => (
              <motion.div
                key={project.title || idx}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              >
                <div
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-700/50 transition duration-200"
                >
                    <div>
                      <h3 className="text-xl font-bold text-blue-300">{project.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{Array.isArray(project.tech) ? project.tech.join(' | ') : 'Tech details unavailable'}</p>
                    </div>
                    <motion.span
                        animate={{ rotate: expandedProject === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 text-blue-400 text-xl"
                    >
                       ▼
                    </motion.span>
                </div>
                <AnimatePresence>
                  {expandedProject === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6">
                        <p className="mb-4 text-gray-300">{project.description}</p>
                        {project.links && Array.isArray(project.links) && project.links.length > 0 && (
                          <div className="flex flex-wrap gap-4 mt-3">
                            {project.links.map((link, linkIdx) => (
                              <motion.a
                                key={link.label || linkIdx}
                                whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"}}
                                whileTap={{ scale: 0.95 }}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline font-medium transition duration-200"
                              >
                                {link.label}
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* ======= Contact Section ======= */}
      {/* (No changes from the previous version, ensure placeholders are updated) */}
       <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-gray-900 to-gray-800 text-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
           <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold mb-6"
           >
              Get In Touch
            </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
             Interested in collaborating or discussing opportunities? Feel free to reach out!
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
           >
              {/* Ensure all href="..." and text for email/linkedin/github/phone are correct */}
              <motion.a href="mailto:pruthvi182001@gmail.com" whileHover={{ scale: 1.1, color: '#60a5fa'}} className="text-lg hover:text-blue-400 transition duration-200">
                 Gmail
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/pruthvimjavali/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#60a5fa'}} className="text-lg hover:text-blue-400 transition duration-200">
                 LinkedIn
              </motion.a>
               <motion.a href="https://github.com/Pruth18" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#60a5fa'}} className="text-lg hover:text-blue-400 transition duration-200">
                 GitHub
              </motion.a>
              {/* Optional Phone */}
           </motion.div>
         </div>
      </motion.section>

    </>
  );
}