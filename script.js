// Show the Sign Up Form
document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from redirecting
    document.getElementById("signupForm").classList.remove("hidden");
});

// Close the Sign Up Form
function closeForm() {
    document.getElementById("signupForm").classList.add("hidden");
}

// Calculate Price
function calculatePrice() {
    let shares = document.getElementById("shares").value;
    document.getElementById("price").value = shares * 5000;
}

// Handle Registration Form Submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = {
        referenceNumber: document.getElementById("referenceNumber").value,
        idNumber: document.getElementById("idNumber").value,
        fullName: document.getElementById("fullName").value,
        address: document.getElementById("address").value,
        district: document.getElementById("district").value,
        email: document.getElementById("email").value,
        phone1: document.getElementById("phone1").value,
        phone2: document.getElementById("phone2").value,
        shares: document.getElementById("shares").value,
        price: document.getElementById("price").value,
        username: document.getElementById("regUsername").value,
        password: document.getElementById("regPassword").value,
    };

    // Save data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to index.html
    window.location.href = "index.html";
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData && formData.username === username && formData.password === password) {
        alert("Login successful!");
        // Redirect to user dashboard
        window.location.href = "user-dashboard.html";
    } else if (username === "admin" && password === "admin123") {
        // Redirect to admin page
        window.location.href = "admin.html";
    } else {
        alert("Invalid username or password!");
    }
});
