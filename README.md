# 📧 BulkMail

A full-stack bulk email sender built completely from scratch — no AI code generation.


## 🛠 Tech Stack
- **Frontend:** React + Tailwind CSS + Axios + SheetJS (xlsx)
- **Backend:** Node.js + Express + Nodemailer
- **Email Service:** Gmail SMTP

## ✨ Features
- 📂 Upload Excel (.xlsx) file with email list
- ✉️ Send custom emails to all recipients at once

## 📁 Project Structure
bulkmail/
├── frontend/     # React app
└── backend/      # Node.js + Express server

## 🚀 Run Locally

### Backend
cd backend
npm install
node server.js(use nodemon aswell)

### Frontend
cd frontend
npm install
npm run dev

## 📊 Excel File Format
Your Excel sheet should have emails in column A like this:
| A                     |
|-----------------------|
| example1@gmail.com    |
| example2@gmail.com    |
| example3@gmail.com    |


## 👨‍💻 Author
Alan Babu