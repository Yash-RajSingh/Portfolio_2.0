import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  to { transform: translateX(-50%); }
`;

const EASE = "0.35s ease";

export const Band = styled.section`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.onInk};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

export const Strip = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(8)};
`;

const mono = `
  flex-shrink: 0;
  text-transform: lowercase;
  white-space: nowrap;
`;

export const Label = styled.span`
  ${mono}
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.warm};
`;

export const Toggle = styled.button`
  ${mono}
  border: 0;
  background: none;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.inkMuted};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.onInk};
  }
`;

export const Viewport = styled.div`
  flex: 1;
  overflow: hidden;
  mask: linear-gradient(90deg, #000 90%, transparent);
`;

export const Track = styled.ul`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
  font-size: ${({ theme }) => theme.font.size.sm};

  &:hover {
    animation-play-state: paused;
  }

  li::after {
    content: "/";
    margin: 0 1rem;
    color: ${({ theme }) => theme.colors.inkMuted};
  }
`;

export const Panel = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const PanelHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Groups = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(16rem, 100%), 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Group = styled.li<{ $open: boolean; $delay: number }>`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.sm};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? 0 : "8px")});
  transition:
    opacity ${EASE},
    transform ${EASE};
  transition-delay: ${({ $open, $delay }) => ($open ? $delay + 120 : 0)}ms;
`;

export const Meta = styled.span<{ $dated: boolean }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ $dated, theme }) => ($dated ? theme.colors.warm : theme.colors.inkMuted)};
`;
