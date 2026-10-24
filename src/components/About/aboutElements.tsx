import styled from "styled-components";
import type { AppTheme } from "@/styles/theme";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: ${({ theme }) => theme.spacing(8)};
  align-items: center;

  @media (max-width: 45rem) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  p {
    max-width: 32rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Code = styled.pre`
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: pre-wrap;
`;

export const Hobbies = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const tones: (keyof AppTheme["colors"])[] = ["tileGreen", "tileBlue", "tileYellow", "barSoft"];
const tilts = ["-2deg", "1.5deg", "1deg", "-1.5deg"];

export const HobbyCard = styled.li<{ $i: number }>`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 3px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ $i, theme }) => theme.colors[tones[$i % tones.length]]};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  rotate: ${({ $i }) => tilts[$i % tilts.length]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  transition:
    rotate 0.25s ease,
    translate 0.25s ease;

  &:hover {
    rotate: 0deg;
    translate: 0 -3px;
  }

  svg {
    width: 100%;
    height: auto;
    max-height: 6rem;
  }

  .draw {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset 1.4s ease ${({ $i }) => 300 + $i * 180}ms;
  }
  [data-inview="true"] & .draw {
    stroke-dashoffset: 0;
  }

  .spin,
  .wave,
  .pop,
  .zoom {
    transform-box: fill-box;
    transform-origin: center;
    transition:
      rotate 0.9s ease,
      scale 0.3s ease;
  }
  .wave {
    transform-origin: left center;
  }
  &:hover .spin {
    rotate: 360deg;
  }
  &:hover .wave {
    rotate: -14deg;
  }
  &:hover .pop {
    scale: 1.25;
  }
  &:hover .zoom {
    scale: 1.15;
  }
  strong {
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-family: ${({ theme }) => theme.font.display};
    font-size: ${({ theme }) => theme.font.size.base};
  }
  span {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    opacity: 0.75;
  }
`;
