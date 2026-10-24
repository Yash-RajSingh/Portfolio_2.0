import styled, { css } from "styled-components";

const EASE = "0.25s ease";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Axis = styled.ol`
  position: relative;
  height: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  list-style: none;

  li {
    position: absolute;
    top: 0;
  }
`;

export const Chart = styled.div`
  position: relative;
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Track = styled.div`
  position: relative;
  height: 2.25rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top: 1px dashed ${({ theme }) => theme.colors.border};
  }
`;

export type BarTone = "muted" | "soft" | "accent";

export const Bar = styled.button<{ $tone: BarTone; $active: boolean }>`
  position: absolute;
  top: 0.3rem;
  bottom: 0.3rem;
  min-width: max-content;
  border: 0;
  border-radius: 0.2rem;
  cursor: pointer;
  padding: 0 0.6rem;
  text-align: left;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ $tone, theme }) =>
    $tone === "muted" ? theme.colors.barMuted : theme.colors.barSoft};
  clip-path: inset(-4px 100% -4px -4px);
  transition:
    background-color ${EASE},
    color ${EASE},
    box-shadow ${EASE},
    filter ${EASE},
    clip-path 0.8s ease calc(var(--i, 0) * 150ms + 250ms);

  [data-inview="true"] & {
    clip-path: inset(-4px);
  }

  &:hover {
    filter: brightness(1.05);
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.onAccent};
      background: ${theme.colors.accent};
      box-shadow: 0 0 0 3px ${theme.colors.accentSoft};
    `}
`;

export const Details = styled.div`
  position: relative;
  z-index: 3;
`;

export const DetailCard = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)};
  right: 0;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.onInk};
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.font.size.sm};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : "6px")});
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    opacity ${EASE},
    transform ${EASE},
    left ${EASE};

  > span,
  ul:last-child {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.inkMuted};
    text-transform: none;
  }
  > span {
    color: ${({ theme }) => theme.colors.warm};
  }
  > span b {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.accent};
  }

  &::before {
    content: "";
    position: absolute;
    top: -0.45rem;
    left: var(--caret);
    border: 0.5rem solid transparent;
    border-top: 0;
    border-bottom-color: ${({ theme }) => theme.colors.ink};
    transition: left ${EASE};
  }

  @media (max-width: 45rem) {
    left: 0 !important;

    &::before {
      display: none;
    }
  }
`;

export const Points = styled.ul`
  li::before {
    content: "· ";
  }
`;
