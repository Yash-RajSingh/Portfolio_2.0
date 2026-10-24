import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import styled from "styled-components";
import { STATS } from "@/data/siteContent";

const Grid = styled.ul`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 45rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Stat = styled.li`
  padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(5)};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 45rem) {
    &:nth-child(2n) {
      border-right: 0;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.colors.border};
    }
  }

  strong {
    display: block;
    font-family: ${({ theme }) => theme.font.display};
    font-size: 1.4rem;
    font-weight: 800;
  }
  > span {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const COUNT_MS = 1100;

function CountUp({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(-?)(\d+)(.*)$/);
  const [sign, digits, suffix] = match ? match.slice(1) : ["", "", ""];
  const target = Number(digits);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start || !digits) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / COUNT_MS);
      setN(Math.round(target * (1 - (1 - p) ** 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, digits]);

  if (!match) return <>{value}</>;
  return (
    <span aria-label={value}>
      <span aria-hidden>
        {sign}
        {n}
        {suffix}
      </span>
    </span>
  );
}

export function Stats() {
  const [ref, inView] = useInView<HTMLUListElement>(0.4);
  return (
    <Grid ref={ref}>
      {STATS.map((s) => (
        <Stat key={s.label}>
          <strong>
            <CountUp value={s.value} start={inView} />
          </strong>
          <span>{s.label}</span>
        </Stat>
      ))}
    </Grid>
  );
}
