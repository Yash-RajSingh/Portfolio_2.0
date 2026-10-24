import styled from "styled-components";

export const Pop = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  min-width: min(20rem, 90vw);
  z-index: 2;
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
  cursor: default;

  opacity: 0;
  transform: translateY(-4px);
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: 0.6rem;
  }
`;

export const PopImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 6;
  object-fit: cover;
  object-position: top;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.accentSoft};
`;

export const PopColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.font.size.sm};

  h4 {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: 400;
    text-transform: lowercase;
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const PopActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
`;
