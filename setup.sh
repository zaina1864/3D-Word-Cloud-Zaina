#!/bin/bash

echo "Installing backend dependencies..."
cd backend
pip install -r requirements.txt
cd ..

echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "Starting backend and frontend concurrently..."
# Run backend on 8000 and frontend on 5173
npx concurrently \
  "cd backend && python -m uvicorn app.main:app --reload" \
  "cd frontend && npm run dev"
