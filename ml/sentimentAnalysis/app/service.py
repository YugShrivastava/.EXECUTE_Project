from fastapi import APIRouter
from pydantic import BaseModel
from app.sentiment_analysis import predict_sentiment  

class SentimentAnalyser(BaseModel):
    sentence: str

router = APIRouter()

@router.post("/sentiment-analyser/post/")
async def create_grade(analyser: SentimentAnalyser):
    result = predict_sentiment(analyser)
    return {"sentiment": result}
