document.getElementById("joutukForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const education = document.getElementById("education").value;
    const job = document.getElementById("job").value;
    const looks = parseInt(document.getElementById("looks").value);
    const height = parseInt(document.getElementById("height").value);
    const family = parseInt(document.getElementById("family").value);
    const cooking = parseInt(document.getElementById("cooking").value);

    // Initialize the Joutuk amount
    let joutukAmount = 10000 + (looks * 1000) + (height * 500) + (family * 2000) + (cooking * 500);

    // Adjust Joutuk based on education level
    if (education === "highschool") {
        joutukAmount += 0;
    } else if (education === "bachelor") {
        joutukAmount += 5000;
    } else if (education === "master") {
        joutukAmount += 10000;
    } else if (education === "phd") {
        joutukAmount += 15000;
    }

    // Display the result
    document.getElementById("joutukAmount").textContent = joutukAmount.toLocaleString();
    document.getElementById("result").style.display = "block";
    document.getElementById("joutukForm").style.display = "none";
});

// Function to go back to the form
function goBack() {
    document.getElementById("result").style.display = "none";
    document.getElementById("joutukForm").style.display = "block";
}
