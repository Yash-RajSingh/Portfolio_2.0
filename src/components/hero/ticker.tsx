import { useEffect, useState } from "react";
import styled from "styled-components";

const INTERVAL_MS = 2500;
const SLIDE_MS = 450;

const Window = styled.span`
  display: inline-grid;
  overflow: hidden;
  vertical-align: bottom;
`;

const Item = styled.span<{ $pos: -1 | 0 | 1 }>`
  grid-area: 1 / 1;
  white-space: nowrap;
  opacity: ${({ $pos }) => ($pos === 0 ? 1 : 0)};
  transform: translateY(${({ $pos }) => $pos * 100}%);
  transition: ${({ $pos }) =>
    $pos === 1 ? "none" : `transform ${SLIDE_MS}ms ease, opacity ${SLIDE_MS}ms ease`};
`;

export function Ticker({ items }: { items: readonly string[] }) {
  const [{ index, leaving }, setState] = useState<{ index: number; leaving: number | null }>({
    index: 0,
    leaving: null,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => ({ index: (s.index + 1) % items.length, leaving: s.index }));
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  useEffect(() => {
    if (leaving === null) return;
    const id = setTimeout(() => setState((s) => ({ ...s, leaving: null })), SLIDE_MS);
    return () => clearTimeout(id);
  }, [leaving]);

  return (
    <Window aria-label={items.join(" · ")} role="text">
      {items.map((text, i) => (
        <Item key={text} $pos={i === index ? 0 : i === leaving ? -1 : 1} aria-hidden>
          {text}
        </Item>
      ))}
    </Window>
  );
}
