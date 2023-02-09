# Tomato Blight Detector
## Group Number : 12
## Team Name : Visionary Providers
## Project Description
This project aims to detect whether a tomato leaf is healthy or it is defected with diseases known as late blight or early blight.Early blight and late blight are two of common diseases
caused by fungus and micro-organism.The overall detection process is done through image classification.Both mobile and web services are available for the users to take pictures and get the evaluation
result.We used a CNN (Convolutional Neural Network) model architecture to build the backbone of the whole project.
## Motivation
- To contribute in agricultural domain by enhancing economic efficiency  and environmental sustainability of tomato production along with saving detection time.
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


## Features
- Users can use both web and mobile services for image classification of tomato leaf.
- Users can upload pictures either from gallery or by capturing live pictures.
- After uploading , the model calculates desired prediction of class with confidence rate and provides the information back to the user through API response.
## Additional Features
 - Initially the model could only detect healthy , late blight and early blight conditions which can be mentioned as version 0.0.1 . Then we developed 3 other versions all of    which are capable of detecting one additional class which is whether a particular picure is anything other than tomato leaf.
 - If an image is a tomato leaf then the model would find whether it is in late blight or early blight or healthy conditions. Otherwise the model will provide the information of (not a tomato leaf) class.
 - Additional user interface improvements on web platform have been done for better user experience.
## Dataset Information
- We used 4490 images of tomato leafs from [Kaggle](https://www.kaggle.com/datasets/arjuntejaswi/plant-village) and about 5000 images of common objects from 
[COCO Common Object Validation Images of 2017](https://cocodataset.org/#download) for training , testing and validating the model.
- We collected some practical field level tomato leaf images.
- We 80% of the whole dataset has been considered for training and the rest 20% is divided into validating and testing purpose.
- We applied several augmentative techniques on the images before training  , testing and validating the model.

## Model Information
- A total of 4 versions of the model has been created. Out of which only the first version (0.0.1) is trained tested and validated only on [Kaggle](https://www.kaggle.com/datasets/arjuntejaswi/plant-village) data set which can detect 3 classes of image and cannot classify (not a tomato leaf class).
- But the rest 3 versions of the model (0.0.2 , 0.0.3 , 0.0.4) are trained , tested and validated on both [Kaggle](https://www.kaggle.com/datasets/arjuntejaswi/plant-village) and [COCO Common Object Validation Images of 2017](https://cocodataset.org/#download) datasets which can detect all the 4 classes.
- The model consisting of convolutional layer part and flattened dense layer part. Kernel size of (3,3) has been considered.
- A total of 6 convolutional layers , each performing rectified linear unit as activation function and max-pooling operation of size (2,2).
- In dense flattened layer , along with rectified linear unit function , soft-max activation function is being added for the final layers 4 neurons for normalizing the probabilistic values of those 4 classes.
- Only for model version 0.0.1 the first convolutional layer is having 32 neurons and the final flattened dense layer consist of 3 neurons and the rest of them are of 64 neurons
-But for the rest of the versions of this model, apart from the final flattened dense layer which consist of 4 neurons the rest of the layers each consist of 64 neurons.


## Results
After training , testing and validating over all the 4 versions of the model , we get the following results below

| Model Version | Tomato Leaf Images Frequency | COCO Common Object Images Frequency | Accuracy on Trained Data | Accuracy on Validation Data | Accuracy on Test Data |
| --- | --- | --- | --- | --- | --- |
| 0.0.1 | 4490 | 0 | 98% | 96% | 95% |
| 0.0.2 | 4490 | 5000 | 98.85% | 97.92% | 97.28% |
| 0.0.3 | 4490 | 1111 | 98.76% | 95.32% | 94.90% |
| 0.0.4 | 4490 | 2085 | 99.10% | 97.66% | 96.88% |

## Future work
- The model could be further optimized and improved to increase its accuracy by collecting more diverse data and tinkering the model architecture.
- A universal vegetables disease detector could be a future scope if we could collect vast amount of different diseases image data with increased diversity.

## Acknowledgements
  Special thanks to : 
   - [Enamul Hassan](https://www.sust.edu/d/cse/faculty-profile-detail/590) Sir for providing valuable feedbacks and amazing ideas regarding the development of this project.
   - All the members of our team for their relentless contribution on developing this project which gave promising results.
   - [Dhaval Patel](https://www.youtube.com/@codebasics) for his resourceful youtube channel from which we learned a lot of concepts eventually applying those concepts to           this project.
   
   
 ## Group Members
 | Name | Registration Number |
| --- | --- |
| Md Adith Mollah | 2018331082 |
| Raisa Fairooz | 2018331050 |
| Md Ashraful Islam | 2018331056 |
| Md Sirazul Islam | 2018331116 |
| Siddique Badhon | 2018331110 |

<small>&copy; 2023 - Dept. of CSE, SUST, BD</small>
