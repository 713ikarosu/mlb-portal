"use client";
import type { ReactNode } from "react";

type IconButtonProps = {
  label: ReactNode;
};

export default function IconButton({ label }: IconButtonProps) {
  const openModal = () => {
    console.log("open modal");
  };

  return (
    <button type="button" className="btn btn-success btn-sm text-white" onClick={openModal}>
      {label}
    </button>
  );
}
