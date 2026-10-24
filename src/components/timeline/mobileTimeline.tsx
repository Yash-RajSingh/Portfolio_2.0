import { useState } from "react";
import { TIMELINE } from "@/data/siteContent";
import { Collapse, TagList } from "../shared/sharedElements";
import { List, Item, Head, Body } from "./mobileTimelineElements";

const jobs = [...TIMELINE.jobs].reverse();

export function MobileTimeline() {
  const [open, setOpen] = useState(0);

  return (
    <List>
      {jobs.map((j, i) => {
        const isOpen = i === open;
        const bodyId = `job-${i}`;
        return (
          <Item key={`${j.role}-${j.company}`} $open={isOpen}>
            <Head
              $open={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={bodyId}
            >
              <span>
                {isOpen && <small>{j.period}</small>}
                <span>
                  {j.role} · {j.company}
                </span>
              </span>
              <span aria-hidden>▾</span>
            </Head>
            <Collapse $open={isOpen} inert={!isOpen} id={bodyId}>
              <div>
                <Body>
                  <ul>
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <TagList items={j.stack} />
                </Body>
              </div>
            </Collapse>
          </Item>
        );
      })}
    </List>
  );
}
