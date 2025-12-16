from sklearn.feature_extraction.text import TfidfVectorizer

def extract_keywords(text: str, top_k: int = 40):
    vectorizer = TfidfVectorizer(stop_words="english", max_features=top_k)
    tfidf_matrix = vectorizer.fit_transform([text])
    scores = tfidf_matrix.toarray()[0]
    words = vectorizer.get_feature_names_out()

    return [
        {"word": words[i], "weight": float(scores[i])}
        for i in range(len(words))
    ]
