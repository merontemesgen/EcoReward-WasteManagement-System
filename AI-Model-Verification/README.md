**EcoReward – Waste Classification Model**


**Project Overview**

EcoReward is an AI-powered waste classification system designed to automatically identify waste types from images and support a reward-based recycling platform.
The goal of the model is to classify uploaded images into predefined waste categories and provide a confidence score that determines whether a submission is approved, requires admin review, or is rejected.

This repository contains the machine learning model, training pipeline, evaluation logic, and inference workflow used in the EcoReward system.


**Problem Statement**

Manual waste classification is time-consuming, inconsistent, and not scalable.
EcoReward solves this by using computer vision and deep learning to:

1.  Automatically classify waste images

2.  Reduce human error

3.  Enable faster reward validation

4.  Support environmental sustainability initiatives


**Waste Categories (Classes)**

The model currently classifies images into four waste categories:

*  Glass

*  Metal

*  Paper

*  Plastic

**Note:** The model is trained to recognize material type, not whether the object looks dirty or discarded. Clean containers are valid training samples as long as the material is correct.


**Dataset Structure**

The dataset is organized using a directory-based structure compatible with Keras ImageDataGenerator.

**dataset/
│
├── train/

│   ├── glass/

│   ├── metal/

│   ├── paper/

│   └── plastic/
│
└── validation/

    **├── glass/
    
    ├── metal/
    
    ├── paper/
    
    └── plastic/**
    

**Dataset Size**

Training images: ~80 images per class

Validation images: ~20 images per class

**Total classes: 4**


**Data Preprocessing & Augmentation**

To improve generalization and reduce overfitting, the following preprocessing steps are applied:

1.  Image resizing to 224 × 224

2.  Pixel normalization (rescale = 1/255)

3.  Data augmentation on training data:

  *  Random rotation

  *  Horizontal flipping

  *  Zoom variations

  *  Width and height shifts

Validation data is not augmented to ensure unbiased performance evaluation.


**Model Architecture**

The project uses a Convolutional Neural Network (CNN) built with TensorFlow and Keras.

High-level architecture:

  *  Convolutional layers for feature extraction

  *  MaxPooling layers for spatial reduction

  *  Fully connected (Dense) layers for classification

  *  Softmax activation in the output layer for multi-class probability prediction


**Model Training**

  *  Framework: TensorFlow / Keras

  *  Loss Function: Categorical Crossentropy

  *  Optimizer: Adam

  *  Metric: Accuracy

  *  Epochs: 10


**During training:**

1.  Training accuracy reached near-perfect levels

2.  Validation accuracy fluctuated around 72–80%, indicating realistic generalization

This behavior is expected with limited data and confirms that the model learned meaningful features without memorizing validation samples.


**Model Evaluation**

The model is evaluated using the validation dataset:

model.evaluate(val_generator)

Evaluation outputs:

Validation loss = 0.5984

Validation accuracy = 0.8102

These metrics help assess how well the model generalizes to unseen data.


**Model Saving & Loading**

The trained model is saved using the native Keras format:

model.save("waste_classifier_v2.keras")

The saved model can be reloaded later without retraining:

from tensorflow.keras.models import load_model
model = load_model("waste_classifier_v2.keras")

This ensures reproducibility and easy deployment.


**Inference (Prediction on a Single Image)**

The system supports prediction on individual images not seen during training.

Inference steps:

1.  Load and preprocess the image

2.  Run the model prediction

3.  Extract the predicted class

4.  Output the confidence score


**Example:**

Glass image → Confidence: 0.93

Metal image → Confidence: 0.99

Paper image → Confidence: 0.99

Plastic image → Confidence: 0.99

These results confirm correct classification on unseen data.


**Confidence Threshold Logic (Reward System)**

The EcoReward platform uses confidence scores to determine reward eligibility.

Confidence Score	      Decision

≥70%	                  Automatically approved

40% – 69%	              Requires admin review

<40%	                  Rejected

This logic ensures fairness, prevents abuse, and maintains system reliability.


**Project Workflow Summary**

  *  Dataset preparation and structuring

  *  Image preprocessing and augmentation

  *  Model training

  *  Training vs validation accuracy analysis

  *  Model saving

  *  Inference testing on unseen images

  *  Confidence-based decision logic

  *  Integration with EcoReward platform


**Technologies Used**

  *  Python

  *  TensorFlow

  *  Keras

  *  NumPy

  *  Matplotlib

  *  Google Colab


**Team Collaboration Notes**

  *  This is a group project

  *  Code is version-controlled via GitHub

  *  The saved model (.keras) is reusable by backend and deployment teams

  *  Notebook includes clear comments for maintainability


**Future Improvements**

  *  Increase dataset size for better generalization

  *  Add more waste categories

  *  Fine-tune confidence thresholds with real-world data

  *  Integrate real-time camera uploads

  *  Deploy model as an API endpoint


**Conclusion**

This project demonstrates a complete end-to-end machine learning pipeline, from data preparation to deployment-ready inference.
The model performs reliably on unseen data and is structured for easy extension and real-world integration.


