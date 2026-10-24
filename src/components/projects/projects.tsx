import { useState } from "react";
import { PROJECTS } from "@/data/siteContent";
import {
  Collapse,
  Container,
  DesktopBlock,
  MobileBlock,
  Mono,
  Section,
  SectionTitle,
  TagList,
} from "../shared/sharedElements";
import { Reveal } from "../shared/reveal";
import { ProjectPopover } from "./popover";
import { ProjectCarousel } from "./carousel";
import {
  Head,
  Count,
  Grid,
  Side,
  ProjectCard,
  HoverTarget,
  Shot,
  Body,
  TitleRow,
  Links,
  DarkCard,
  MoreButton,
  ExpandedGrid,
  CompactCard,
  EmptySlot,
  RevealCard,
  Thumb,
} from "./projectsElements";

type Project = (typeof PROJECTS.items)[number];

const STAGGER_MS = 60;
const COLUMNS = 3;
const [featured, highlight, ...rest] = PROJECTS.items;
const emptySlots = rest.length % COLUMNS === 0 ? COLUMNS - 2 : 0;

function CardLinks({ project }: { project: Project }) {
  const links = [
    { label: PROJECTS.cardLinks.live, href: project.live },
    { label: PROJECTS.cardLinks.code, href: project.code },
  ].filter((l) => l.href);

  return (
    <Links>
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href!} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        </li>
      ))}
    </Links>
  );
}

const popId = (p: Project) => `project-${p.name.replace(/W+/g, "-")}`;

function Title({ project, id = popId(project) }: { project: Project; id?: string }) {
  return (
    <h3>
      <HoverTarget tabIndex={0} aria-describedby={id}>
        {project.name}
      </HoverTarget>
    </h3>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <Body>
      <TitleRow>
        <Title project={project} />
        <CardLinks project={project} />
      </TitleRow>
      <p>{project.description}</p>
      <TagList items={project.stack} />
    </Body>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id={PROJECTS.id}>
      <Container>
        <Reveal>
          <Head>
            <SectionTitle>{PROJECTS.title}</SectionTitle>
            <Count $visible={expanded} aria-hidden={!expanded}>
              {PROJECTS.items.length} {PROJECTS.countLabel} ·{" "}
              <button onClick={() => setExpanded(false)} tabIndex={expanded ? 0 : -1}>
                {PROJECTS.showLess}
              </button>
            </Count>
          </Head>

          <MobileBlock>
            <ProjectCarousel />
          </MobileBlock>

          <DesktopBlock>
            <Collapse $open={!expanded} inert={expanded}>
              <div>
                <Grid>
                  <ProjectCard>
                    <Shot src={featured.image} alt={featured.imageAlt} loading="lazy" />
                    <ProjectBody project={featured} />
                    <ProjectPopover id={popId(featured)} project={featured} showImage={false} />
                  </ProjectCard>
                  <Side>
                    <DarkCard>
                      <ProjectBody project={highlight} />
                      <ProjectPopover id={popId(highlight)} project={highlight} />
                    </DarkCard>
                    <MoreButton onClick={() => setExpanded(true)} aria-expanded={expanded}>
                      <span>{PROJECTS.showMore.replace("{n}", String(rest.length))}</span>
                      <ul>
                        {rest.map((p) => (
                          <li key={p.name}>
                            {p.name} <Mono>{p.stack.join(", ")}</Mono>
                          </li>
                        ))}
                      </ul>
                    </MoreButton>
                  </Side>
                </Grid>
              </div>
            </Collapse>

            <Collapse $open={expanded} inert={!expanded}>
              <div>
                <ExpandedGrid>
                  {[featured, highlight].map((p) => (
                    <CompactCard key={p.name}>
                      <Title project={p} id={`${popId(p)}-all`} />
                      <span>{PROJECTS.alreadyShown}</span>
                      <ProjectPopover id={`${popId(p)}-all`} project={p} />
                    </CompactCard>
                  ))}
                  {Array.from({ length: emptySlots }, (_, i) => (
                    <EmptySlot key={i} aria-hidden />
                  ))}
                  {rest.map((p, i) => (
                    <RevealCard key={p.name} $open={expanded} $delay={i * STAGGER_MS}>
                      <Thumb $i={i} aria-hidden>
                        {p.thumb}
                      </Thumb>
                      <Title project={p} />
                      <p>{p.tagline}</p>
                      <TagList items={p.stack} />
                      <ProjectPopover id={popId(p)} project={p} />
                    </RevealCard>
                  ))}
                </ExpandedGrid>
              </div>
            </Collapse>
          </DesktopBlock>
        </Reveal>
      </Container>
    </Section>
  );
}
