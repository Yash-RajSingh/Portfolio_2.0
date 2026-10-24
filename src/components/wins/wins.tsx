import { useState } from "react";
import { WINS } from "@/data/siteContent";
import { Collapse, Container } from "../shared/sharedElements";
import { Reveal } from "../shared/reveal";
import {
  Band,
  Strip,
  Label,
  Toggle,
  Viewport,
  Track,
  Panel,
  PanelHead,
  Groups,
  Group,
  Meta,
} from "./winsElements";

const STAGGER_MS = 60;

export function Wins() {
  const [open, setOpen] = useState(false);
  const loop = [...WINS.items, ...WINS.items];

  return (
    <Band id={WINS.id}>
      <Reveal>
      <Collapse $open={!open} inert={open}>
        <div>
          <Strip>
            <Label>{WINS.label}</Label>
            <Viewport>
              <Track>
                {loop.map((w, i) => (
                  <li key={i} aria-hidden={i >= WINS.items.length}>
                    {w}
                  </li>
                ))}
              </Track>
            </Viewport>
            <Toggle onClick={() => setOpen(true)} aria-expanded={false}>
              {WINS.allLabel}
            </Toggle>
          </Strip>
        </div>
      </Collapse>
      <Collapse $open={open} inert={!open}>
        <div>
          <Container>
            <Panel>
              <PanelHead>
                <Label>{WINS.openLabel}</Label>
                <Toggle onClick={() => setOpen(false)} aria-expanded>
                  {WINS.collapseLabel}
                </Toggle>
              </PanelHead>
              <Groups>
                {WINS.groups.map((g, i) => (
                  <Group key={g.text} $open={open} $delay={i * STAGGER_MS}>
                    <Meta $dated={g.year !== null}>
                      {[g.year, g.category].filter(Boolean).join(" · ")}
                    </Meta>
                    {g.text}
                  </Group>
                ))}
              </Groups>
            </Panel>
          </Container>
        </div>
      </Collapse>
      </Reveal>
    </Band>
  );
}
