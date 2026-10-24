import { useEffect, useState, type DragEvent, type ReactNode } from "react";
import { PIVOT_PANEL } from "@/data/siteContent";
import { NoTouch, OnlyTouch } from "../shared/sharedElements";
import {
  Panel,
  Caption,
  Chips,
  Chip,
  Zones,
  Zone,
  Table,
  AnimatedRow,
  Mark,
  Value,
  Empty,
  Footer,
} from "./pivotPanelElements";

const DRAG_TYPE = "text/plain";

function Row({ index, children }: { index: number; children: ReactNode }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <AnimatedRow $shown={shown} $index={index}>
      {children}
    </AnimatedRow>
  );
}

function Cell({ value }: { value: boolean | string | null }) {
  if (value === null) return <Empty>—</Empty>;
  if (typeof value === "string") return <Value>{value}</Value>;
  return <Mark $on={value} />;
}

export function PivotPanel() {
  const [activeId, setActiveId] = useState(PIVOT_PANEL.defaultView);
  const [over, setOver] = useState(false);
  const view =
    PIVOT_PANEL.views.find((v) => v.id === activeId) ?? PIVOT_PANEL.views[0];

  function onDrop(e: DragEvent) {
    e.preventDefault();
    setOver(false);
    const id = e.dataTransfer.getData(DRAG_TYPE);
    if (PIVOT_PANEL.views.some((v) => v.id === id)) setActiveId(id);
  }

  return (
    <Panel>
      <Caption>
        <NoTouch>{PIVOT_PANEL.caption}</NoTouch>
        <OnlyTouch>{PIVOT_PANEL.captionTouch}</OnlyTouch>
      </Caption>
      <Chips>
        {PIVOT_PANEL.views.map((v) => (
          <Chip
            key={v.id}
            $active={v.id === view.id}
            aria-pressed={v.id === view.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData(DRAG_TYPE, v.id)}
            onClick={() => setActiveId(v.id)}
          >
            {v.id}
          </Chip>
        ))}
      </Chips>
      <Zones>
        <Zone
          $primary
          $over={over}
          onDragOver={(e) => {
            e.preventDefault();
            setOver(true);
          }}
          onDragLeave={() => setOver(false)}
          onDrop={onDrop}
        >
          {over
            ? PIVOT_PANEL.dropHint
            : `${PIVOT_PANEL.rowsLabel}: ${view.id}`}
        </Zone>
        <Zone>
          {PIVOT_PANEL.colsLabel}: {view.cols}
        </Zone>
      </Zones>
      <Table>
        <thead>
          <tr>
            {view.columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody key={view.id}>
          {view.rows.map((r, i) => (
            <Row key={r.name} index={i}>
              <td>{r.name}</td>
              {r.cells.map((c, j) => (
                <td key={j}>
                  <Cell value={c} />
                </td>
              ))}
            </Row>
          ))}
        </tbody>
      </Table>
      <Footer>{PIVOT_PANEL.footer}</Footer>
    </Panel>
  );
}
