from fastapi import FastAPI
from app.service import router as sentiment_analysis_router

# Initialize FastAPI app
app = FastAPI()

# Include both APIs
app.include_router(sentiment_analysis_router, prefix="/api", tags=["SentimentAnalyser"])

@app.get("/")
async def root():
    return {"message": "Welcome to backend"}

