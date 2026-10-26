const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await b.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: "/downloads/sprite-video",
      size: { width: 1440, height: 900 },
    },
  });
  const p = await context.newPage();
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  for (const id of ["problem", "vision"]) {
    await p
      .locator("#" + id)
      .evaluate((x) =>
        window.scrollTo(0, x.getBoundingClientRect().top + scrollY),
      );
    await p.waitForTimeout(2500);
    await p.screenshot({ path: "/downloads/v2-" + id + "-desktop.png" });
    await p.waitForTimeout(7000);
  }
  for (const w of [320, 390, 768, 1280, 1440]) {
    await p.setViewportSize({ width: w, height: 900 });
    await p.waitForTimeout(350);
    console.log(
      w,
      await p.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
      })),
    );
  }
  await p.setViewportSize({ width: 390, height: 844 });
  for (const id of ["problem", "vision"]) {
    await p
      .locator("#" + id)
      .evaluate((x) =>
        window.scrollTo(0, x.getBoundingClientRect().top + scrollY),
      );
    await p.waitForTimeout(1500);
    await p
      .locator("#" + id)
      .screenshot({ path: "/downloads/v2-" + id + "-mobile.png" });
  }
  console.log("ERRORS", errors);
  const v = p.video();
  await context.close();
  console.log("VIDEO", await v.path());
  await b.close();
})();
