"use client";
import { Logo } from "@/app/_components/Logo";
import type { ReactNode } from "react";

interface LayoutHeaderProps {
  children: ReactNode;
}

const MENU_ITEMS = [
  {
    label: "ホーム",
    url: "/",
  },
  {
    label: "ニュース",
    url: "/",
  },
  {
    label: "用語",
    url: "/words/",
  },
  {
    label: "チーム",
    url: "/",
  },
];

export const LayoutHeader = ({ children }: LayoutHeaderProps) => {
  return (
    <div className="w-full">
      <div className="drawer drawer-end">
        <input id="header-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <nav className="navbar bg-base-300 w-full">
            <Logo />
            <div className="hidden flex-none md:block">
              <ul className="menu menu-horizontal">
                {MENU_ITEMS.map((item) => {
                  return (
                    <li key={item.label}>
                      <a href={item.url}>{item.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <label
              htmlFor="header-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost flex-none md:hidden"
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </nav>
          {children}
        </div>

        <div className="drawer-side">
          <label htmlFor="header-drawer" aria-label="close sidebar" className="drawer-overlay" />
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li>
              <Logo />
            </li>
            {MENU_ITEMS.map((item) => {
              return (
                <li key={item.label}>
                  <a href={item.url}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
