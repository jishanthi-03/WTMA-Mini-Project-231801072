document.getElementById("signupBtn").addEventListener("click", function () {
    let valid = true;

    // Get form values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    // Validation
    if (!/^[A-Za-z]{4,}$/.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "Invalid first name!";
        valid = false;
    }
    if (!/^[A-Za-z]{1,}$/.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Invalid last name!";
        valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email!";
        valid = false;
    }
    if (!dob) {
        document.getElementById("dobError").innerHTML = "Enter DOB!";
        valid = false;
    }
    if (!/^\d{2}$/.test(age)) {
        document.getElementById("ageError").innerHTML = "Age should be 2 digits!";
        valid = false;
    }
    if (!gender) {
        document.getElementById("genderError").innerHTML = "Select gender!";
        valid = false;
    }
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Invalid phone number!";
        valid = false;
    }
    if (address.length === 0) {
        document.getElementById("addressError").innerHTML = "Enter address!";
        valid = false;
    }

    // If form is valid, store data and redirect
    if (valid) {
        let userData = {
            firstName,
            lastName,
            email,
            dob,
            age,
            gender: gender.value,
            phone,
            address
        };

        // Store data in localStorage
        let storedData = JSON.parse(localStorage.getItem("signupData")) || [];
        storedData.push(userData);
        localStorage.setItem("signupData", JSON.stringify(storedData));

        // Debugging: Check stored data before redirecting
        console.log("Stored Data:", localStorage.getItem("signupData"));

        // Redirect to results page
        window.location.href = "results.html";
    }
});
