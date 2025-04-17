import Head from 'next/head'
import { motion } from 'framer-motion'
import skills from '../data/skills.json'

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Pruthvi</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-12 mt-12">
        <h1 className="text-3xl font-bold mb-8">Skills</h1>
        <div className="w-full max-w-2xl">
          {skills
            .slice() // make a copy
            .sort((a, b) => b.percent - a.percent) // sort descending by percent
            .map((skill, idx) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <motion.div
                    className="h-4 rounded-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: skill.percent + '%' }}
                    transition={{ duration: 1.2, delay: idx * 0.15 }}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            <li>Leadership</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Problem Solving</li>
            <li>Continuous Learning</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </main>
    </>
  )
}
