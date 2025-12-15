from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.crawler import fetch_article

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    url: str

@app.post("/analyze")
def analyze(payload: AnalyzeRequest):
    text = fetch_article(payload.url)
    return {
        "length": len(text),
        "preview": text[:500]
    }
