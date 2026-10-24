import styled from "styled-components";

const EASE = "0.3s ease";

export const List = styled.ol`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    left: 0.4rem;
    top: 0.75rem;
    bottom: 0.75rem;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

export const Item = styled.li<{ $open: boolean }>`
  position: relative;
  border: 1px solid
    ${({ $open, theme }) => ($open ? theme.colors.accent : "transparent")};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ $open, theme }) => ($open ? theme.colors.surface : "transparent")};
  transition:
    border-color ${EASE},
    background-color ${EASE};

  &::before {
    content: "";
    position: absolute;
    left: calc(-${({ theme }) => theme.spacing(6)} + 0.1rem);
    top: 0.85rem;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: ${({ $open, theme }) => ($open ? theme.colors.accent : theme.colors.barSoft)};
    transition: background-color ${EASE};
  }
`;

export const Head = styled.button<{ $open: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  border: 0;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;

  > span:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  small {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.accent};
  }
  > span:last-child {
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.textMuted};
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0")});
    transition: transform ${EASE};
  }
`;

export const Body = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.textMuted};

  > ul:first-child li::before {
    content: "· ";
  }
  > ul:last-child {
    text-transform: none;
  }
`;
