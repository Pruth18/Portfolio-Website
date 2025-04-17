import Head from 'next/head'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Pruthvi</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="max-w-xl text-center text-lg mb-6">Coming soon! Here you'll find posts about data science, analytics, learning journeys, and more. Stay tuned for updates.</p>
      </main>
    </>
  )
}
