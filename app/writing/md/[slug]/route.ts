import { essays, getEssay } from "../../_data/essays";
import { essayMarkdown, essayUrl } from "../../_lib/agent";

// Plain Markdown version of each essay, for agents. Reached through rewrites
// in next.config.ts: /writing/<slug>.md, or /writing/<slug> requested with
// `Accept: text/markdown`. Prerendered at build time.
export const dynamic = "force-static";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function GET(_: Request, ctx: RouteContext<"/writing/md/[slug]">) {
  const { slug } = await ctx.params;
  const essay = getEssay(slug);

  if (!essay) {
    return new Response("Not found\n", { status: 404 });
  }

  return new Response(essayMarkdown(essay), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      // Search engines credit the HTML essay; agents can still read this.
      Link: `<${essayUrl(essay)}>; rel="canonical"`,
    },
  });
}
