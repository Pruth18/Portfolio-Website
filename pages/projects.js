import Head from 'next/head'
import { useState } from 'react'
import projects from '../data/projects.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)
  return (
    <>
      <Head>
        <title>Projects | Pruthvi</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-12 mt-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="w-full max-w-2xl space-y-6">
          {projects.map((project, idx) => (
            <motion.div key={project.title} layout className="bg-gray-800 rounded-lg shadow p-6 cursor-pointer hover:bg-gray-700 transition" onClick={() => setExpanded(expanded === idx ? null : idx)}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-400 text-sm">{project.tech.join(', ')}</p>
                </div>
                <span className="ml-4 text-blue-400">{expanded === idx ? '▲' : '▼'}</span>
              </div>
              <AnimatePresence>
                {expanded === idx && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-4">
                    <p className="mb-2">{project.description}</p>
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-2">
                        {project.links.map(link => (
                          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition text-white text-sm">{link.label}</a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  )
}
