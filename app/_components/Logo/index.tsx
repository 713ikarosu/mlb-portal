import { LogoIcon } from "@/app/_components/LogoIcon";

export const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-2 text-2xl font-bold flex-1 px-2">
      <LogoIcon />
      <span>MLBポータル</span>
    </a>
  );
};
