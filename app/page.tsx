import Link from 'next/link';

export default function Home() {
  return (
    <main className="nav flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">
        About Page
      </Link>
    </main>
  )
}
