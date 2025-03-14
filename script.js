// Show Forgot Password/Username Form
document.getElementById('forgotLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('forgotForm').classList.remove('hidden');
});

// Close Forgot Password/Username Form
function closeForgotForm() {
    document.getElementById('forgotForm').classList.add('hidden');
}

// Handle Forgot Password/Username Form Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const idNumber = document.getElementById('forgotIdNumber').value;
    const phone = document.getElementById('forgotPhone').value;
    const email = document.getElementById('forgotEmail').value;

    // Simulate sending data to the server (you can replace this with an actual API call)
    console.log('ID Number:', idNumber);
    console.log('Phone:', phone);
    console.log('Email:', email);

    // Show confirmation message
    document.getElementById('forgotForm').classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');
});

// Close Confirmation Message
function closeConfirmationMessage() {
    document.getElementById('confirmationMessage').classList.add('hidden');
}

// Existing JavaScript for Sign Up Form
function calculatePrice() {
    // Example logic for calculating price (replace with your actual logic)
    const shares = document.getElementById('shares').value;
    const pricePerShare = 100; // Replace with your actual price per share
    const totalPrice = shares * pricePerShare;
    document.getElementById('price').value = totalPrice;
}

function closeForm() {
    document.getElementById('signupForm').classList.add('hidden');
}

document.getElementById('signupLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signupForm').classList.remove('hidden');
});
