# 🥔 Potato Disease Detection

A Deep Learning based **Potato Disease Detection System** that uses a **Convolutional Neural Network (CNN)** to classify potato leaf images and identify diseases.

The project includes a trained TensorFlow/Keras model, a **FastAPI backend**, and a simple **HTML/CSS/JavaScript frontend** for image-based prediction.

## 📌 Project Overview

Potato plants can be affected by different diseases that can reduce crop quality and production.

This project aims to detect potato leaf diseases automatically from an uploaded image using a deep learning image classification model.

The user uploads a potato leaf image through the web interface, and the system predicts the disease class along with the prediction confidence.

## 🎯 Objectives

* Detect diseases from potato leaf images.
* Use CNN-based deep learning for image classification.
* Build an API using FastAPI.
* Create a simple web interface for users.
* Display the predicted disease and confidence score.

## 🧠 Machine Learning Model

The project uses a **Convolutional Neural Network (CNN)** trained using the **PlantVillage dataset**.

The trained model is saved as:

```text
potato_disease_model.keras
```

The model takes a potato leaf image as input and predicts its corresponding disease class.

## 🗂️ Dataset

The project uses the **PlantVillage dataset** for training the image classification model.

The dataset contains images of potato leaves belonging to different disease categories.

> Note: The `PlantVillage` dataset is excluded from this GitHub repository using `.gitignore` because of its large size.

## 🛠️ Technologies Used

### Programming Language

* Python

### Machine Learning / Deep Learning

* TensorFlow
* Keras
* NumPy
* CNN

### Backend

* FastAPI
* Uvicorn

### Image Processing

* Pillow (PIL)

### Frontend

* HTML
* CSS
* JavaScript

### Development Tools

* Jupyter Notebook
* VS Code
* Git
* GitHub

## 📁 Project Structure

```text
Potato-Disease-Detection/
│
├── API/
│   ├── main.py
│   └── requirments.txt
│
├── Frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── main.ipynb
├── potato_disease_model.keras
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Amitsao/AI-machine-learning-projects.git
```

Navigate to the project:

```bash
cd AI-machine-learning-projects/Potato-Disease-Detection
```

### 2. Create a Virtual Environment

```bash
python -m venv .venv
```

Activate the virtual environment on Windows:

```powershell
.venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r API/requirments.txt
```

## ▶️ Run the FastAPI Backend

Navigate to the API folder:

```powershell
cd API
```

Start the FastAPI server:

```powershell
uvicorn main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation can be accessed at:

```text
http://127.0.0.1:8000/docs
```

## 🌐 Run the Frontend

Open the following file in your browser:

```text
Frontend/index.html
```

The frontend allows the user to:

1. Select a potato leaf image.
2. Upload the image.
3. Send the image to the FastAPI backend.
4. Receive the prediction.
5. Display the predicted disease.
6. Display the confidence score.

## 🔄 Project Workflow

```text
Potato Leaf Image
        ↓
Frontend Image Upload
        ↓
FastAPI Backend
        ↓
Image Preprocessing
        ↓
CNN Model
        ↓
Disease Prediction
        ↓
Confidence Score
        ↓
Result Displayed on Frontend
```

## 🔮 Future Improvements

* Deploy the application to the cloud.
* Improve model accuracy with data augmentation.
* Add more plant disease classes.
* Add mobile-friendly UI.
* Store prediction history.
* Add real-time camera-based disease detection.
* Improve model performance using transfer learning.

## 👨‍💻 Author

**Amit Sao**

GitHub: [Amitsao](https://github.com/Amitsao)

---

⭐ If you find this project useful, consider giving the repository a star!
