import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays, getEssay } from "../_data/essays";
import { WritingHeader, WritingFooter } from "../_components/Chrome";
import { renderSegments } from "../_components/Segments";
import CopyForAgent, { CopyForAgentLink } from "../_components/CopyForAgent";
import {
  AGENT_QUESTION,
  agentPayload,
  agentPrompt,
  essayMdUrl,
} from "../_lib/agent";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return {};
  const url = `https://www.asynarch.com/writing/${essay.slug}`;
  return {
    title: essay.title,
    description: essay.excerpt,
    // Plain Markdown version for agents (served by app/writing/md/[slug]).
    alternates: { canonical: url, types: { "text/markdown": essayMdUrl(essay) } },
    openGraph: {
      title: essay.title,
      description: essay.excerpt,
      url,
      siteName: "Asynarch",
      type: "article",
      authors: ["Asrul Ishath"],
      // Per-essay OG card pending final title + artwork; until then the
      // site-wide card from app/layout.tsx applies.
      ...(essay.ogImage
        ? { images: [{ url: essay.ogImage, width: 1200, height: 630, alt: essay.title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.excerpt,
      ...(essay.ogImage ? { images: [essay.ogImage] } : {}),
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  const prompt = agentPrompt(essay);
  const payload = agentPayload(essay);

  return (
    <>
      <WritingHeader active="writing" />
      <main>
        <div className="mast">
          <div className="meta">{essay.meta}</div>
          <h1>{essay.title}</h1>
          <div className="byline">{essay.byline}</div>
          <CopyForAgentLink payload={prompt} />
        </div>

        <figure className="hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={essay.hero.src} alt={essay.hero.alt} />
        </figure>

        <article>
          <div className="essay essay-body">
            {essay.blocks.map((b, i) =>
              b.kind === "h2" ? (
                <h2 key={i}>{renderSegments(b.segments, `b${i}`)}</h2>
              ) : (
                <p key={i}>{renderSegments(b.segments, `b${i}`)}</p>
              )
            )}
          </div>

          {/* Closing artwork: same wide treatment as the hero; the essay ends here. */}
          {essay.closingImage && (
            <figure className="hero hero-closing">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={essay.closingImage.src}
                alt={essay.closingImage.alt}
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
              />
            </figure>
          )}

          <div className="essay essay-after">
            <CopyForAgent question={AGENT_QUESTION} prompt={prompt} payload={payload} />

            {essay.notes.length > 0 && (
              <section className="notes" aria-label="Notes">
                <div className="meta">Notes</div>
                <ol>
                  {essay.notes
                    .filter((n) => n.id !== null)
                    .map((note) => (
                      <li key={note.id} id={`note-${note.id}`}>
                        {renderSegments(note.segments, `n${note.id}`)}
                      </li>
                    ))}
                </ol>
                {essay.notes
                  .filter((n) => n.id === null)
                  .map((note, i) => (
                    <p key={i} className="note-general">
                      {renderSegments(note.segments, `g${i}`)}
                    </p>
                  ))}
              </section>
            )}

            <span className="endmark" aria-hidden="true" />
          </div>
        </article>

        <section className="closing">
          <div>
            <div className="meta">Writing by</div>
            <h3>Asrul Ishath</h3>
          </div>
          <Link className="back" href="/writing">
            All writing ↗
          </Link>
        </section>
      </main>
      <WritingFooter />
    </>
  );
}
