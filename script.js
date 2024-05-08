// Handle form submission, display results to the user if
// the form fields are filled in correctly
function handleForm(event) {
    event.preventDefault();

    clearFeedback();

    let form = event.target;
    let username = form.username.value;
    let height = form.height.value;
    let weight = form.weight.value;

    let usernameIsValidated = validateUsername(username);

    if (usernameIsValidated) {
        let bmi = calculateBMI(height, weight);

        let result = document.getElementById("result");
        result.innerText = username + ", your BMI is " + bmi;

        let advice = document.getElementById("advice");
        advice.innerHTML = `
            <h2>BMI advice</h2>
            <p>Lower than 18.5: Too low</p>
            <p>Between 18.5 and 25 : Healthy weight</p>
            <p>Higher than 25: Too high</p>
            <button onclick="closePage()">close</button>
            `
    }
}

// Clear feedback from web page
function clearFeedback() {
    let usernameFeedback = document.getElementById("usernameFeedback");
    usernameFeedback.innerText = "";
}

// Check that username provided by the user is at least 8 characters long
// Provide feedback for the user if the username is too short
// return true or false to indicate if the username is validated
function validateUsername(username) {
    if (username.length < 8) {
        let usernameFeedback = document.getElementById("usernameFeedback");
        usernameFeedback.innerText = "Username must be at least 8 characters long";
        return false;
    } else {
        return true;
    }
    
    
}

// Calculate BMI and return the result
function calculateBMI(height, weight) {
    let heightInMs = height / 100;
    let calculatedBMI = weight / (heightInMs * heightInMs);
    let roundedBMI = calculatedBMI.toFixed(2);
    return roundedBMI;
}

// Show message on closing the form
function closePage() {
    document.write("<h1>Good luck with your training!</h1>");
}