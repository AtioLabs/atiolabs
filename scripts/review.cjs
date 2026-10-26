// Local-only capture helper. Requires Playwright and Google Chrome.
const { chromium } = require("playwright");
const path = require("node:path");
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const out = process.env.CAPTURE_DIR || "/downloads";
  await page.screenshot({ path: path.join(out, "01-hero.png") });
  for (const [id, file] of [
    ["problem", "02-problem"],
    ["how-it-works", "03-story-intro"],
    ["vision", "06-vision"],
    ["faq", "07-faq"],
    ["demo", "08-demo"],
  ]) {
    const y = await page
      .locator("#" + id)
      .evaluate((x) => x.getBoundingClientRect().top + scrollY);
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(1300);
    await page.screenshot({ path: path.join(out, file + ".png") });
  }
  const storyY = await page
    .locator(".story-stage")
    .evaluate((x) => x.parentElement.getBoundingClientRect().top + scrollY);
  for (let i = 0; i < 6; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), storyY + i * 700 + 350);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(out, `04-story-${i + 1}.png`) });
  }
  const assuranceY = await page
    .locator("#assurance")
    .evaluate((x) => x.getBoundingClientRect().top + scrollY);
  for (let i = 0; i < 4; i++) {
    await page.evaluate(
      (y) => window.scrollTo(0, y),
      assuranceY + i * 525 + 200,
    );
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(out, `05-assurance-${i + 1}.png`),
    });
  }
  console.log(
    "DESKTOP",
    await page.evaluate(() => ({
      fontStatus: document.fonts.status,
      bodyFont: getComputedStyle(document.body).fontFamily,
      displayFont: getComputedStyle(document.querySelector("h1")).fontFamily,
      monoFont: getComputedStyle(document.querySelector(".font-mono"))
        .fontFamily,
      width: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
    })),
    errors,
  );
  for (const width of [320, 390, 768]) {
    const m = await browser.newPage({
      viewport: { width, height: 844 },
      deviceScaleFactor: 1,
    });
    await m.goto("http://localhost:3000", { waitUntil: "networkidle" });
    console.log(
      "RESPONSIVE",
      await m.evaluate(() => ({
        width: innerWidth,
        documentWidth: document.documentElement.scrollWidth,
      })),
    );
    if (width === 390) {
      for (const [sel, file] of [
        ["#problem", "09-mobile-problem"],
        [".story-panel:nth-child(3)", "10-mobile-journal"],
        ["#assurance", "11-mobile-assurance"],
        ["#vision", "12-mobile-vision"],
        ["#demo", "13-mobile-demo"],
      ]) {
        await m.locator(sel).scrollIntoViewIfNeeded();
        await m.waitForTimeout(1200);
        await m.screenshot({ path: path.join(out, file + ".png") });
      }
      await m.getByRole("button", { name: "Show GST + TDS treatment" }).click();
      console.log(
        "MOBILE_CHECK",
        await m.locator(".verify-status strong").innerText(),
      );
    }
    await m.close();
  }
  const reduced = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  await reduced.goto("http://localhost:3000", { waitUntil: "networkidle" });
  console.log("REDUCED", await reduced.locator(".story-panel").count());
  await reduced.close();
  await browser.close();
})();
