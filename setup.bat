@echo off
start "Backend" /D backend npm run dev
start "Frontend" /D frontend npm start
start "" "http://localhost:3000"

echo Installing dependencies...
cd frontend && npm install
cd ..\backend && npm install

:: Create .env from example
copy /Y .env.example .env

echo Environment setup complete!
echo Start servers with:
echo - Backend: cd backend && npm run dev
echo - Frontend: cd frontend && npm start