import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    color-scheme: ${({ theme }) => theme.colorScheme};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.barSoft} transparent;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.barSoft};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.header.height};
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.font.display};
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :where(a[target="_blank"]) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
  }
  :where(a[target="_blank"])::after {
    content: "";
    flex-shrink: 0;
    width: 0.9em;
    height: 0.9em;
    background: currentColor;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 17 17 7'/%3E%3Cpath d='M8 7h9v9'/%3E%3C/svg%3E")
      center / contain no-repeat;
  }

  button {
    font: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    #root *, #root *::before, #root *::after {
      animation: none !important;
    }
  }
`;
