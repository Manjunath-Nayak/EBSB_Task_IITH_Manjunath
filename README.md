# EBSB Event Registration Page

This project is a simple web application built using the MERN stack (MongoDB, Express, React, Node.js) and styled with TailwindCSS. It provides a user-friendly registration page for events under the EBSB (Ek Bharat Shrestha Bharat) initiative. The form responses are stored in either a Google Spreadsheet or an Excel sheet.

## Features

- Responsive design with TailwindCSS.
- Form validation for required fields.
- Integration with Google Sheets or Excel for data storage.
- Easy deployment on platforms like GitHub Pages, Vercel, or Netlify.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Data Storage**: Google Sheets API or Excel

## Project Structure

```bash
EBSB-Event-Registration/
│
├── client/                # React Frontend
│   ├── public/
│   ├── src/
│       ├── components/    # RegistrationForm.js
│       ├── App.js
│       ├── index.js
│       └── index.css
│
├── server/                # Node.js Backend
│   ├── index.js
│   └── ...
│
├── .gitignore
├── README.md
└── package.json
