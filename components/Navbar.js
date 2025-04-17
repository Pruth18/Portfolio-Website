import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 bg-gray-900 text-white fixed top-0 left-0 z-50">
      <ul className="flex gap-8 text-lg font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
