import { Logo } from "../Logo";

export const LayoutHeader = () => {
  return (
    <header className="navbar">
      <div className="container mx-auto">
        <div className="w-full flex justify-between">
          <a href="/" className="flex space-x-2 text-2xl font-bold">
            <Logo />
            <span>MLB PORTAL</span>
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/news/">ニュース</a>
              </li>
              <li>
                <a href="/words/">用語</a>
              </li>
              <li>
                <a href="/teams/">チーム</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
