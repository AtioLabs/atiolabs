import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WORKING_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwxxnPUiwiVjlhnNcgvebAa3JBs8ZJS-vms2YLTCX4_tnDx5CnWIC_lar2jPz3RXeoPcg/exec";

async function appendToGoogleSheet(email: string, timestamp: string) {
  const url =
    process.env.GOOGLE_SHEET_WEBAPP_URL ||
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.WAITLIST_SHEET_URL ||
    WORKING_SHEET_URL;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        email,
        timestamp,
        source: "River Landing Page Waitlist",
      }),
      redirect: "follow",
    });

    return res.ok;
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
    await appendToGoogleSheet(email, timestamp);

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
      // Expected on read-only serverless hosts like Vercel or GitHub Pages
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json({ error: "Unable to join waitlist. Please try again." }, { status: 500 });
  }
}
