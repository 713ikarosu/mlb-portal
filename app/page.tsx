import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">MLB PORTAL</h1>
            <p className="mb-5">
              日本人向けのMLBファンサイトです。MLBの基本情報から、最新情報・日本人選手情報などをお届けします。
            </p>
            <Link href="/">
              <button type="button" className="btn btn-neutral">
                はじめる
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
