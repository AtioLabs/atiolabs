import Navbar from "@/components/Navbar";

// Uses the site's main Navbar; the spacer clears its fixed position.
// `active` is kept so existing callers don't change.
export function WritingHeader({}: { active: "writing" | "none" }) {
  return (
    <>
      <Navbar />
      <div className="wr-nav-spacer" aria-hidden="true" />
    </>
  );
}

export function WritingFooter() {
  return (
    <footer className="wr-footer">
      <span>Asynarch</span>
      <span>Writing by Asrul Ishath</span>
    </footer>
  );
}
