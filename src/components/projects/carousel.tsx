import { useRef, useState } from "react";
import { PROJECTS } from "@/data/siteContent";
import { TagList } from "../shared/sharedElements";
import { Links } from "./projectsElements";
import { Track, Slide, SlideCard, SlideBody, Dots } from "./carouselElements";

const { items, cardLinks, dotLabel } = PROJECTS;

export function ProjectCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    setActive(Math.min(items.length - 1, Math.round(track.scrollLeft / step)));
  }

  function goTo(i: number) {
    const slide = trackRef.current?.children[i] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }

  return (
    <>
      <Track ref={trackRef} onScroll={onScroll}>
        {items.map((p, i) => {
          const dark = i === 1;
          const links = [
            { label: cardLinks.live, href: p.live },
            { label: cardLinks.code, href: p.code },
          ].filter((l) => l.href);
          return (
            <Slide key={p.name}>
              <SlideCard $dark={dark}>
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
                <SlideBody $dark={dark}>
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <TagList items={p.stack} />
                  <Links>
                    {links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href!} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </Links>
                </SlideBody>
              </SlideCard>
            </Slide>
          );
        })}
      </Track>
      <Dots>
        {items.map((p, i) => (
          <button
            key={p.name}
            aria-label={`${dotLabel} ${i + 1}: ${p.name}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </Dots>
    </>
  );
}
