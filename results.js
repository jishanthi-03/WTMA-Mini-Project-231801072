document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("#userTable tbody");
    let storedData = JSON.parse(localStorage.getItem("signupData")) || [];

    // Debugging: Check if data is retrieved properly
    console.log("Retrieved Data:", storedData);

    if (storedData.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='8'>No signup data found</td></tr>";
        return;
    }

    storedData.forEach(user => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = user.firstName;
        row.insertCell(1).innerText = user.lastName;
        row.insertCell(2).innerText = user.email;
        row.insertCell(3).innerText = user.dob;
        row.insertCell(4).innerText = user.age;
        row.insertCell(5).innerText = user.gender;
        row.insertCell(6).innerText = user.phone;
        row.insertCell(7).innerText = user.address;
    });
});