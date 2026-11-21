import type { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

/** Shared tooltip that appears on pointer hover and keyboard focus. */
export function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="app-tooltip" data-tooltip={content}>
      {children}
    </span>
  );
}
