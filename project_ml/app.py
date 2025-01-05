from flask import Flask, request, render_template
import joblib
import os

app = Flask(__name__)


model = joblib.load('modelx.pkl')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        features = [
            float(request.form['Delivery_person_Ratings']),
            float(request.form['Restaurant_latitude']),
            float(request.form['Restaurant_longitude']),
            float(request.form['Delivery_location_latitude']),
            float(request.form['Delivery_location_longitude']),
            int(request.form['weather-conditions']),
            float(request.form['Road_traffic_density']),
            float(request.form['Vehicle_condition']),
            float(request.form['Type_of_order']),
            float(request.form['Type_of_vehicle']),
            int(request.form['multiple_deliveries']),
            int(request.form['Festival']),
            float(request.form['City']),
            float(request.form['City_code']),
            float(request.form['day']),
            float(request.form['month']),
            float(request.form['quarter']),
            float(request.form['year']),
            float(request.form['day_of_week']),
            int(request.form['is_month_start']),
            int(request.form['is_month_end']),
            int(request.form['is_quarter_start']),
            int(request.form['is_quarter_end']),
            int(request.form['is_year_start']),
            int(request.form['is_year_end']),
            int(request.form['is_weekend']),
            float(request.form['order_prepare_time']),
            float(request.form['distance'])
        ]

        prediction = model.predict([features])
        result = prediction[0]

        return render_template('result.html', prediction=result)
    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run(debug=True)
