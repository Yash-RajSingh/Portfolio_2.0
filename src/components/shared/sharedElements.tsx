import styled from "styled-components";
import { mobile, touch } from "@/styles/media";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(8)};
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(40)} 0;

  ${mobile} {
    padding: ${({ theme }) => theme.spacing(30)} 0;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: 800;
  line-height: 1.1;
`;

export const Mono = styled.span`
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Tags = styled.ul`
  text-transform: lowercase;
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  li + li::before {
    content: "·";
    margin: 0 0.5em;
  }
`;

export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

export const Highlight = styled.span`
  padding: 0 0.15em;
  border-radius: 0.2em;
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Button = styled.a<{ $variant?: "primary" | "outline" }>`
  padding: 0.7rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.35rem;
  font-size: ${({ theme }) => theme.font.size.base};
  background: ${({ $variant, theme }) =>
    $variant === "primary"
      ? theme.colorScheme === "dark"
        ? theme.colors.accent
        : theme.colors.text
      : "transparent"};
  color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.colors.background : theme.colors.text};
  border-color: ${({ $variant, theme }) =>
    $variant === "primary" && theme.colorScheme === "dark"
      ? theme.colors.accent
      : theme.colors.text};
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Collapse = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    grid-template-rows 0.35s ease,
    opacity 0.35s ease;

  > * {
    min-height: 0;
    min-width: 0;
    overflow: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: overflow 0s ${({ $open }) => ($open ? "0.35s" : "0s")};
    transition-behavior: allow-discrete;
  }
`;

export const OnlyDesktop = styled.span`
  ${mobile} {
    display: none;
  }
`;
export const OnlyMobile = styled.span`
  display: none;
  ${mobile} {
    display: inline;
  }
`;
export const DesktopBlock = styled.div`
  ${mobile} {
    display: none;
  }
`;
export const MobileBlock = styled.div`
  display: none;
  ${mobile} {
    display: block;
  }
`;
export const NoTouch = styled.span`
  ${touch} {
    display: none;
  }
`;
export const OnlyTouch = styled.span`
  display: none;
  ${touch} {
    display: inline;
  }
`;

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <Tags>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </Tags>
  );
}
