const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  for (const width of [1280, 390, 1280]) {
    await p.setViewportSize({ width, height: 720 });
    await p.waitForTimeout(700);
    const y = await p
      .locator(".story-stage")
      .evaluate((x) => x.getBoundingClientRect().top + scrollY);
    await p.evaluate((y) => window.scrollTo(0, y + 1200), y);
    await p.waitForTimeout(1200);
    console.log(
      "RESIZE",
      await p.evaluate(() => ({
        width: innerWidth,
        docWidth: document.documentElement.scrollWidth,
        panels: [...document.querySelectorAll(".story-panel")].map((x) => ({
          visibility: getComputedStyle(x).visibility,
          opacity: getComputedStyle(x).opacity,
        })),
        shell: document
          .querySelector(".document-shell")
          .getBoundingClientRect()
          .toJSON(),
      })),
    );
    if (width === 1280)
      await p.screenshot({ path: "/downloads/15-1280-story.png" });
  }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(400);
  await p.getByRole("button", { name: "Benefits", exact: true }).click();
  await p.waitForTimeout(1600);
  console.log(
    "BENEFITS",
    await p.locator("#vision").evaluate((x) => x.getBoundingClientRect().top),
  );
  await p.locator("#faq").scrollIntoViewIfNeeded();
  await p.locator(".faq-row").nth(2).locator("button").click();
  console.log(
    "FAQ",
    await p
      .locator("#answer-2")
      .evaluate((x) => ({ height: x.offsetHeight, text: x.innerText })),
  );
  console.log("ERRORS", errors);
  await b.close();
})();
