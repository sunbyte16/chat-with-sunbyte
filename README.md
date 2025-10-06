## 💬 Chat with Sunbyte

A modern MERN chat application with real-time messaging via Socket.IO.

<p align="left">
  <a href="https://nodejs.org/" target="_blank"><img alt="Node" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white"></a>
  <a href="https://react.dev/" target="_blank"><img alt="React" src="https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=061C30"></a>
  <a href="https://expressjs.com/" target="_blank"><img alt="Express" src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white"></a>
  <a href="https://www.mongodb.com/" target="_blank"><img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white"></a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue">
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</p>

---

### 🚀 Quick Start
1) Install dependencies
```bash
npm install --legacy-peer-deps
(cd frontend && npm install --legacy-peer-deps)
(cd backend && npm install --legacy-peer-deps)
```

2) Configure environment
Create `backend/.env` with your values:
```bash
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority&appName=<app>
PORT=5000
NODE_ENV=development
```

3) Run development servers
- Backend (from `backend/`):
```bash
npm start
```
- Frontend (from `frontend/`):
```bash
npm start
```
Open the app: `http://localhost:3000`  |  API: `http://localhost:5000`

---

### ✨ Features
- 🔐 Authentication (signup/login)
- 💬 One-to-one and group chats
- 🟢 Realtime updates with Socket.IO (typing, new messages)
- 🧭 Modern UI with Chakra UI
- 🔎 Search users and chats

### 🧰 Tech Stack
- Backend: Express, Mongoose, JWT, Socket.IO
- Frontend: React, Chakra UI, React Router
- Realtime: Socket.IO (client and server)

### 🧪 Production Build
Build React and serve from Express (when `NODE_ENV=production`):
```bash
npm run build
(cd backend && npm start)
```
The backend serves the React build from `frontend/build` in production mode.

### 🔧 Scripts
- Root
  - `npm start`: runs `node backend/server.js`
  - `npm run build`: installs deps and builds frontend
- Backend
  - `npm start`: start server (`server.js`)
- Frontend
  - `npm start`: start React dev server on port 3000
  - `npm run build`: create production build

### 🔐 Environment Variables
- `MONGO_URI`: MongoDB connection string (Atlas or local)
- `PORT`: Express server port (default 5000)
- `NODE_ENV`: `development` or `production`

### ❗ Common Issues
- Port in use → change `PORT` in `backend/.env` or free port 5000
- Mongo connection fails → verify `MONGO_URI` and Atlas IP allowlist
- CORS during dev → frontend should run on `http://localhost:3000`

### 📸 Screenshots
<p align="left">
  <img src="./screenshots/signup.PNG" alt="Signup" width="420" />
</p>

> Add more images to the `screenshots/` folder and embed them here, for example:
> `./screenshots/home.png`, `./screenshots/chat.png`

### 🌐 Links

<a href="https://github.com/sunbyte16" target="_blank">
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-sunbyte16-181717?logo=github&logoColor=white">
</a>

<a href="https://www.linkedin.com/in/sunil-kumar-bb88bb31a/" target="_blank">
  <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Sunil%20Kumar-0A66C2?logo=linkedin&logoColor=white">
</a>

<a href="https://lively-dodol-cc397c.netlify.app" target="_blank">
  <img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-Visit-00C7B7?logo=netlify&logoColor=white">
</a>

---
Created By ❤️ Sunil Sharma
