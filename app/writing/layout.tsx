import "./writing.css";

export default function WritingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="wr">{children}</div>;
}
