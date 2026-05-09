/**
 * Bernardo & Laura — RSVP receiver
 *
 * 1. Open https://sheets.google.com → Blank → name it "Wedding RSVPs"
 * 2. In row 1, paste these column headers (one per cell):
 *    Timestamp | Name | Email | Attending | Party Size | Dietary | Message | Language
 * 3. In the sheet, click Extensions → Apps Script
 * 4. Delete the placeholder code, paste this whole file
 * 5. Click 💾 Save
 * 6. Click Deploy → New deployment → ⚙ → Web app
 *      - Description: "RSVP receiver"
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy → Authorize access (use your Google account, accept the warnings)
 * 7. Copy the "Web app URL" — send it to Claude (or paste into content/settings.ts)
 *
 * Each new RSVP appears as a new row in the sheet.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.attending || "",
      data.partySize || "",
      data.dietary || "",
      data.message || "",
      data.lang || "",
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "Bernardo & Laura — RSVP endpoint OK"
  );
}
