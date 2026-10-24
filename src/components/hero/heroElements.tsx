import styled from "styled-components";
import { gridBackground } from "@/styles/mixins";
import { mobile } from "@/styles/media";
import { Highlight } from "../shared/sharedElements";

export const Band = styled.section`
  ${gridBackground}
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      circle 18rem at var(--mx, 50%) var(--my, 50%),
      ${({ theme }) => theme.colors.accent}1f,
      transparent 70%
    );
    opacity: var(--spot, 0);
    transition: opacity 0.4s ease;
  }
  @media (hover: none) {
    &::after {
      display: none;
    }
  }

  > div {
    position: relative;
    z-index: 1;
    min-height: calc(85vh - ${({ theme }) => theme.header.height});
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: ${({ theme }) => theme.spacing(10)};
    align-items: center;

    @media (max-width: 50rem) {
      grid-template-columns: 1fr;
    }

    ${mobile} {
      min-height: calc(100dvh - ${({ theme }) => theme.header.height});
      align-content: center;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  > div > ul {
    font-size: ${({ theme }) => theme.font.size.sm};
    text-transform: none;
  }
`;

export const Status = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.accent};

  &::before {
    content: "";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: currentColor;
    vertical-align: middle;
  }
`;

export const Title = styled.h1`
  max-width: 12ch;
  font-size: clamp(2.5rem, 5.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.05;
`;

export const Description = styled.p`
  max-width: 32rem;
  font-size: 1.0625rem;
  color: ${({ theme }) => theme.colors.textMuted};

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${mobile} {
    justify-content: center;

    > a {
      min-width: 10rem;
      text-align: center;
    }
  }
`;

export const SweepHighlight = styled(Highlight)`
  background: linear-gradient(
      ${({ theme }) => theme.colors.accentSoft},
      ${({ theme }) => theme.colors.accentSoft}
    )
    left / 0% 100% no-repeat;
  transition: background-size 0.7s ease 0.35s;

  [data-inview="true"] & {
    background-size: 100% 100%;
  }
`;
