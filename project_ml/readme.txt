Food Delivery Time Prediction


Overview
This project aims to predict food delivery times using machine learning models trained on a dataset named foodtr.csv. The entire process, from data preprocessing to model training and deployment, is thoroughly documented and executed in a Jupyter notebook (untitled.ipynb). The final model is deployed using a Flask backend, and the user interface is built with HTML, CSS, and JavaScript.


Data Preprocessing and Model Training

Dataset

The dataset used in this project is foodtr.csv. This dataset contains various features that influence food delivery times.

Data Preprocessing

Dropping Columns: Unnecessary columns were dropped to streamline the dataset.
Feature Encoding: Categorical features in English were converted to numerical ranges to make them compatible with machine learning models.


Model Training

Multiple models from scikit-learn were trained and tested.
The models were evaluated based on their efficiency percentages.
The best-performing model was selected for deployment.
The chosen model's weights were trained and saved using joblib and pickle.


Notebook

All the preprocessing, training, and model dumping processes are documented in the Jupyter notebook untitled.ipynb.


Web Application

Backend

The backend is implemented using Flask.
It loads the trained model and handles incoming feature inputs from the frontend.
The inputs are converted into the correct data types and passed to the model for prediction.
The predicted delivery time is then displayed on another page.


Frontend

The frontend is built using HTML, CSS, and JavaScript.
It prompts the user for feature inputs necessary for the prediction.
Features include weather conditions, road traffic density, vehicle condition, type of order, type of vehicle, multiple deliveries, festival, city, city code, and various date-related features.
The inputs are handled via form elements and buttons, with some fields using specific buttons for selecting options (e.g., weather conditions and yes/no options).


How to Run

bash
Copy code
pip install -r requirements.txt
Run the Flask application:

bash
Copy code
python app.py
Open the application:
Open your web browser and navigate to http://127.0.0.1:5000.


Files

untitled.ipynb: Jupyter notebook containing data preprocessing, model training, and model dumping.
app.py: Flask application file.
templates/index.html: Main HTML file for the frontend.
static/styles.css: CSS file for styling the frontend.
static/script.js: JavaScript file for frontend interactivity.

Model Details


The chosen model is trained to predict delivery times based on various input features.
The model's weights and training process are saved and documented in untitled.ipynb.
Frontend Interaction
Weather Conditions
Options: Cloudy, Fog, Sandstorm, Stormy, Sunny, Windy

Users select these conditions through buttons, which set the appropriate value in a hidden input field.


Yes/No Options
Features: multiple_deliveries, Festival, is_month_start, is_month_end, is_quarter_start, is_quarter_end, is_year_start, is_year_end, is_weekend
Users select "Yes" or "No" through buttons, which set the appropriate value (1 for Yes, 0 for No) in a hidden input field.