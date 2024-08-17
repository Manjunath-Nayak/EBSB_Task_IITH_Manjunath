const express = require('express')
const cors = require('cors')
const {google} = require('googleapis')

const app = express()
app.use(cors())
app.use(express.json()) // Using built-in middleware

const PORT = process.env.PORT || 5000

// Google Sheets Integration Setup
const sheets = google.sheets({version: 'v4', auth: YOUR_AUTH_CLIENT}) // Replace YOUR_AUTH_CLIENT with your actual auth client

const SPREADSHEET_ID = 'your-spreadsheet-id' // Replace with your Spreadsheet ID
const SHEET_NAME = 'Sheet1' // Replace with your sheet name

app.post('/register', async (req, res) => {
  const {fullName, email, phoneNumber, eventName, comments} = req.body

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: 'RAW',
      resource: {
        values: [[fullName, email, phoneNumber, eventName, comments]],
      },
    })

    res.status(200).json({message: 'Data saved successfully!'})
  } catch (error) {
    console.error('Error saving data:', error)
    res.status(500).json({message: 'Error saving data'})
  }
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
)
