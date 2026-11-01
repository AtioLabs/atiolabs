import type { Segment } from "../_data/essays";

export function renderSegments(segments: Segment[], keyPrefix: string) {
  return segments.map((s, i) => {
    if (s.noteRef) {
      return (
        <sup key={`${keyPrefix}-${i}`} className="note-ref">
          <a href={`#note-${s.noteRef}`}>{s.noteRef}</a>
        </sup>
      );
    }
    let node: React.ReactNode = s.text;
    if (s.bold) node = <strong>{node}</strong>;
    if (s.italic) node = <em>{node}</em>;
    if (s.href) {
      node = (
        <a href={s.href} target="_blank" rel="noopener noreferrer">
          {node}
        </a>
      );
    }
    return <span key={`${keyPrefix}-${i}`}>{node}</span>;
  });
}
