import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <p>mlb-portal</p>
        <Link href='/search'>search players</Link>
      </div>
    </main>
  );
}
