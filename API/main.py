from fastapi import FastAPI,UploadFile,File
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware
import os

import fastapi
print(fastapi.__version__)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "potato_disease_model.keras"
)

model = tf.keras.models.load_model(MODEL_PATH)

# Class names
class_name = [
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy'
]

@app.get('/ping')
async def ping():
    return 'Hello, I am alive'
print(app)

def read_file_as_image(data)-> np.ndarray:
    image =Image.open(BytesIO(data))
    return np.array(image)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    
    # Read uploaded image
    image = read_file_as_image(await file.read())
    print("Original shape:", image.shape)      
    
    
    # Add batch dimension
    img_batch = np.expand_dims(image,axis=0)
    print("Image shape:", img_batch.shape)
    
    # Prediction
    predictions = model.predict(img_batch)
    print("Predictions:", predictions)
    
    # Get predicted class index
    predicted_class_index = int(np.argmax(predictions[0]))

    # Get predicted class
    predicted_class = class_name[predicted_class_index]
    print("Prediction:", predicted_class)
    
    # Confidence  
    confidence = float(np.max(predictions[0]))
    print("Confidence:", confidence)
    
    return{
        'filename':file.filename,
        'prediction':predicted_class,
        'confidence':confidence
    }

if __name__ == "__main__":

    port = int(
        os.environ.get(
            "PORT",
            8000
        )
    )

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=port
    )