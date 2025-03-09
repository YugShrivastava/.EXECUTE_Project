import joblib
import re
import os
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# Get the directory of this file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Load the trained model and vectorizer
model_path = os.path.join(current_dir, "model (2).pkl")
vectorizer_path = os.path.join(current_dir, "tokenizer (2).pkl")

model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)

# Preprocessing function
def preprocess_text(text, use_stemming=False, use_lemmatization=True):
    text = text.lower()
    text = re.sub(r'\W', ' ', text)
    words = word_tokenize(text)
    
    stop_words = set(stopwords.words('english'))
    stop_words.discard('not')  # Keep 'not' for sentiment analysis
    words = [word for word in words if word not in stop_words]

    stemmer = PorterStemmer()
    lemmatizer = WordNetLemmatizer()

    if use_stemming:
        words = [stemmer.stem(word) for word in words]
    elif use_lemmatization:
        words = [lemmatizer.lemmatize(word) for word in words]

    return " ".join(words)

# Prediction function
def predict_sentiment(analyser):
    """Predicts sentiment using the trained BERT model."""
    processed_text = preprocess_text(analyser.sentence)  # ✅ Preprocess the text

    # ✅ Tokenize input text (Replacing vectorizer.transform)
    inputs = vectorizer(processed_text, truncation=True, padding="max_length", max_length=256, return_tensors="pt")

    # ✅ Move inputs to the correct device
   #inputs = {key: val.to(device) for key, val in inputs.items()}

    # ✅ Get model prediction
    with torch.no_grad():
        outputs = model(**inputs)
        prediction = torch.argmax(outputs.logits, dim=1).item()

    # ✅ Convert prediction to sentiment label
    sentiment_labels = ["Negative", "Neutral", "Positive"]
    return sentiment_labels[prediction]