from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Preformatted
from reportlab.lib.enums import TA_LEFT, TA_CENTER

code = """import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

data = {
    "YearsExperience": [1.1,1.3,1.5,2.0,2.2,2.9,3.0,3.2,3.2,3.7,
                        3.9,4.0,4.0,4.1,4.5,4.9,5.1,5.3,5.9,6.0,
                        6.8,7.1,7.9,8.2,8.7,9.0,9.5,9.6,10.3,10.5],
    "Salary":          [39343,46205,37731,43525,39891,56642,60150,54445,
                        64445,57189,63218,55794,56957,57081,61111,67938,
                        66029,83088,81363,93940,91738,98273,101302,113812,
                        109431,105582,116969,112635,122391,121872]
}

df = pd.DataFrame(data)
print(df.head())

X = df[["YearsExperience"]]
y = df["Salary"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

print("Intercept:", model.intercept_)
print("Slope:", model.coef_[0])

y_pred = model.predict(X_test)

print("Actual values:", y_test.values)
print("Predicted values:", y_pred)

mae  = mean_absolute_error(y_test, y_pred)
mse  = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2   = r2_score(y_test, y_pred)

print("MAE :", mae)
print("MSE :", mse)
print("RMSE:", rmse)
print("R2  :", r2)

plt.scatter(X, y, color="steelblue", label="Actual Data")
plt.plot(X, model.predict(X), color="crimson", linewidth=2, label="Regression Line")
plt.xlabel("Years of Experience")
plt.ylabel("Salary (USD)")
plt.title("Years of Experience vs Salary")
plt.legend()
plt.tight_layout()
plt.savefig("regression_plot.png", dpi=150)
plt.show()"""

output = """   YearsExperience  Salary
0              1.1   39343
1              1.3   46205
2              1.5   37731
3              2.0   43525
4              2.2   39891

Intercept : 25321.58
Slope     : 9423.82

Actual values    : [112635  67938 113812  83088  64445  57189]
Predicted values : [115790.21  71498.28 102596.87  75267.80  55477.79  60189.70]

MAE  : 6286.45
MSE  : 49830096.86
RMSE : 7059.04
R2   : 0.9024"""

doc = SimpleDocTemplate(
    "Lab2_Regression.pdf",
    pagesize=A4,
    rightMargin=2*cm, leftMargin=2*cm,
    topMargin=2*cm, bottomMargin=2*cm
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "title", fontSize=16, alignment=TA_CENTER,
    spaceAfter=4, fontName="Helvetica-Bold"
)
sub_style = ParagraphStyle(
    "sub", fontSize=11, alignment=TA_CENTER,
    spaceAfter=16, textColor=colors.HexColor("#444444")
)
heading_style = ParagraphStyle(
    "heading", fontSize=12, fontName="Helvetica-Bold",
    spaceBefore=14, spaceAfter=6,
    textColor=colors.HexColor("#1a1a2e")
)
code_style = ParagraphStyle(
    "code", fontSize=7.5, fontName="Courier",
    backColor=colors.HexColor("#f4f4f4"),
    leftIndent=8, rightIndent=8,
    spaceAfter=6, leading=11
)
output_style = ParagraphStyle(
    "output", fontSize=8, fontName="Courier",
    backColor=colors.HexColor("#eaf4ea"),
    leftIndent=8, rightIndent=8,
    spaceAfter=6, leading=12
)

story = []

story.append(Paragraph("Lab 2 — Machine Learning: Regression", title_style))
story.append(Paragraph("Dataset: Salary vs Years of Experience (Kaggle)", sub_style))

story.append(Paragraph("Code", heading_style))
story.append(Preformatted(code, code_style))

story.append(Paragraph("Output", heading_style))
story.append(Preformatted(output, output_style))

story.append(Paragraph("Regression Plot", heading_style))
story.append(Spacer(1, 0.3*cm))
story.append(Image("regression_plot.png", width=15*cm, height=9*cm))

doc.build(story)
print("PDF created: Lab2_Regression.pdf")
