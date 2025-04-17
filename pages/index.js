import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import skills from '../data/skills.json'
import projects from '../data/projects.json'

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Head>
        <title>Pruthvi | Data Science Portfolio</title>
        <meta name="description" content="Portfolio of Pruthvi - A passionate Data Scientist turning data into insights." />
      </Head>

      {/* Home Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 3, ease: 'easeInOut' }}
        style={{ backgroundImage: "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(107, 33, 168, 0.8)), url('/images/bg-image.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}
        className="min-h-screen flex flex-col items-center justify-center text-white px-4 transition-all duration-700 pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="text-6xl font-extrabold mb-4 text-center"
        >
          Welcome, I'm Pruthvi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="text-2xl text-center max-w-3xl mb-8"
        >
          A passionate Data Scientist turning complex data into meaningful insights.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="w-80 h-80 mb-8 rounded-full overflow-hidden shadow-xl"
        >
          <img src="/images/pruthvi-photo.jpg" alt="Pruthvi" className="w-full h-full object-cover" />
        </motion.div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Learn More About Me
        </motion.a>
      </motion.section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-16">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6">
            Hi! I'm Pruthvi, a driven Data Scientist with a background in Software Engineering. My journey into data began with a love for solving complex problems and a curiosity for how data shapes the world.
          </p>
          <a href="/Pruthvi_M_Javali.pdf" download className="px-6 py-2 bg-blue-500 rounded shadow hover:bg-blue-600 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 py-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
          <div className="space-y-4">
            {skills.slice().sort((a, b) => b.percent - a.percent).map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3, duration: 1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.percent + '%' }}
                    transition={{ delay: idx * 0.3, duration: 1 }}
                    className="bg-blue-500 h-4 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.4, duration: 1 }}
                className="bg-gray-800 rounded-lg shadow p-6 cursor-pointer hover:bg-gray-700 transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.tech.join(', ')}</p>
                  </div>
                  <span className="ml-4 text-blue-400">
                    {expanded === idx ? '▲' : '▼'}
                  </span>
                </div>
                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="mb-2">{project.description}</p>
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {project.links.map(link => (
                            <motion.a
                              key={link.label}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              {link.label}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-4 py-16">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl mb-6">Let's connect! You can reach me via email, LinkedIn, GitHub, or phone.</p>
          <div className="flex justify-center gap-8">
            <a href="mailto:your-email@example.com" className="underline">your-email@example.com</a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
            <a href="tel:+1234567890" className="underline">+1234567890</a>
          </div>
        </div>
      </section>
    </>
  )
}
