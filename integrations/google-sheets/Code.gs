/**
 * AlfaaStack website content API
 *
 * Google Sheet tabs required:
 *   Team
 *   Clients
 *   Services
 *   Portfolio
 *
 * The first row of every tab is the header row. The endpoint returns only rows
 * where Active is TRUE (or where Active is empty).
 */

function doGet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const payload = {
    team: readSheet_(spreadsheet, 'Team'),
    clients: readSheet_(spreadsheet, 'Clients'),
    services: readSheet_(spreadsheet, 'Services'),
    portfolio: readSheet_(spreadsheet, 'Portfolio'),
  };

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function readSheet_(spreadsheet, sheetName) {
  const sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) return [];

  const values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return [];

  const headers = values[0].map(normalizeHeader_);

  return values.slice(1)
    .filter(row => row.some(value => String(value).trim() !== ''))
    .map(row => {
      const item = {};
      headers.forEach((header, index) => {
        if (header) item[header] = String(row[index] ?? '').trim();
      });
      return item;
    })
    .map(item => normalizeRow_(item, sheetName))
    .filter(item => item.active !== false);
}

function normalizeHeader_(header) {
  return String(header)
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase())
    .replace(/^(.)/, match => match.toLowerCase());
}

function normalizeRow_(item, sheetName) {
  item.id = item.id || slugify_(item.name || item.title || Utilities.getUuid());
  item.order = Number(item.order || 999);
  item.active = item.active === '' ? true : String(item.active).trim().toLowerCase() !== 'false';

  if (sheetName === 'Clients') {
    item.rating = Number(item.rating || 5);
  }

  return item;
}

function slugify_(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
