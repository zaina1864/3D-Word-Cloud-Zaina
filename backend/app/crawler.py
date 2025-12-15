import requests
from bs4 import BeautifulSoup

def fetch_article(url: str) -> str:
    response = requests.get(url, timeout=10)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    paragraphs = soup.find_all("p")
    text = " ".join(p.get_text() for p in paragraphs)

    return text[:3000]  # limit size for now
