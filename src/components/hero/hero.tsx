import type { MouseEvent } from "react";
import { HERO } from "@/data/siteContent";
import {
  Button,
  Container,
  DesktopBlock,
  OnlyDesktop,
  OnlyMobile,
  TagList,
} from "../shared/sharedElements";
import { PivotPanel } from "../pivotPanel/pivotPanel";
import { Ticker } from "./ticker";
import { Reveal } from "../shared/reveal";
import {
  Band,
  Text,
  Status,
  Title,
  Description,
  Ctas,
  SweepHighlight,
} from "./heroElements";

const STAGGER_MS = 90;

export function Hero() {
  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    e.currentTarget.style.setProperty("--spot", "1");
  }
  const onMouseLeave = (e: MouseEvent<HTMLElement>) =>
    e.currentTarget.style.setProperty("--spot", "0");

  return (
    <Band onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <Container>
        <Text>
          <Reveal delay={0}>
            <Status>
              <OnlyDesktop>
                <Ticker items={HERO.status.desktop} />
              </OnlyDesktop>
              <OnlyMobile>
                <Ticker items={HERO.status.mobile} />
              </OnlyMobile>
            </Status>
          </Reveal>
          <Reveal delay={STAGGER_MS}>
            <Title>
              {HERO.titleBefore} <SweepHighlight>{HERO.titleHighlight}</SweepHighlight>
              {HERO.titleAfter}
            </Title>
          </Reveal>
          <Reveal delay={STAGGER_MS * 2}>
            <Description>
              <OnlyDesktop>{HERO.description}</OnlyDesktop>
              <OnlyMobile>{HERO.descriptionShort}</OnlyMobile>{" "}
              <strong>{HERO.descriptionHighlight}</strong>
            </Description>
          </Reveal>
          <Reveal delay={STAGGER_MS * 3}>
            <TagList items={HERO.stack} />
          </Reveal>
          <Reveal delay={STAGGER_MS * 4}>
            <Ctas>
              <Button
                href={HERO.resumeCta.href}
                target="_blank"
                rel="noreferrer"
                $variant="primary"
              >
                {HERO.resumeCta.label}
              </Button>
            </Ctas>
          </Reveal>
        </Text>
        <DesktopBlock>
          <Reveal from="right" delay={STAGGER_MS * 2}>
            <PivotPanel />
          </Reveal>
        </DesktopBlock>
      </Container>
    </Band>
  );
}
