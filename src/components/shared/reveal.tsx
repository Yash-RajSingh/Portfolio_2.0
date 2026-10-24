import type { ReactNode } from "react";
import styled from "styled-components";
import { useInView } from "@/hooks/useInView";

type From = "below" | "right" | "none";

const offsets: Record<From, string> = {
  below: "0 16px",
  right: "24px 0",
  none: "0 0",
};

const Box = styled.div<{ $in: boolean; $from: From; $delay: number }>`
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  translate: ${({ $in, $from }) => ($in ? "none" : offsets[$from])};
  transition:
    opacity 0.6s ease,
    translate 0.6s ease;
  transition-delay: ${({ $delay }) => $delay}ms;
`;

export function Reveal({
  children,
  delay = 0,
  from = "below",
  className,
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <Box
      ref={ref}
      className={className}
      $in={inView}
      $from={from}
      $delay={delay}
      data-inview={inView}
    >
      {children}
    </Box>
  );
}
