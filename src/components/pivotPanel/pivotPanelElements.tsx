import styled, { css } from "styled-components";

export const Panel = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0.4rem 0.4rem 0
    ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.accent : theme.colors.text};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Chip = styled.button<{ $active: boolean }>`
  text-transform: lowercase;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.35rem;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: grab;
  transition: transform 0.15s ease;

  &::before {
    content: "⠿ ";
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      border: 1.5px solid ${theme.colors.accent};
      color: ${theme.colors.accent};
      transform: rotate(-3deg);
      box-shadow: 0.15rem 0.15rem 0 ${theme.colors.accent};
    `}
`;

export const Zones = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Zone = styled.div<{ $primary?: boolean; $over?: boolean }>`
  text-transform: lowercase;
  padding: 0.4rem 0.6rem;
  border: 1.5px dashed ${({ theme }) => theme.colors.border};
  border-radius: 0.35rem;
  color: ${({ theme }) => theme.colors.textMuted};

  ${({ $primary, theme }) =>
    $primary &&
    css`
      border-color: ${theme.colors.accent};
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.accent};
    `}

  ${({ $over }) =>
    $over &&
    css`
      border-style: solid;
    `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 0.35rem 0.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    text-align: left;
    text-transform: lowercase;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  td {
    padding: 0.35rem 0.25rem;
  }
  tbody tr:nth-child(even) {
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

export const Mark = styled.span<{ $on: boolean }>`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ $on, theme }) => ($on ? theme.colors.accent : "transparent")};
  border: 1px solid
    ${({ $on, theme }) => ($on ? theme.colors.accent : theme.colors.border)};
`;

export const Value = styled.span`
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Empty = styled.span`
  color: ${({ theme }) => theme.colors.border};
`;

export const Footer = styled.p`
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const AnimatedRow = styled.tr<{ $shown: boolean; $index: number }>`
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  translate: ${({ $shown }) => ($shown ? "none" : "-8px 0")};
  transition:
    opacity 0.3s ease,
    translate 0.3s ease;
  transition-delay: ${({ $index }) => $index * 60}ms;
`;
