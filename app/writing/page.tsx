import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "./_data/essays";
import { WritingHeader, WritingFooter } from "./_components/Chrome";

export const metadata: Metadata = {
  title: "Writing - Asynarch",
  description: "Essays on agents, software and what humans can do with them.",
  alternates: { canonical: "https://www.asynarch.com/writing" },
};

export default function WritingIndex() {
  return (
    <>
      <WritingHeader active="writing" />
      <main>
        <div className="index-head">
          <div className="meta">Asynarch / Writing</div>
          <h1>Thinking out loud</h1>
          <p>Essays on agents, software and what humans can do with them.</p>
        </div>

        {essays.map((essay) => (
          <section className="feature" key={essay.slug}>
            <Link href={`/writing/${essay.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={essay.hero.src} alt={essay.hero.alt} />
            </Link>
            <div>
              <div className="meta">{essay.meta}</div>
              <Link href={`/writing/${essay.slug}`}>
                <h2>{essay.title}</h2>
              </Link>
              <div className="byline">{essay.byline}</div>
              <Link className="read" href={`/writing/${essay.slug}`}>
                Read the essay ↗
              </Link>
            </div>
          </section>
        ))}
      </main>
      <WritingFooter />
    </>
  );
}
