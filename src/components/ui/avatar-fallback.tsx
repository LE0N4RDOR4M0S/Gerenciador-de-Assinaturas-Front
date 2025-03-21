// /src/components/ui/avatar-fallback.tsx

import { ReactNode } from "react";

interface AvatarFallbackProps {
    children: ReactNode;
    className?: string;
  }
  
  export function AvatarFallback({ children, className = "" }: AvatarFallbackProps) {
    return (
      <div
        className={`flex items-center justify-center text-white bg-gray-400 ${className}`}
      >
        {children}
      </div>
    );
  }
  