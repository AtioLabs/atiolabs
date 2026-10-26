const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const c = await b.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: "/downloads/eyes-video",
      size: { width: 1440, height: 900 },
    },
  });
  const p = await c.newPage();
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await p
    .locator("#vision")
    .evaluate((x) => scrollTo(0, x.getBoundingClientRect().top + scrollY));
  await p.waitForTimeout(1800);
  const r = await p.locator(".freedom-scene").boundingBox();
  for (let i = 0; i < 4; i++) {
    await p.mouse.move(r.x + 10, r.y + 30, { steps: 20 });
    await p.waitForTimeout(350);
    await p.mouse.move(r.x + r.width - 10, r.y + r.height - 30, { steps: 30 });
    await p.waitForTimeout(400);
    await p.screenshot({ path: "/downloads/v5-tea-frame-" + i + ".png" });
  }
  console.log("EYES", await p.locator(".tea-eye-layer").getAttribute("style"));
  await p.mouse.move(0, 0);
  await p.screenshot({ path: "/downloads/v5-benefits-desktop.png" });
  await p.setViewportSize({ width: 390, height: 844 });
  await p
    .locator("#vision")
    .evaluate((x) => scrollTo(0, x.getBoundingClientRect().top + scrollY));
  await p.waitForTimeout(500);
  await p
    .locator("#vision")
    .screenshot({ path: "/downloads/v5-benefits-mobile.png" });
  console.log("ERRORS", errors);
  await c.close();
  console.log("VIDEO", await p.video().path());
  await b.close();
})();
