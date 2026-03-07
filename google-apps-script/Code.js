/**
 * Paste this into: Google Sheet → Extensions → Apps Script
 * Then: Deploy → New Deployment → Web App
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the Web App URL → paste into .env as REACT_APP_GOOGLE_SCRIPT_URL
 */

const SHEET_NAME = "Submissions";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    // Auto-create header row on first submission
    if (sheet.getLastRow() === 0) {
      const headers = ["Timestamp", "Full Name", "Email", "Phone", "Category", "Subject", "Message", "Submitted At"];
      sheet.appendRow(headers);

      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#6c63ff");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString(),
      data.fullName    || "",
      data.email       || "",
      data.phone       || "",
      data.category    || "",
      data.subject     || "",
      data.message     || "",
      data.submittedAt || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check — visit the Web App URL in browser to confirm it's live
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Web App is running ✓" }))
    .setMimeType(ContentService.MimeType.JSON);
}