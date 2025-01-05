# Food Delivery Time Prediction

## Objective
The objective of this project is to develop a machine-learning model that accurately predicts the estimated food delivery time for orders placed through our food delivery platform. By leveraging historical order data, real-time environmental factors, and delivery logistics, the model aims to predict delivery time and provide customers with reliable and timely estimates. Ultimately, the goal is to enhance customer satisfaction with the food delivery service.

## Components of the Project

### 1. Data Collection
The dataset used for this project is collected from an online source (Kaggle).

### 2. Data Preprocessing
Data preprocessing steps include:
- Data cleaning
- Handling missing values
- Feature engineering

### 3. Train-Test Split
The dataset is split into training and testing sets to evaluate model performance.

### 4. Machine Learning Models
We use the following machine learning models to predict delivery time:
- Decision Tree
- Random Forest
- XGBoost
- Linear Regressor

### 5. Model Training and Prediction
The dataset is trained on the aforementioned models, and predictions are made.

### 6. Accuracy Evaluation
The accuracy values for each model are calculated and compared to determine the best-performing model.

### 7. Web Development
A front-end interface is developed using web technologies (HTML, CSS, and JavaScript). This interface allows users to input various features (e.g., order time, food item, and distance) for delivery time prediction.

### 8. Frontend
An HTML page is designed to input feature values that are sent to the backend for prediction.

### 9. Backend
The machine learning model is integrated and stored in the project directory.

### 10. Integration
Flask is used to combine the front-end and back-end for seamless integration, allowing the prediction to be made from user input on the web interface.

## Models Used

- **Decision Tree**: A tree-like structure used for classification and regression tasks.
- **Random Forest**: An ensemble method that creates multiple decision trees and combines their results.
- **XGBoost**: A gradient boosting framework that is efficient and effective for large datasets.
- **Linear Regressor**: A regression model used to predict continuous values.

## Results
The model with the highest accuracy after comparison of all models will be used for the final deployment.


## Acknowledgments
- Dataset from [Kaggle](https://www.kaggle.com/)

