import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero min-h-screen" style={{ backgroundImage: "url(/image/top/main_visual.jpg)" }}>
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">MLB ポータル</h1>
            <p className="mb-5">
              日本人向けのMLBファンサイトです。MLBの基本情報から、最新情報・日本人選手情報などをお届けします。
            </p>
            <Link href="/words/">
              <button type="button" className="btn">
                はじめる
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 text-slate-600 px-4 py-24">
        <h2 className="text-3xl font-bold text-center py-8">日本のメジャーリーグファンへ</h2>
        <div className="flex justify-center gap-4 py-8 flex-col md:flex-row">
          {/* TODO: コンポーネント化 */}
          <div className="card min-w-80 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">MLB用語解説(開発中)</h2>
              <p>数多くあるメジャーリーグ用語を日本人向けにお届け。</p>
            </div>
          </div>

          <div className="card min-w-80 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">日本人MLB選手情報(公開予定)</h2>
              <p>メジャーリーグで活躍する日本人選手の情報を日本人向けに紹介。</p>
            </div>
          </div>

          <div className="card min-w-80 bg-slate-100 shadow-xl">
            <div className="card-body text-slate-600">
              <h2 className="card-title">お気に入り球団情報(公開予定)</h2>
              <p>30球団あるメジャーリーグ球団からお気に入りの球団の情報をお届け。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:p-24">
        <h2 className="text-3xl font-bold py-8">新規コンテンツ鋭意制作中</h2>
        <p>今後は、MLBの試合速報や日本人選手の試合結果などもお届け予定です。お楽しみに！</p>
      </section>
    </main>
  );
}
