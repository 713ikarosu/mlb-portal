import { Logo } from "@/app/_components/Logo";

export const LayoutFooter = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral">
      <aside className="items-center grid-flow-col">
        <Logo />
        <p>Copyright © {new Date().getFullYear()} - mlb-portal - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* <Link href="/">
          <TwitterXLogo />
        </Link>
        <Link href="/">
          <InstagramLogo />
        </Link> */}
      </nav>
    </footer>
  );
};
