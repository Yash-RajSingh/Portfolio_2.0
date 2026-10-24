import styled from "styled-components";
import { Card } from "../shared/sharedElements";

export const Track = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin: ${({ theme }) => theme.spacing(5)} -${({ theme }) => theme.spacing(8)} 0;
  padding: 0 ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(1)};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 ${({ theme }) => theme.spacing(8)};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.li`
  flex: 0 0 82%;
  scroll-snap-align: start;
`;

export const SlideCard = styled(Card)<{ $dark: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ $dark, theme }) => ($dark ? theme.colors.ink : theme.colors.surface)};
  color: ${({ $dark, theme }) => ($dark ? theme.colors.onInk : theme.colors.text)};

  img {
    display: block;
    width: 100%;
    height: 8rem;
    object-fit: cover;
    object-position: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const SlideBody = styled.div<{ $dark: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: 800;
  }
  p,
  > ul:last-of-type {
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ $dark, theme }) => ($dark ? theme.colors.inkMuted : theme.colors.textMuted)};
  }
`;

export const Dots = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1.5)};

  button {
    width: 0.4rem;
    height: 0.4rem;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.border};
    cursor: pointer;
    transition:
      width 0.25s ease,
      background-color 0.25s ease;
  }
  button[aria-current="true"] {
    width: 1.4rem;
    background: ${({ theme }) => theme.colors.accent};
  }
`;
