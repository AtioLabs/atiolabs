// Essay content for /writing. Edit this file to change text, links, notes,
// hero artwork or the OG card.

export type Segment = {
  text: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  noteRef?: number;
};

export type Block = {
  kind: "p" | "h2";
  segments: Segment[];
};

export type Essay = {
  slug: string;
  title: string;
  meta: string;
  excerpt: string;
  byline: string;
  // Publish date, ISO (YYYY-MM-DD). Shown to agents in the copied text and .md version.
  published: string;
  hero: { src: string; alt: string };
  // Optional artwork after the final paragraph, shown wide like the hero.
  closingImage?: { src: string; alt: string };
  ogImage: string | null;
  notes: { id: number | null; segments: Segment[] }[];
  blocks: Block[];
};

export const BYLINE = "Asrul Ishath, founder & ceo";

export const essays: Essay[] = [
  {
    slug: "what-humans-can-do",
    title: "what humans can do",
    meta: "Essay / Agents & human capability",
    excerpt: "a useful agent should bring expertise beyond the brief. the agent may know more about the task than the person directing it; what matters is whether it applies that knowledge without waiting for the user to name every requirement.",
    byline: BYLINE,
    published: "2026-11-01",
    hero: {
      // Artwork selected by the author ("Monumental Blue Forms, Tiny Figures").
      // Display derivative (webp); master PNG kept alongside in public/writing/.
      src: "/writing/monumental-blue-hero.webp",
      alt: "Blue and cream print of monumental curved forms, with three small human figures.",
    },
    closingImage: {
      // Artwork selected by the author ("Reaching Shadow in Blue and Vermilion").
      src: "/writing/reaching-shadow-blue-vermilion.webp",
      alt: "Blue and vermilion print of a man looking up at his own shadow, which stretches far larger than him and reaches across a red panel.",
    },
    // Per-essay OG card (1200x630), built from the hero artwork + final title.
    ogImage: "/writing/og-what-humans-can-do-hero.jpg",
    // Endnotes. [1] and [2] are attached by numbered markers at the
    // support-study and security paragraphs; the unnumbered note is general.
    notes: [
      {
        id: 1,
        segments: [
          { text: "the support study", href: "https://academic.oup.com/qje/article/140/2/889/7990658" },
          {
            text: " measured issues resolved per hour at one company. it shows that an assistant can carry useful expertise into a specific job; it doesn't directly test whether an agent can recognise what a user doesn't know to ask.",
          },
        ],
      },
      {
        id: 2,
        segments: [
          { text: "semgrep's tasks", href: "https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark" },
          {
            text: " came from public vulnerabilities. its authors warn that some successful solutions may reflect recall of existing code rather than fresh reasoning. the results are evidence about that benchmark, not a general failure rate for agent-built software.",
          },
        ],
      },
      {
        id: null,
        segments: [
          {
            text: "these aren't the only companies i wanted to discuss. i've kept this essay to a few examples; it isn't a complete list.",
          },
        ],
      },
    ],
    blocks: [
    { kind: "p", segments: [{ text: "sam altman described something familiar in his " }, { text: "conversation with david senra", href: "https://www.davidsenra.com/episode/sam-altman" }, { text: ". he has codex, but still finds himself clicking around, scrolling through email and keeping a to-do list the way he always has." }] },
    { kind: "p", segments: [{ text: "having the tool hasn't automatically changed how he works." }] },
    { kind: "p", segments: [{ text: "habit explains part of that. but there's another problem, even when someone is ready to work differently." }] },
    { kind: "p", segments: [{ text: "you know what you want to achieve. that doesn't mean you know what to ask for. between a purpose and a finished result are questions you don't know to ask, decisions you don't know exist, and standards you haven't learned to judge. when you hire someone with expertise, part of what you're paying for is their ability to recognise those things. you bring the purpose; they contribute knowledge you don't have." }] },
    { kind: "p", segments: [{ text: "i want that from agents too." }] },
    { kind: "p", segments: [{ text: "a useful agent should bring expertise beyond the brief. the agent may know more about the task than the person directing it; what matters is whether it applies that knowledge without waiting for the user to name every requirement." }] },
    { kind: "h2", segments: [{ text: "three problems" }] },
    { kind: "p", segments: [{ text: "problems get blurred together here, and the difference matters." }] },
    { kind: "p", segments: [{ text: "the first is habit. the tool is ready; the routine isn't. that's sam's problem, and most of us share it." }] },
    { kind: "p", segments: [{ text: "the second is the friction of input. even when you know exactly what you want to say, getting it into the machine is work. " }, { text: "wispr flow", href: "https://wisprflow.ai/" }, { text: " solves this well: speak instead of type, anywhere you could type. it removes the effort of articulation at the keyboard; it doesn't promise to know what you should say, and it would be unfair to hold it to one." }] },
    { kind: "p", segments: [{ text: "that's the standard i use for every product in this essay: judge it against the outcome it promises, not an outcome i wish it promised." }] },
    { kind: "p", segments: [{ text: "the third problem is the one i keep coming back to. you can have the habit, and the fluent input, and still not know what to ask." }] },
    { kind: "h2", segments: [{ text: "the evidence, and its limits" }] },
    { kind: "p", segments: [{ text: "jakob nielsen has argued that prompting is a step backwards for usability, because it makes the user articulate needs that a good interface used to handle for them. he calls it the " }, { text: "articulation barrier", href: "https://jakobnielsenphd.substack.com/p/prompt-driven-ai-ux-hurts-usability" }, { text: "; his proposed direction out is products that " }, { text: "rewrite or augment your prompt", href: "https://jakobnielsenphd.substack.com/p/prompt-augmentation" }, { text: " rather than taking it literally. that's his expert view, not a measurement, but it names something i recognise." }] },
    { kind: "p", segments: [{ text: "the studies point in a useful direction. in a " }, { text: "large field study of over five thousand customer support agents", href: "https://academic.oup.com/qje/article/140/2/889/7990658" }, { text: ", access to an ai assistant raised productivity by about fifteen percent on average, and the biggest gains went to the least experienced workers. when the tool carries expertise, the novices gain the most." }, { text: "", noteRef: 1 }] },
    { kind: "p", segments: [{ text: "there is a boundary, though. in a " }, { text: "study of 758 consultants", href: "https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838" }, { text: ", people using ai worked faster on tasks inside the model's capability frontier, and were more likely wrong on a task deliberately placed outside it. knowing where the tool can be trusted is itself expertise, and that judgment is usually left to the user." }] },
    { kind: "p", segments: [{ text: "none of these studies measures the question i'm asking directly; they measure what happens around it: the expertise a tool can carry, the judgment it demands." }] },
    { kind: "h2", segments: [{ text: "sold to everyone" }] },
    { kind: "p", segments: [{ text: "this is no longer a developer argument." }] },
    { kind: "p", segments: [{ text: "muse promises", href: "https://muse.ai/" }, { text: ": give it a goal or task and it handles the rest, from email to reservations to shopping, with \"no learning curve\": you \"just tell muse what you want to get done.\" " }, { text: "grok bot", href: "https://x.ai/bot" }, { text: " asks you to give it tasks \"like you would a teammate\" and offers to learn your workflows by watching you do them once. " }, { text: "polsia", href: "https://polsia.com/" }, { text: " goes furthest: an ai that \"runs your company while you sleep.\"" }] },
    { kind: "p", segments: [{ text: "notice what each pitch still leaves with the person using it: you bring the goal, describe the task, demonstrate the workflow. that division of labor is honest, and often it works. my question is what the user doesn't know to supply: the context that would have changed the plan, the standard that separates done from good, the question they didn't know to ask." }] },
    { kind: "p", segments: [{ text: "an agent can be available to everyone and still be used well by a much smaller group: the people who know how to direct it and judge what comes back. access and effective use are different things." }] },
    { kind: "h2", segments: [{ text: "the false agreement" }] },
    { kind: "p", segments: [{ text: "there is a subtler version of this problem, and it's the one i've learned to trust least." }] },
    { kind: "p", segments: [{ text: "in my experience, an agent can tell you, confidently, that it understands. but assurance is not a way to check. the plan looks plausible; the summary sounds right. you find out whether you were on the same page when the finished work arrives, and by then you have spent the time, and the budget, on the agent's reading of your words." }] },
    { kind: "p", segments: [{ text: "plan modes are one attempt to address this. replit's agent " }, { text: "proposes an approach and waits for approval", href: "https://docs.replit.com/features/agent/plan-mode" }, { text: " before writing code; lovable's agent " }, { text: "asks clarifying questions", href: "https://lovable.dev/blog/agent" }, { text: " before it builds; " }, { text: "claude code", href: "https://code.claude.com/docs/en/overview/" }, { text: " plans in a similar spirit for developers. they help. but a plan doesn't close the gap if you can't judge the plan." }] },
    { kind: "p", segments: [{ text: "the prose isn't helping either. y combinator's " }, { text: "winter 2027 requests for startups", href: "https://www.ycombinator.com/rfs/" }, { text: " asks for llms that write well: today's models sound more robotic than the models from 2024 and 2025, because the same reward signals that made them good at code flattened their voice. a longer plan in flatter language is just more text you may lack the expertise to evaluate." }] },
    { kind: "p", segments: [{ text: "security shows the stakes. " }, { text: "one builder", href: "https://www.reddit.com/r/vibecoding/comments/1tvlr1t/my_aibuilt_app_was_leaking_every_users_data_and/" }, { text: " found, only because he went looking, that his agent-built app had row-level security switched off: anyone who opened the browser's network tab could read every user's data. 'the app looked fine. worked fine,' he wrote. 'the agent never warned me about any of it.' nothing about a working app says a question is missing. if an agent can explain row-level security, it should also recognise when the feature it is building needs it. and it isn't one person's bad luck, or a weak model: when " }, { text: "semgrep asked claude opus 5.5", href: "https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark" }, { text: " for 186 features, 72 of the 174 working solutions still carried the vulnerability - deliberately hard cases, not an everyday rate." }, { text: "", noteRef: 2 }, { text: " nor is it only a beginner's gap: expertise in one field doesn't supply the questions of another." }] },
    { kind: "p", segments: [{ text: "when someone asks an agent to fix something, they won't list every detail. the agent has to work out what else needs doing. " }, { text: "cognition's frontiercode 2.0", href: "https://cognition.com/blog/frontier-code-2.0" }, { text: " tests coding agents on that kind of work. if a bug appears in two places but the request mentions only one, will the agent notice the other? cognition reports that agents struggle with requirements nobody spells out. even the highest-scoring model passes less than half the tasks. in some cases, more time to reason makes things worse: the agent makes wider changes that break things it needed to preserve." }] },
    { kind: "p", segments: [{ text: "the cost of a missing question doesn't stay with the person who didn't ask. it can land on the people whose data was exposed, and it can mean repairing work that looked finished." }] },
    { kind: "h2", segments: [{ text: "let the product carry it" }] },
    { kind: "p", segments: [{ text: "the more promising direction is to stop asking the user to supply the expertise at all." }] },
    { kind: "p", segments: [{ text: "agent skills", href: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation" }, { text: " are one way to bring that expertise into the work. people package instructions, scripts and reference material that an agent can use when a task calls for them. but finding the right skill and judging its quality can fall back on the user." }] },
    { kind: "p", segments: [{ text: "rea is a good example", href: "https://github.com/morluto/rea" }, { text: ": a reverse-engineering skill. see a feature in an app you like, and the agent can inspect the app without its source code, explain how the feature works with the evidence, and build a version for your project. the skill packages a specialist workflow rather than asking the user to invent one." }] },
    { kind: "p", segments: [{ text: "a smaller example i like is " }, { text: "elevenlabs' enhance", href: "https://elevenlabs.io/blog/how-to-add-pauses-in-ai-voiceover" }, { text: ". you write the words you want spoken, and enhance adds the stage directions as audio tags, while your words stay untouched. you never had to learn their markup; the product contributed the craft." }] },
    { kind: "p", segments: [{ text: "this is different from plumbing. connecting an agent to your apps, through things like mcp, gives it access, not knowledge. the early setup asked people to " }, { text: "hand-edit a json config file", href: "https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop" }, { text: "; one-click installs have since made that easier in some apps. but a perfectly connected agent still has to know what to do with the connection." }] },
    { kind: "p", segments: [{ text: "one label to be careful with: ai-native. adding a chat box to existing software does not by itself change the division of labor. if you still translate your purpose into the software's existing workflow and supply the expertise to finish the job, the chat box is a new interface to the same demand. the test is whether the software takes on the part of the work the user doesn't know how to do." }] },
    { kind: "p", segments: [{ text: "marc andreessen made a related argument while " }, { text: "writing about web 2.0 in 2007", href: "https://web.archive.org/web/20111021084149/http://pmarca-archive.posterous.com/why-theres-no-such-thing-as-web-20" }, { text: ". \"You can't build a company based on a trend.\" trends are obvious, he argued; the opportunity is in a new product or service that you bring to a market. which trends or design patterns it uses matters less than whether people find the product compelling." }] },
    { kind: "p", segments: [{ text: "i think that distinction matters for agents too. calling software agentic or ai-native doesn't tell us what people can now do with it. the question is whether the product takes on work they previously needed expertise to do themselves." }] },
    { kind: "h2", segments: [{ text: "video makes the gap visible" }] },
    { kind: "p", segments: [{ text: "video is where i feel this most. a product video needs a hundred decisions - story, pacing, shots, type, music - and you can know the outcome you want and still not know which matter." }] },
    { kind: "p", segments: [{ text: "higgsfield encodes cinematography", href: "https://higgsfield.ai/blog/ai-video-camera-control" }, { text: " as explicit choices: genre, lighting, camera movement, lens and aperture are presets you set before generating. that is real craft made available, but still a menu of decisions someone else knew to encode. " }, { text: "motion, a newer video agent", href: "https://motion.so/gva" }, { text: ", promises more of the process: give it footage, a reference or an idea, and it plans the video, builds the shots and checks the cut before you see it. its makers say they want to " }, { text: "codify the language of video", href: "https://www.ycombinator.com/companies/mosaic-2" }, { text: " itself." }] },
    { kind: "p", segments: [{ text: "the economics sharpen it: higgsfield " }, { text: "documents a credit cost per generation", href: "https://higgsfield.ai/blog/higgsfield-pricing-explained" }, { text: " on its credit-based plans, and motion says " }, { text: "follow-up edits consume credits", href: "https://docs.motion.so/guides/credits" }, { text: " too. in credit-based workflows, learning what to ask can consume the budget too." }] },
    { kind: "h2", segments: [{ text: "the standard" }] },
    { kind: "p", segments: [{ text: "the standard i'd hold every product to, including my own: does it ask the questions an expert colleague would ask? does it surface the decisions the user doesn't know exist? does it show what good looks like before the user has to judge?" }] },
    { kind: "p", segments: [{ text: "when the answer is no, the product hasn't failed at something it never attempted. but the work that missing expertise would have done falls on the user, and for the person who doesn't have it, that part is the bottleneck." }] },
    { kind: "p", segments: [{ text: "that includes what i'm building. the bar i want for river is an agent that helps you do things you don't even know how to ask about yet. i'm not there yet. i'd rather be measured against that standard than against the quality of the questions my users happen to know how to ask." }] },
    { kind: "h2", segments: [{ text: "how this essay was made" }] },
    { kind: "p", segments: [{ text: "i wrote this with an ai agent, and worked with it on the site design and artwork too. the agent did the research and helped turn an idea into something i could publish, but much of the process went into bringing the work back to what i meant. i relied on it for expertise about the work, yet still had to recognise when its approach was taking us in the wrong direction." }] },
    { kind: "p", segments: [{ text: "i was so happy when agents came. i thought we were moving beyond software that gives you the capability but leaves you to learn how to use it." }] },
    { kind: "p", segments: [{ text: "that's what i don't want us to lose. making intelligence available is a real achievement. but if getting useful work from it still requires knowing the right questions, supplying the missing expertise and catching the mistakes, we have left a large part of the job with the user." }] },
    { kind: "p", segments: [{ text: "the examples in this essay show that products can take on more of that work. they can bring knowledge into the process, help people make unfamiliar decisions, and check their understanding before committing to an outcome. that should become part of what we expect from an agent, rather than something the user has to learn to arrange." }] },
        { kind: "p", segments: [{ text: "elon musk has spoken about a future where \"" }, { text: "no job is needed", href: "https://www.bbc.co.uk/news/uk-67302048" }, { text: ".\" when i think about that future, i keep coming back to what agents will need to carry for us." }] },
    { kind: "p", segments: [{ text: "some of the frustration with ai agents is earned. when work looks finished but leaves someone else to find and repair what was missed, \"ai slop\" names a real disappointment. i understand that response. but i don't think these failures settle what agents could become. i want to see open-source builders and private ai companies work on the problems behind that distrust." }] },
    { kind: "p", segments: [{ text: "i still believe in agents. access to intelligence should expand what humans can do, not just reward those who already know how to use it. if people still have to supply the expertise, the questions and the judgment, we haven't crossed that gap. closing it would let far more people act on ideas they understand the purpose of, even when the work lies outside their expertise. that is the next step worth building toward." }] },
    ],
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
