document.getElementById("joutukForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var education = document.getElementById("education").value;
    var job = document.getElementById("job").value;
    var looks = document.getElementById("looks").value;
    var heightFeet = parseInt(document.getElementById("heightFeet").value);
    var heightInches = parseInt(document.getElementById("heightInches").value);
    var family = parseInt(document.getElementById("family").value);
    var cooking = document.getElementById("cooking").value;

    // Calculate total height in inches
    var totalHeightInches = (heightFeet * 12) + heightInches;

    // Base Joutuk Amount
    var joutukAmount = 0;

    // Education multiplier
    switch(education) {
        case 'highschool':
            joutukAmount += 10000;
            break;
        case 'bachelor':
            joutukAmount += 20000;
            break;
        case 'master':
            joutukAmount += 30000;
            break;
        case 'phd':
            joutukAmount += 40000;
            break;
        case 'mbbs':
            joutukAmount += 50000;
            break;
    }

    // Job multiplier
    switch(job) {
        case 'doctor':
            joutukAmount += 50000;
            break;
        case 'engineer':
            joutukAmount += 40000;
            break;
        case 'pilot':
            joutukAmount += 60000;
            break;
        case 'banker':
            joutukAmount += 35000;
            break;
        case 'government_employee':
            joutukAmount += 30000;
            break;
        case 'teacher':
            joutukAmount += 25000;
            break;
        case 'lawyer':
            joutukAmount += 45000;
            break;
        case 'entrepreneur':
            joutukAmount += 70000;
            break;
    }

    // Looks multiplier
    switch(looks) {
        case 'average':
            joutukAmount += 10000;
            break;
        case 'cute':
            joutukAmount += 15000;
            break;
        case 'handsome':
            joutukAmount += 20000;
            break;
        case 'beautiful':
            joutukAmount += 25000;
            break;
        case 'gorgeous':
            joutukAmount += 30000;
            break;
    }

    // Height modifier (add more based on height)
    if (totalHeightInches >= 70) {
        joutukAmount += 20000;  // Taller than 5'10"
    } else if (totalHeightInches >= 66) {
        joutukAmount += 10000;  // 5'6" to 5'10"
    }

    // Family background multiplier
    switch(family) {
        case 1:
            joutukAmount += 5000;
            break;
        case 2:
            joutukAmount += 10000;
            break;
        case 3:
            joutukAmount += 15000;
            break;
        case 4:
            joutukAmount += 20000;
            break;
        case 5:
            joutukAmount += 25000;
            break;
    }

    // Cooking skills multiplier
    switch(cooking) {
        case 'poor':
            joutukAmount += 5000;
            break;
        case 'average':
            joutukAmount += 10000;
            break;
        case 'good':
            joutukAmount += 15000;
            break;
        case 'excellent':
            joutukAmount += 20000;
            break;
    }

    // Display the result
    document.getElementById("joutukAmount").innerText = joutukAmount;

    // Display the list of items
    var itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = ""; // Clear previous list

    // Determine items based on joutukAmount
    if (joutukAmount >= 100000) {
        itemsList.innerHTML += "<li>New Car</li>";
        itemsList.innerHTML += "<li>5 Gram Gold</li>";
        itemsList.innerHTML += "<li>Luxury Refrigerator</li>";
        itemsList.innerHTML += "<li>Air Conditioner</li>";
    } else if (joutukAmount >= 70000) {
        itemsList.innerHTML += "<li>New Bike</li>";
        itemsList.innerHTML += "<li>2 Gram Gold</li>";
        itemsList.innerHTML += "<li>Air Conditioner</li>";
    } else if (joutukAmount >= 50000) {
        itemsList.innerHTML += "<li>Used Car</li>";
        itemsList.innerHTML += "<li>1 Gram Gold</li>";
        itemsList.innerHTML += "<li>Refrigerator</li>";
    } else {
        itemsList.innerHTML += "<li>Basic Bike</li>";
        itemsList.innerHTML += "<li>Gold Plated Jewelry</li>";
    }

    // Show the result section
    document.getElementById("result").style.display = "block";
});

function goBack() {
    // Hide the result and reset the form
    document.getElementById("result").style.display = "none";
    document.getElementById("joutukForm").reset();
}
