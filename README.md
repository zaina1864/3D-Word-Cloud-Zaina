# 3D Word Cloud - Zee

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

1. Make sure you have Python, Node.js, and npm installed  
2. Run the setup script:

```bash
./setup.sh
