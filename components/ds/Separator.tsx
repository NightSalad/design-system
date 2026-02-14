export function Separator({ vertical = false, className = "" }) {
    return (
      <div
        className={
          vertical
            ? `w-px h-full bg-[var(--separator-color)] ${className}`
            : `h-px w-full bg-[var(--separator-color)] ${className}`
        }
      />
    );
  }