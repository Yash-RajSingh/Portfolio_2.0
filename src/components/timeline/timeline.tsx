import { useState, type CSSProperties, type FocusEvent } from "react";
import { TIMELINE } from "@/data/siteContent";
import {
  Container,
  Section,
  SectionTitle,
  Mono,
  TagList,
  DesktopBlock,
  MobileBlock,
} from "../shared/sharedElements";
import { Reveal } from "../shared/reveal";
import {
  Head,
  Axis,
  Chart,
  Bars,
  Track,
  Bar,
  Details,
  DetailCard,
  Points,
} from "./timelineElements";
import { MobileTimeline } from "./mobileTimeline";

const span = TIMELINE.endYear - TIMELINE.startYear;

function toPercent(date: string | null) {
  if (!date) return 100;
  const [y, m] = date.split("-").map(Number);
  return ((y + (m - 1) / 12 - TIMELINE.startYear) / span) * 100;
}

const years = Array.from({ length: span }, (_, i) => TIMELINE.startYear + i);

const TOOLTIP_ID = "timeline-tooltip";

export function Timeline() {
  const [tip, setTip] = useState({ index: 0, visible: false });
  const show = (index: number) => setTip({ index, visible: true });
  const hide = () => setTip((t) => ({ ...t, visible: false }));

  const job = TIMELINE.jobs[tip.index];
  const start = toPercent(job.start);
  const cardLeft = Math.min(start, 40);
  const caret = ((start - cardLeft) / (100 - cardLeft)) * 100;

  function onBlur(e: FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget)) hide();
  }

  return (
    <Section id={TIMELINE.id}>
      <Container>
        <Reveal>
          <Head>
            <SectionTitle>{TIMELINE.title}</SectionTitle>
            <DesktopBlock>
              <Mono>{TIMELINE.hint}</Mono>
            </DesktopBlock>
          </Head>
          <MobileBlock>
            <MobileTimeline />
          </MobileBlock>
          <DesktopBlock>
            <Axis>
              {years.map((y, i) => (
                <li key={y} style={{ left: `${(i / span) * 100}%` }}>
                  {y}
                </li>
              ))}
            </Axis>
            <Chart onMouseLeave={hide} onBlur={onBlur}>
              <Bars>
                {TIMELINE.jobs.map((j, i) => {
                  const left = toPercent(j.start);
                  const active = tip.visible && i === tip.index;
                  return (
                    <Track key={`${j.role}-${j.company}`}>
                      <Bar
                        $tone={j.tone}
                        $active={active}
                        style={
                          {
                            left: `${left}%`,
                            width: `${toPercent(j.end) - left}%`,
                            "--i": i,
                          } as CSSProperties
                        }
                        onMouseEnter={() => show(i)}
                        onFocus={() => show(i)}
                        onClick={() => show(i)}
                        aria-label={`${j.role} at ${j.company}`}
                        aria-describedby={active ? TOOLTIP_ID : undefined}
                      >
                        {j.shortLabel}
                      </Bar>
                    </Track>
                  );
                })}
              </Bars>
              <Details>
                <DetailCard
                  id={TOOLTIP_ID}
                  role="tooltip"
                  $visible={tip.visible}
                  aria-hidden={!tip.visible}
                  style={
                    {
                      left: `${cardLeft}%`,
                      "--caret": `calc(${caret}% + 1rem)`,
                    } as CSSProperties
                  }
                >
                  <span>
                    {job.period} · <b>{job.role}</b> @ {job.company}
                  </span>
                  <Points>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </Points>
                  <TagList items={job.stack} />
                </DetailCard>
              </Details>
            </Chart>
          </DesktopBlock>
        </Reveal>
      </Container>
    </Section>
  );
}
