import { css } from "styled-components";

export const gridBackground = css`
  background-color: ${({ theme }) => theme.colors.background};
  background-image:
    linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
  background-size: 1.5rem 1.5rem;
`;
