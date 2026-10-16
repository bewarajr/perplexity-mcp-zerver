import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.goto("https://example.com", { waitUntil: "domcontentloaded", timeout: 30000 });
console.log("LAUNCH OK:", await page.title(), "| chrome:", await browser.version());
await browser.close();
