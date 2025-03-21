// /src/components/ui/avatar.tsx

"use client";

import { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

export function Avatar({ children, className = "" }: AvatarProps) {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}
