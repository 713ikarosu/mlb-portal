import Link from "next/link";
import { InstagramLogo } from "../InstagramLogo";
import { Logo } from "../Logo";
import { TwitterXLogo } from "../TwitterXLogo";

export const LayoutFooter = () => {
  return (
    <footer className="footer items-center mt-16 p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Logo />
        <p>Copyright © 2024 - mlb-portal - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="/">
          <TwitterXLogo />
        </Link>
        <Link href="/">
          <InstagramLogo />
        </Link>
      </nav>
    </footer>
  );
};
