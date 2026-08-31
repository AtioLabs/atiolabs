import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

async function appendToGoogleSheet(email: string, timestamp: string) {
  const url =
    process.env.GOOGLE_SHEET_WEBAPP_URL ||
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.WAITLIST_SHEET_URL;

  if (!url) {
    console.warn(
      "GOOGLE_SHEET_WEBAPP_URL not configured. Please add it to your environment variables."
    );
    return false;
  }

  try {
    // Google Apps Script Web App endpoints respond with a 302 redirect on POST,
    // so redirect: "follow" is essential.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        timestamp,
        source: "Landing Page Waitlist",
      }),
      redirect: "follow",
    });

    if (!res.ok) {
      console.error(`Google Sheet endpoint responded with status: ${res.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error communicating with Google Sheet Webhook:", err);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // 1. Primary Store: Google Sheets Webhook
    const sheetSaved = await appendToGoogleSheet(email, timestamp);

    // 2. Local Backup: waitlist.json (for local development)
    const filePath = path.join(process.cwd(), "waitlist.json");
    try {
      let waitlist: { email: string; timestamp: string }[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        waitlist = JSON.parse(fileContent);
      }
      if (!waitlist.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
        waitlist.push({ email, timestamp });
        fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2), "utf-8");
      }
    } catch (localErr) {
      // Expected on read-only serverless hosts like Vercel
      console.log("Local waitlist write skipped (serverless environment).");
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist.",
      sheetSaved,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Unable to join waitlist. Please try again." }, { status: 500 });
  }
}
