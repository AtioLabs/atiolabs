import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

async function appendToGoogleSheet(email: string, timestamp: string) {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  if (!url) {
    console.warn("GOOGLE_SHEET_WEBAPP_URL not set — skipping Google Sheet write.");
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, timestamp }),
  });

  if (!res.ok) {
    throw new Error(`Google Sheet responded with ${res.status}`);
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "waitlist.json");
    let waitlist: { email: string; timestamp: string }[] = [];

    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        waitlist = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading waitlist.json:", err);
      }
    }

    // Check if email already exists
    if (waitlist.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ success: true, message: "Already on the list" });
    }

    const timestamp = new Date().toISOString();

    // Primary store: Google Sheet. Local file is kept as a backup below.
    try {
      await appendToGoogleSheet(email, timestamp);
    } catch (err) {
      console.error("Error writing to Google Sheet:", err);
    }

    // Backup store: local waitlist.json
    waitlist.push({ email, timestamp });
    fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Server error. Please try again later." }, { status: 500 });
  }
}
