#!/bin/bash

# # 1. Backend setup
# echo "Installing backend dependencies..."
# cd backend
# pip install -r requirements.txt
# cd ..

# # 2. Frontend setup
# echo "Installing frontend dependencies..."
# cd frontend
# npm install
# cd ..

# 3. Start both servers concurrently
echo "Starting backend and frontend..."
# Use python -m uvicorn for compatibility
npx concurrently \
  "cd backend && python -m uvicorn app.main:app --reload" \
  "cd frontend && npm run dev"
