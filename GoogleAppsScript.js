/**
 * Google Apps Script untuk RSVP dan Ucapan Undangan Digital
 * 
 * SPREADSHEET DETAIL:
 * - ID Spreadsheet: 1jqx8h0zj0by833KcM-Ii-e6EfeEdos-vnvgVFWiVnfY
 * - Nama Sheet: Sheet1
 * 
 * Kolom yang digunakan:
 * 1. Timestamp (Waktu Kirim)
 * 2. Nama Tamu
 * 3. Ucapan
 * 4. Konfirmasi Kehadiran
 * 5. Jumlah Tamu
 */

const SPREADSHEET_ID = '1jqx8h0zj0by833KcM-Ii-e6EfeEdos-vnvgVFWiVnfY';
const SHEET_NAME = 'Sheet1';

// Menerima input data POST dari website dan memasukkannya ke spreadsheet
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    const timestamp = new Date();
    const namaTamu = data.nama || '';
    const ucapan = data.ucapan || '';
    const konfirmasi = data.konfirmasi || '';
    const jumlahTamu = data.jumlahTamu || 0;
    
    // Memasukkan baris baru ke Sheet
    // Kolom: [timestamp, nama tamu, ucapan, konfirmasi kehadiran, jumlah tamu]
    sheet.appendRow([timestamp, namaTamu, ucapan, konfirmasi, jumlahTamu]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Ucapan berhasil dikirim ke Google Sheets!'
    })).setMimeType(ContentService.MimeType.JSON);
       
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Mengambil data ucapan dari spreadsheet dan mengembalikannya dalam format JSON
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    const rows = sheet.getDataRange().getValues();
    const data = [];
    
    // Baris pertama (index 0) adalah header kolom, jadi mulai dari index 1
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[0] && !row[1]) continue; // Lewati baris kosong
      
      data.push({
        timestamp: row[0],
        nama: row[1],
        ucapan: row[2],
        konfirmasi: row[3],
        jumlahTamu: row[4]
      });
    }
    
    // Urutkan ucapan terbaru agar tampil paling atas
    data.reverse();
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      data: data
    })).setMimeType(ContentService.MimeType.JSON);
       
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
