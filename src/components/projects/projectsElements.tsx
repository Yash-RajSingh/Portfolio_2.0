import styled, { css } from "styled-components";
import { Card } from "../shared/sharedElements";
import type { AppTheme } from "@/styles/theme";
import { Pop } from "./popoverElements";
import { mobile } from "@/styles/media";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Count = styled.span<{ $visible: boolean }>`
  ${mobile} {
    display: none;
  }
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition:
    opacity 0.35s ease,
    visibility 0.35s;
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  button {
    border: 0;
    background: none;
    font: inherit;
    text-transform: inherit;
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;
  }
  button:hover {
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: 45rem) {
    grid-template-columns: 1fr;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const clickable = css`
  position: relative;
  overflow: visible;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;

  &:hover,
  &:focus-within {
    z-index: 5;
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:hover ${Pop},
  &:focus-within ${Pop} {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
  &:has(:focus-visible) {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const ProjectCard = styled(Card)`
  ${clickable}
`;

export const HoverTarget = styled.span`
  cursor: default;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const Shot = styled.img`
  display: block;
  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: top;
  border-radius: ${({ theme }) => theme.radius} ${({ theme }) => theme.radius} 0 0;
  background: ${({ theme }) => theme.colors.accentSoft};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  p {
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing(3)};

  h3 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: 800;
  }
`;

export const Links = styled.ul`
  position: relative;
  z-index: 1;
  text-transform: lowercase;
  display: flex;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.accent};

  li + li::before {
    content: "·";
    margin: 0 0.5em;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const DarkCard = styled(ProjectCard)`
  flex: 1;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.onInk};

  ${Body} p,
  ${Body} > ul:last-child {
    color: ${({ theme }) => theme.colors.inkMuted};
  }
  ${Links} {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MoreButton = styled.button`
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  > span {
    display: block;
    text-transform: lowercase;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.accent};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li + li::before {
    content: "·";
    margin: 0 0.4em;
  }
`;

export const ExpandedGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 37.5rem) {
    grid-template-columns: 1fr;
  }
`;

export const CompactCard = styled(ProjectCard)`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.surfaceAlt};

  h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textMuted};
  }
  > span {
    text-transform: lowercase;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const EmptySlot = styled.div`
  border: 1.5px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};

  @media (max-width: 50rem) {
    display: none;
  }
`;

export const RevealCard = styled(ProjectCard)<{ $open: boolean; $delay: number }>`
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0.25rem 0.25rem 0 ${({ theme }) => theme.colors.accent};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  translate: 0 ${({ $open }) => ($open ? 0 : "12px")};
  transition:
    opacity 0.35s ease ${({ $open, $delay }) => ($open ? $delay + 120 : 0)}ms,
    translate 0.35s ease ${({ $open, $delay }) => ($open ? $delay + 120 : 0)}ms,
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;

  h3 {
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: 800;
  }
  p {
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const thumbTones: (keyof AppTheme["colors"])[] = [
  "thumbSlate",
  "thumbBlue",
  "thumbSand",
];

export const Thumb = styled.div<{ $i: number }>`
  display: grid;
  place-items: center;
  height: 3.5rem;
  border-radius: 0.4rem;
  background: ${({ $i, theme }) => theme.colors[thumbTones[$i % thumbTones.length]]};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: lowercase;
`;
