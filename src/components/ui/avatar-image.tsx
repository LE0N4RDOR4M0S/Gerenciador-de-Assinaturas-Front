// /src/components/ui/avatar-image.tsx

interface AvatarImageProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export function AvatarImage({ src, alt, className = "" }: AvatarImageProps) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }
  