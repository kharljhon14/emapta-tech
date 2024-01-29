import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-200 w-full h-12">
      <nav className="flex items-center justify-center h-full space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
