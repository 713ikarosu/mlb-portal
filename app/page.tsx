import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(/image/top/main_visual.jpg)" }}>
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

      <div className="bg-gray-200 text-slate-600 py-24">
        <h2 className="text-3xl font-bold text-center py-8">日本のメジャーリーグファンへ</h2>
        <div className="flex justify-center space-x-4 py-8">
          {/* TODO: コンポーネント化 */}
          <div className="card w-96 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">MLB用語解説</h2>
              <p>数多くあるメジャーリーグ用語を日本人向けにお届け。</p>
            </div>
          </div>

          <div className="card w-96 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">日本人MLB選手情報</h2>
              <p>メジャーリーグで活躍する日本人選手の情報を日本人向けに紹介。</p>
            </div>
          </div>

          <div className="card w-96 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">お気に入り球団情報</h2>
              <p>30球団あるメジャーリーグ球団からお気に入りの球団の情報をお届け。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-24">
        <h2 className="text-3xl font-bold py-8">新規コンテンツ鋭意制作中</h2>
        <p>今後は、MLBの試合速報や日本人選手の試合結果などもお届け予定です。お楽しみに！</p>
      </div>
    </main>
  );
}
