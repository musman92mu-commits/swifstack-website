# ============================================================
# Lab 2 - Machine Learning: Regression
# Dataset: Salary vs Years of Experience (Kaggle)
# ============================================================

# --- Libraries ---
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

# ============================================================
# Dataset
# Source: "Salary Data" dataset (popular on Kaggle)
# https://www.kaggle.com/datasets/abhishek14398/salary-dataset-simple-linear-regression
# ============================================================

data = {
    "YearsExperience": [1.1, 1.3, 1.5, 2.0, 2.2, 2.9, 3.0, 3.2, 3.2, 3.7,
                        3.9, 4.0, 4.0, 4.1, 4.5, 4.9, 5.1, 5.3, 5.9, 6.0,
                        6.8, 7.1, 7.9, 8.2, 8.7, 9.0, 9.5, 9.6, 10.3, 10.5],
    "Salary":          [39343, 46205, 37731, 43525, 39891, 56642, 60150, 54445,
                        64445, 57189, 63218, 55794, 56957, 57081, 61111, 67938,
                        66029, 83088, 81363, 93940, 91738, 98273, 101302, 113812,
                        109431, 105582, 116969, 112635, 122391, 121872]
}

df = pd.DataFrame(data)

print("=" * 50)
print("Dataset (first 5 rows):")
print("=" * 50)
print(df.head())
print(f"\nTotal samples: {len(df)}")

# ============================================================
# Input (Feature) and Target Variables
# ============================================================
X = df[["YearsExperience"]]   # Input feature
y = df["Salary"]               # Target variable

# ============================================================
# Data Split (80% train, 20% test)
# ============================================================
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print(f"\nTraining samples : {len(X_train)}")
print(f"Testing  samples : {len(X_test)}")

# ============================================================
# Create the Regression Model
# ============================================================
model = LinearRegression()

# ============================================================
# Train the Model
# ============================================================
model.fit(X_train, y_train)

# ============================================================
# Display Model Parameters
# ============================================================
intercept = model.intercept_
slope     = model.coef_[0]

print("\n" + "=" * 50)
print("Model Parameters:")
print("=" * 50)
print(f"Intercept (b0) : {intercept:.2f}")
print(f"Slope     (b1) : {slope:.2f}")
print(f"\nRegression Equation: y_hat = {intercept:.2f} + {slope:.2f} * x")

# ============================================================
# Make Predictions
# ============================================================
y_pred = model.predict(X_test)

print("\n" + "=" * 50)
print("Actual vs Predicted Salaries (Test Set):")
print("=" * 50)
results = pd.DataFrame({
    "YearsExperience": X_test["YearsExperience"].values,
    "Actual":          y_test.values,
    "Predicted":       y_pred.round(2)
})
results["Error"] = results["Actual"] - results["Predicted"]
print(results.to_string(index=False))

# ============================================================
# Calculate Regression Errors
# ============================================================
mae  = mean_absolute_error(y_test, y_pred)
mse  = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2   = r2_score(y_test, y_pred)

print("\n" + "=" * 50)
print("Regression Evaluation Metrics:")
print("=" * 50)
print(f"MAE  : {mae:.2f}")
print(f"MSE  : {mse:.2f}")
print(f"RMSE : {rmse:.2f}")
print(f"R²   : {r2:.4f}")

# ============================================================
# Plot: Regression Line + Actual Data
# ============================================================
plt.figure(figsize=(9, 5))

plt.scatter(X, y, color="steelblue", label="Actual Data", zorder=5)

plt.plot(
    X,
    model.predict(X),
    color="crimson",
    linewidth=2,
    label="Regression Line"
)

plt.xlabel("Years of Experience")
plt.ylabel("Salary (USD)")
plt.title("Years of Experience vs Salary  |  Linear Regression")
plt.legend()
plt.tight_layout()
plt.savefig("regression_plot.png", dpi=150)
plt.show()

print("\nPlot saved as 'regression_plot.png'")
