from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Load model and columns
with open("./model.pkl", "rb") as f:
    model = pickle.load(f)

with open("./columns.pkl", "rb") as f:
    columns = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Create dataframe with all zeros
    df = pd.DataFrame(columns=columns)
    df.loc[0] = 0

    # Numeric columns
    numeric_cols = ["carat", "depth", "table", "x", "y", "z"]
    for col in numeric_cols:
        df.at[0, col] = float(data.get(col, 0))

    # One-hot encode categorical values
    cut_col = f"cut_{data.get('cut')}"
    color_col = f"color_{data.get('color')}"
    clarity_col = f"clarity_{data.get('clarity')}"

    for col in [cut_col, color_col, clarity_col]:
        if col in df.columns:
            df.at[0, col] = 1

    # Predict
    pred = model.predict(df)[0]

    return jsonify({"price": float(pred)})

if __name__ == "__main__":
    app.run(port=5000, debug=True)