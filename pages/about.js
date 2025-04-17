import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Pruthvi</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="max-w-2xl text-lg text-center mb-6">
          Hi! I'm Pruthvi, a driven Data Scientist with a background in Software Engineering. My journey into data began with a love for solving complex problems and a curiosity for how data shapes the world around us. With nearly two years of experience in software engineering, I bring a unique blend of technical expertise and a passion for analytics to every project.<br/><br/>
          I'm always learning, experimenting, and building. My goal is to use data to create real-world impact and continuously grow as a data professional. I thrive in collaborative environments and value clear communication, leadership, and a growth mindset.
        </p>
        <a href="/Pruthvi_M_Javali.pdf" download className="px-6 py-2 bg-blue-500 rounded shadow hover:bg-blue-600 transition">Download Resume</a>
      </main>
    </>
  );
}
