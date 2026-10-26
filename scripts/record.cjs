// Review video only. No video assets are added to the website.
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROME_PATH || "/usr/bin/google-chrome",
    headless: true,
    args: ["--no-sandbox"],
  });
  const context = await b.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: "/downloads/asynarch-video",
      size: { width: 1440, height: 900 },
    },
  });
  const p = await context.newPage();
  await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(2000);
  await p.evaluate(async () => {
    const pauses = [
      document.getElementById("problem"),
      document.querySelector(".story-intro"),
      document.getElementById("vision"),
      document.getElementById("demo"),
    ].map((x) => x.getBoundingClientRect().top + scrollY);
    let last = performance.now(),
      y = 0,
      pausedUntil = 0,
      next = 0;
    await new Promise((resolve) => {
      function frame(now) {
        const delta = Math.min(now - last, 50);
        last = now;
        if (now > pausedUntil) {
          y += delta * 0.185;
          if (next < pauses.length && y >= pauses[next]) {
            pausedUntil = now + 1800;
            next++;
          }
        }
        window.scrollTo(0, y);
        if (y >= document.documentElement.scrollHeight - innerHeight) {
          resolve();
          return;
        }
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  });
  await p.waitForTimeout(2000);
  await p.screenshot({ path: "/downloads/14-footer.png" });
  const video = p.video();
  await context.close();
  console.log("VIDEO", await video.path());
  await b.close();
})();
