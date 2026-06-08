/**
 * Google Apps Script for the River waitlist.
 *
 * Receives { email, timestamp } POSTs from the Next.js /api/waitlist route
 * and appends a row to the bound Google Sheet.
 *
 * SETUP (one time):
 *  1. Create a Google Sheet. In row 1 add headers: Email | Timestamp
 *  2. Extensions > Apps Script. Delete any starter code and paste this file.
 *  3. Click Deploy > New deployment > type "Web app".
 *       - Description: River waitlist
 *       - Execute as: Me
 *       - Who has access: Anyone
 *     Click Deploy and authorize when prompted.
 *  4. Copy the "Web app" URL (ends in /exec).
 *  5. Put that URL in next-app/.env.local as:
 *       GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 *  6. Restart `npm run dev` so the new env var is loaded.
 *
 * To update the script later: Deploy > Manage deployments > edit > new version.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var email = data.email;
    var timestamp = data.timestamp || new Date().toISOString();

    if (!email) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: "Missing email" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([email, timestamp]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
