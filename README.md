# 🚀 Render Test App

Fullstack application composed of a frontend and backend, deployed on Render.

## 🌐 Live Application

👉 https://render-test-otxo.onrender.com/

---

## 📌 Overview

This project is a fullstack application that separates client and server into independent modules:

- **Frontend:** User interface built with React
- **Backend:** API and server-side logic built with Node.js

It demonstrates a complete development workflow, from local setup to cloud deployment using Render.

---

## 🧩 Architecture

```
render-test/
├── frontend-notes/   # Client application (React)
├── backend-notes/    # Server application (Node.js / API)
└── README.md
```

- Clear separation of concerns
- Independent build and runtime processes
- Scalable and maintainable structure

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- Modern bundler (Vite or similar)

### Backend
- Node.js
- Express (or similar framework)

### DevOps
- Render (deployment)
- GitHub (version control)

---

## ⚙️ Getting Started

### 1. Clone repository

```bash
git clone https://github.com/victoriapatarroyo/render-test.git
cd render-test
```

---

## ▶️ Frontend

```bash
cd frontend-notes
npm install
npm run dev
```

Typical dev server:
```
http://localhost:5173
```

### Build frontend

```bash
npm run build
```

Output directory:
```
dist/
```

---

## ▶️ Backend

```bash
cd backend-notes
npm install
npm start
```

Typical server:
```
http://localhost:3000
```

> If a development script exists:
```bash
npm run dev
```

---

## 🚀 Deployment

The application is deployed on Render:

👉 https://render-test-otxo.onrender.com/

### Deployment setup

#### Frontend (Static Site)
- Build Command:
```bash
npm install && npm run build
```
- Publish Directory:
```
dist
```

#### Backend (Web Service)
- Start Command:
```bash
npm start
```

---

## 📂 Detailed Project Structure

```
render-test/
├── frontend-notes/
│   ├── src/            # React source code
│   ├── public/         # Static assets
│   ├── index.html      # Entry point
│   ├── package.json    # Frontend dependencies & scripts
│   └── ...
│
├── backend-notes/
│   ├── package.json    # Backend dependencies & scripts
│   ├── src/ or app.js  # Server entry point
│   └── ...
│
└── README.md
```

---

## 📌 Scripts

### Frontend
- `npm run dev` → Run development server  
- `npm run build` → Build for production  
- `npm run preview` → Preview production build (if available)  

### Backend
- `npm start` → Start server  
- `npm run dev` → Development mode (if configured)  

---

## 🧠 Engineering Notes

- Modular architecture enables independent scaling
- Frontend served as static assets via CDN
- Backend exposes API endpoints
- Suitable for extension with:
  - Authentication
  - Database integration
  - Environment-based configuration

---

## 👩‍💻 Author

Victoria Patarroyo  
Software Developer

---

## 📄 License

This project is intended for educational and demonstration purposes.
