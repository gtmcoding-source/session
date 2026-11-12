function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const sessionID = e.postData.contents.sessionID;
  sheet.appendRow([sessionID]);
  return ContentService.createTextOutput('Session ID captured and saved to Google Sheet.');
}