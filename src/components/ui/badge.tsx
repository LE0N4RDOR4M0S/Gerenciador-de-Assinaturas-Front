"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
