import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import styled from "styled-components";
import { CONTACT, PROFILE } from "@/data/siteContent";
import { Container, Mono, OnlyMobile } from "../shared/sharedElements";
import { Reveal } from "../shared/reveal";
import { mobile } from "@/styles/media";
import { gridBackground } from "@/styles/mixins";

const Band = styled.section`
  ${gridBackground}
  padding: ${({ theme }) => theme.spacing(20)} 0;

  ${mobile} {
    padding: ${({ theme }) => theme.spacing(16)} 0;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 800;
  line-height: 1.1;

  span {
    color: ${({ theme }) => theme.colors.accent};
    background: linear-gradient(currentColor, currentColor) left bottom / 0% 3px no-repeat;
    padding-bottom: 0.08em;
    transition: background-size 0.6s ease 0.9s;
  }
  [data-inview="true"] & span {
    background-size: 100% 3px;
  }
`;

const Row = styled.div`
  text-transform: lowercase;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  a:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Copy = styled.button`
  padding: 0.45rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.35rem;
  background: ${({ theme }) => theme.colors.surface};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &::after {
    content: " ⧉";
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ${mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;

    &::after {
      content: none;
    }
    > span:last-child {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const TYPE_MS = 35;

function TypedPrompt({ text }: { text: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.6);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setCount((n) => {
        if (n >= text.length) clearInterval(id);
        return Math.min(n + 1, text.length);
      });
    }, TYPE_MS);
    return () => clearInterval(id);
  }, [inView, text.length]);

  return (
    <Mono ref={ref} aria-label={text}>
      <span aria-hidden>
        {text.slice(0, count)}
        <span style={{ visibility: "hidden" }}>{text.slice(count)}</span>
      </span>
    </Mono>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Band id={CONTACT.id}>
      <Container>
        <Reveal>
          <TypedPrompt text={CONTACT.prompt} />
          <Title>
            {CONTACT.titleBefore} <span>{CONTACT.titleHighlight}</span>
          </Title>
          <Row>
            <Copy onClick={copyEmail} aria-label={CONTACT.copyLabel}>
              <span>{copied ? CONTACT.copied : PROFILE.email}</span>
              <OnlyMobile>{CONTACT.copyShort}</OnlyMobile>
            </Copy>
            {CONTACT.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </Row>
        </Reveal>
      </Container>
    </Band>
  );
}
