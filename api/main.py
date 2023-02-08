from fastapi import FastAPI , File,UploadFile
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import uvicorn
app = FastAPI()
MODEL = tf.keras.models.load_model("../0.0.4")
CLASS_NAME = ["Not a Tomato Leaf","Early Blight","Late Blight","Healthy"]
@app.get("/tick")
async def ping():
    return "HHHH"
def read_file_as_image(data):
    image = Image.open(BytesIO(data))
    image = image.resize((256,256),Image.ANTIALIAS)
    image = np.array(image)
   # print(image.shape)
    #image = np.reshape(image,(256,256,3))
   # print(image.shape)
    print(image)
    return image
@app.post("/prediction")
async  def prediction(file: UploadFile = File(...)):
    bytes = await file.read()
    image = read_file_as_image(bytes)
    img_batch = np.expand_dims(image,0)
    prediction = MODEL.predict(img_batch)
    predicted_class = CLASS_NAME[np.argmax(prediction[0])]
    confidence = np.max(prediction[0]) * 100
    return {
        "class": predicted_class,
        "confidence": int(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app,host="192.168.85.178",port=8000)