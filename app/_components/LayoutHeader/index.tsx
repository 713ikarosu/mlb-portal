export const LayoutHeader = () => {
  return (
    <header className="navbar">
      <div className="container mx-auto">
        <div className="w-full flex justify-between">
          <a href="/" className="text-2xl font-bold">
            MLB PORTAL
          </a>
          <nav>
            <ul className="flex space-x-5">
              <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/news">ニュース</a>
              </li>
              <li>
                <a href="/players">選手</a>
              </li>
              <li>
                <a href="/teams">チーム</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
