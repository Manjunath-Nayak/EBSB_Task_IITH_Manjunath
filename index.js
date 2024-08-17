const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Google Sheets Integration Logic (refer to the earlier step)

app.post('/register', async (req, res) => {
  const { fullName, email, phoneNumber, eventName, comments } = req.body;
  // Save to Google Sheets or Excel Sheet
  res.status(200).json({ message: 'Data saved successfully!' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
