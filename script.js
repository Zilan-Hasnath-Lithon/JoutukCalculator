document.getElementById("joutukForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form fields
    const education = document.getElementById("education").value;
    const job = document.getElementById("job").value;
    const looks = document.getElementById("looks").value;
    const heightFeet = parseInt(document.getElementById("heightFeet").value);
    const heightInches = parseInt(document.getElementById("heightInches").value);
    const family = parseInt(document.getElementById("family").value);
    const cooking = document.getElementById("cooking").value;

    // Convert height to inches (1 foot = 12 inches)
    const totalHeightInInches = (heightFeet * 12) + heightInches;

    // Initialize the Joutuk amount
    let joutukAmount = 10000 + (totalHeightInInches * 100) + (family * 2000);

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

    // Adjust Joutuk based on job level
    if (job === "doctor") {
        joutukAmount += 10000;
    } else if (job === "engineer") {
        joutukAmount += 7000;
    } else if (job === "pilot") {
        joutukAmount += 12000;
    } else if (job === "banker") {
        joutukAmount += 8000;
    } else if (job === "government_employee") {
        joutukAmount += 5000;
    } else if (job === "teacher") {
        joutukAmount += 4000;
    } else if (job === "lawyer") {
        joutukAmount += 10000;
    } else if (job === "entrepreneur") {
        joutukAmount += 15000;
    }

    // Adjust Joutuk based on looks rating
    if (looks === "average") {
        joutukAmount += 1000;
    } else if (looks === "cute") {
        joutukAmount += 3000;
    } else if (looks === "handsome") {
        joutukAmount += 5000;
    } else if (looks === "beautiful") {
        joutukAmount += 7000;
    } else if (looks === "gorgeous") {
        joutukAmount += 10000;
    }

    // Adjust Joutuk based on cooking skills
    if (cooking === "poor") {
        joutukAmount += 0;
    } else if (cooking === "average") {
        joutukAmount += 2000;
    } else if (cooking === "good") {
        joutukAmount += 5000;
    } else if (cooking === "excellent") {
        joutukAmount += 10000;
    }

    // Display the result
    document.getElementById("joutukAmount").textContent = joutukAmount.toLocaleString();
    
    // Determine what the user gets with the Joutuk
    let items = [];
    if (joutukAmount >= 500000) {
        items.push("New Car or a New Bike");
        items.push("2 grams of Gold");
        items.push("Air Conditioner");
        items.push("Refrigerator");
    } else if (joutukAmount >= 200000) {
        items.push("Used Car or a Used Bike");
        items.push("1 gram of Gold");
        items.push("Air Conditioner");
    } else if (joutukAmount >= 100000) {
        items.push("Scooter or Bike");
        items.push("500 mg of Gold");
    } else {
        items.push("Small Gifts and a Few Accessories");
    }

    // Display the items on the result page
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemsList.appendChild(li);
    });

    document.getElementById("result").style.display = "block";
    document.getElementById("joutukForm").style.display = "none";
});

// Function to go back to the form
function goBack() {
    document.getElementById("result").style.display = "none";
    document.getElementById("joutukForm").style.display = "block";
}
