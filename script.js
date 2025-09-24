document.getElementById("joutukForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Values mapping (all positive)
    const educationValues = {
        bachelor: 90000,
        master: 95000,
        phd: 100000
    };

    const jobValues = {
        doctor: 300000,
        engineer: 160000,
        pilot: 400000,
        banker: 200000,
        government_employee: 200000,
        teacher: 80000,
        lawyer: 90000,
        entrepreneur: 70000
    };

    const familyValues = {
        poor: 50000,
        middle_class: 90000,
        rich: 120000
    };

    const heightValues = {
        "1-3": 20000,
        "4": 40000,
        "5": 60000,
        "6": 100000
    };

    const looksValues = {
        average: 40000,
        good: 50000,
        handsome: 60000
    };

    const cookingValues = {
        cannot_cook: 0,
        average: 30000,
        good: 60000,
        excellent: 70000
    };

    // Get selected values
    const education = document.getElementById("education").value;
    const job = document.getElementById("job").value;
    const family = document.getElementById("family").value;
    const height = document.getElementById("height").value;
    const looks = document.getElementById("looks").value;
    const cooking = document.getElementById("cooking").value;

    // Calculate total Joutuk
    let total = 0;

    total += educationValues[education];
    total += jobValues[job];
    total += familyValues[family];
    total += heightValues[height];
    total += looksValues[looks];
    total += cookingValues[cooking];

   // Determine bonus
let bonusText = "No bonus";
if(total >= 400000) {
    bonusText = "🥇 23.32 gram gold, 🏍️ 250cc Motorbike, and 🧊 Refrigerator";
} else if(total >= 300000) {
    bonusText = "🥇 23.32 gram gold and 🏍️ 150cc Motorbike";
} else if(total >= 200000) {
    bonusText = "🥇 11.66 gram gold";
}


    // Show result
    document.getElementById("joutukAmount").textContent = total.toLocaleString();
    document.getElementById("bonusAmount").textContent = bonusText;

    document.getElementById("result").style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
});

// Go back button
function goBack() {
    document.getElementById("result").style.display = "none";
}
