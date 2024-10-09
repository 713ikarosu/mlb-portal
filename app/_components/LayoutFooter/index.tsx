import { InstagramLogo } from "@/app/_components/InstagramLogo";
import { Logo } from "@/app/_components/Logo";
import { TwitterXLogo } from "@/app/_components/TwitterXLogo";
import Link from "next/link";

export const LayoutFooter = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
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
