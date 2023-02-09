# Tomato Blight Detector

## Project Description
This project aims to detect whether a tomato leaf is healthy or it is defected with diseases known as late blight or early blight.Early blight and late blight are two of common diseases
caused by fungus and micro-organism.The overall detection process is done through image classification.Both mobile and web services are available for the users to take pictures and get the evaluation
result.We used a CNN (Convolutional Neural Network) model architecture to build the backbone of the whole project.
## Motivation
- To contributing in agricultural domain by enhancing economic efficiency , saving detection time  and environmental sustainability of tomato production.
- To protect against the devastating impacts of late blight and early blight disease.
- To improve efficiency and accuracy of disease detection compared to traditional methods that rely on visual inspection by trained personnel.
## Used Concepts and Technologies
- Deep learning , a subfield of machine learning which involves the use of artificial neural networks with composing multiple layers to learn complex patterns
   in data.
- Convolutional Neural Network (CNN) is a type of artificial neural network that is specifically designed for image analysis tasks.
- Flutter , an open-source software development kit (SDK) used for developing applications for mobile, web, and desktop platforms.
- React , an open-source web framework specifically used for providing user experience in web platform.
- Fast API , a fast , open source , high performance back-end framework for building APIs.
- Google Fonts is a font service owned by Google which includes free and open source font families.
## Installation
- Clone the repository using `git clone https://github.com/username/image-classification-cnn.git`
- Install the required packages using `pip install -r requirements.txt`
- Run the code using `python main.py`

## Usage
The code takes as input a directory containing the images to be classified and outputs the class predictions for each image.

## Dataset
The CIFAR-10 dataset consists of 60,000 32x32 color training images and 10,000 test images, with 10 classes. It can be obtained from [here](https://www.cs.toronto.edu/~kriz/cifar.html). The dataset was preprocessed by converting the images to grayscale and normalizing the pixel values.

## Model Information
The model used in this project is a simple convolutional neural network with 2 convolutional layers and 2 fully connected layers. The model was trained using stochastic gradient descent with a learning rate of 0.001 for 50 epochs.


## Results
After training over all the 4 versions of the model , we get the following results below

| Model Version | Tomato Leaf Images Frequency | COCO Common Object Images Frequency | Accuracy on Trained Data | Accuracy on Validation Data | Accuracy on Test Data |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 4490 | - | 98% | 96% | 95% |
| 0.0.2 | 4490 | 5000 | 98.85% | 97.92% | 97.28% |
| 0.0.3 | 4490 | 1111 | 98.76% | 95.32% | 94.90% |
| 0.0.4 | 4490 | 2085 | 99.10% | 97.66% | 96.88% |


## Acknowledgement
   Special thanks to : <br>
     * [Enamul Hassan](https://www.sust.edu/d/cse/faculty-profile-detail/590) Sir for providing valuable feedbacks and amazing ideas regarding the development of this project. <br>
## License
This project is released under the MIT license.
