from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
import tensorflow as tf

MODEL = tf.keras.models.load_model("../../0.0.1")
CLASS_NAME = ["Tomato_Early_Blight","Tomato_Late_Blight","Tomato_Healthy"]


def read_file_as_image(data):
    image = Image.open(BytesIO(data))
    image = image.resize((256,256),Image.ANTIALIAS)
    image = np.array(image)

    return image

# Create your views here.
@csrf_exempt
def prediction(request):

    file=request.FILES['image']
    print(file)
    file_bytes =  file.read()
    image = read_file_as_image(file_bytes)
    # showImg=Image.fromarray(image)
    # showImg.show()
    img_batch = np.expand_dims(image,0)
    
    prediction = MODEL.predict(img_batch)
    print(prediction[0])
    type(prediction)
    print(prediction.shape)
    # # print(round(pre))
    index=np.argmax(prediction)
    predicted_class = CLASS_NAME[index]
    print(predicted_class)
    confidence = np.max(prediction[0]) * 100
    predict={
        "class": predicted_class,
        "confidence": int(confidence)
    }


    # predict={'result':'okk'}
    # print("hello world")
    return JsonResponse(predict)

