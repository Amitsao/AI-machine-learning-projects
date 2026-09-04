const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

const predictButton = document.getElementById("predictButton");

const result = document.getElementById("result");

const disease = document.getElementById("disease");

const confidenceText =
    document.getElementById("confidenceText");

const confidenceBar =
    document.getElementById("confidenceBar");

const resetButton =
    document.getElementById("resetButton");



// ========================================
// IMAGE PREVIEW
// ========================================

imageInput.addEventListener("change", () => {

    const image = imageInput.files[0];

    if (image) {

        imagePreview.src = URL.createObjectURL(image);

        imagePreview.style.display = "block";

        result.style.display = "none";

    }

});


// ========================================
// PREDICT DISEASE
// ========================================

predictButton.addEventListener("click", async () => {

    // Check whether image is selected

    if (!imageInput.files.length) {

        alert("Please select an image first.");

        return;
    }


    // Get selected image

    const image = imageInput.files[0];


    // Create FormData

    const formData = new FormData();

    formData.append("file", image);


    // Show loading message

    result.style.display = "block";

    disease.innerHTML = "🔄 Predicting...";

    confidenceText.innerHTML = "";

    confidenceBar.style.width = "0%";


    try {

        // Send image to FastAPI

        const response = await fetch(
            "http://localhost:8000/predict",
            {
                method: "POST",
                body: formData
            }
        );


        // Check response

        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        // Convert response to JSON

        const data = await response.json();


        console.log("API Response:", data);


        // Convert confidence to percentage

        const confidence =
            data.confidence * 100;


        // Display disease

        disease.innerHTML =
            `🌿 ${data.prediction}`;


        // Display confidence

        confidenceText.innerHTML =
            `Confidence: ${confidence.toFixed(2)}%`;


        // Update confidence bar

        confidenceBar.style.width =
            `${confidence}%`;


    }


    catch (error) {

        console.error("Error:", error);

        disease.innerHTML =
            "❌ Prediction Failed";

        confidenceText.innerHTML =
            "Could not connect to FastAPI.";

        confidenceBar.style.width = "0%";

    }

});


// ========================================
// RESET
// ========================================

resetButton.addEventListener("click", () => {

    // Remove selected image

    imageInput.value = "";


    // Remove preview

    imagePreview.src = "";

    imagePreview.style.display = "none";


    // Hide result

    result.style.display = "none";


    // Reset confidence bar

    confidenceBar.style.width = "0%";


    // Clear text

    disease.innerHTML = "";

    confidenceText.innerHTML = "";

});