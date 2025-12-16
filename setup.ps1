# setup.ps1 - Windows PowerShell version

# Set the working directory to the folder containing this script
Set-Location -Path $PSScriptRoot

Write-Host "Installing backend dependencies..."
Set-Location -Path ".\backend"
pip install -r requirements.txt

Write-Host "Installing frontend dependencies..."
Set-Location -Path "..\frontend"
npm install

Write-Host "Starting backend and frontend concurrently..."

# Start backend in a new terminal
Start-Process powershell -WorkingDirectory "$PSScriptRoot\backend" -ArgumentList "python -m uvicorn app.main:app --reload"

# Start frontend in a new terminal
Start-Process powershell -WorkingDirectory "$PSScriptRoot\frontend" -ArgumentList "npm run dev"

