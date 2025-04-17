import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Pruthvi</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12 mt-16">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-lg">Let's connect! Reach out via any of the methods below.</p>
        <div className="flex flex-col space-y-4 text-lg">
          <a href="mailto:pruthvi182001@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition"><span>📧</span> pruthvi182001@gmail.com</a>
          <a href="https://linkedin.com/in/pruthvimjavali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition"><span>🔗</span> LinkedIn</a>
          <a href="tel:+919481521183" className="flex items-center gap-2 hover:text-blue-400 transition"><span>📞</span> +91-9481521183</a>
          <a href="https://github.com/Pruth18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition"><span>💻</span> GitHub</a>
        </div>
      </main>
    </>
  )
}
