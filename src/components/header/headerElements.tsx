import styled from "styled-components";
import { mobile } from "@/styles/media";

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  height: ${({ theme }) => theme.header.height};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  white-space: nowrap;
  font-family: ${({ theme }) => theme.font.display};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const Logo = styled.span`
  padding: 0.1rem 0.45rem;
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 400;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  ${mobile} {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const GithubLink = styled.a`
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.accent};

  ${mobile} {
    display: none;
  }
`;

export const ThemeToggle = styled.button`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: transparent;
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 1;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
  }
`;
