@echo off
cd /d "%~dp0"
echo.
echo If a server is already running, close that terminal first.
echo.
echo Installing dependencies (if needed)...
call npm install
if errorlevel 1 (
  echo.
  echo ERROR: npm install failed. Make sure Node.js is installed from https://nodejs.org
  pause
  exit /b 1
)
echo.
echo Starting AWS Community Day website...
echo Open http://localhost:5173 in your browser
echo Press Ctrl+C to stop the server
echo.
call npm run dev
pause
