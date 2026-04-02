from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import inference

app = FastAPI(title="Mira AI Backend")

# Enable CORS for the frontend Vite server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(inference.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Mira AI API"}
