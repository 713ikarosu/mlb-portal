"use client";
import Link from "next/link";
import type { ReactNode } from "react";

type IconButtonProps = {
  label: ReactNode;
  buttonType: "success" | "ghost";
  onClick?: () => void;
  href?: string;
};
// TODO: アイコンを入れる
export default function IconButton({ label, buttonType = "success", onClick, href }: IconButtonProps) {
  return href ? (
    <Link href={href} className={`btn btn-sm text-white ${buttonType === "success" ? "btn-success" : ""}`}>
      {label}
    </Link>
  ) : (
    <button
      type="button"
      className={`btn btn-sm text-white ${buttonType === "success" ? "btn-success" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
