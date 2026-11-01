"use client";

import { useState } from "react";

type CopyState = "idle" | "copied" | "failed";

function useCopier(payload: string): [CopyState, () => Promise<void>] {
  const [state, setState] = useState<CopyState>("idle");

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(payload);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = payload;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 2500);
  };

  return [state, copy];
}

/**
 * Quiet text action under the byline. One click copies the question plus
 * the full essay text, then the label briefly says "copied".
 */
export function CopyForAgentLink({ payload }: { payload: string }) {
  const [state, copy] = useCopier(payload);

  return (
    <button
      className="agent-link"
      onClick={copy}
      aria-label="Copy a short prompt that links your agent to this essay"
    >
      {state === "copied"
        ? "copied"
        : state === "failed"
          ? "copy failed - see the note at the end"
          : "read with your agent"}
    </button>
  );
}

/**
 * Full "try this with your agent" block after the essay, before the notes.
 * Two ways in, for coding agents like Claude Code, Codex or Cursor:
 * - a short prompt that points the agent at the essay's .md version
 *   (for agents that can read the web), and
 * - the question plus the full essay text, links and notes included
 *   (for agents without web access).
 * Everything copied is visible under "what gets copied" - no hidden
 * instructions.
 */
export default function CopyForAgent({
  question,
  prompt,
  payload,
}: {
  question: string;
  prompt: string;
  payload: string;
}) {
  const [promptState, copyPrompt] = useCopier(prompt);
  const [payloadState, copyPayload] = useCopier(payload);
  const failed = promptState === "failed" || payloadState === "failed";

  return (
    <div className="agent-box">
      <div className="meta">Try this with your agent</div>
      <p className="agent-q">{question}</p>
      <button
        className="agent-copy"
        onClick={copyPrompt}
        aria-label="Copy a short prompt that links your agent to this essay"
      >
        {promptState === "copied"
          ? "copied"
          : promptState === "failed"
            ? "copy failed"
            : "copy prompt"}
      </button>
      <button
        className="agent-copy agent-copy-alt"
        onClick={copyPayload}
        aria-label="Copy the question and the full essay text to the clipboard"
      >
        {payloadState === "copied"
          ? "copied"
          : payloadState === "failed"
            ? "copy failed"
            : "copy question + full essay"}
      </button>
      <p className="agent-hint">
        paste into claude code, codex, cursor or any agent. the prompt has your
        agent read the essay from a link; use the full essay if it can&apos;t
        browse the web.
      </p>
      {failed && (
        <p className="agent-fail">
          copying didn&apos;t work in this browser - open &quot;what gets
          copied&quot; below and select the text manually.
        </p>
      )}
      <details className="agent-payload">
        <summary>what gets copied</summary>
        <div className="meta agent-payload-label">prompt</div>
        <pre>{prompt}</pre>
        <div className="meta agent-payload-label">question + full essay</div>
        <pre>{payload}</pre>
      </details>
    </div>
  );
}
