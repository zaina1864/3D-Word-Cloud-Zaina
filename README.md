# 3D Word Cloud - Zaina

This project visualizes topics from a news article as a **3D interactive word cloud**.

---

## Features

- Enter a news article URL
- Backend fetches article text and extracts keywords using TF-IDF
- Frontend renders a **3D word cloud** with React Three Fiber
- Words sized and colored by importance
- Interactive rotation with mouse

---

## Tech Stack

- **Frontend**: React, TypeScript, React Three Fiber, Drei, Three.js  
- **Backend**: Python, FastAPI, BeautifulSoup, scikit-learn  
- **Communication**: REST API `/analyze`  

---

## Setup & Run

### Windows (PowerShell)

1. Open the project in **VS Code**  
2. Run the `setup.ps1` script to start both backend and frontend  

---

### Linux / macOS (Bash)

1. Open the project in VS Code or any terminal  
2. Run the `setup.sh` script to start both backend and frontend  

---

### Access the Servers

- **Backend:** [http://localhost:8000](http://localhost:8000)  
- **Frontend:** [http://localhost:5173](http://localhost:5173)
