document.getElementById("joutukForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ethical disclaimer alert
    if(!confirm("WARNING: This calculator is a satirical critique of dowry practices. We strongly oppose this illegal tradition. Continue?")) {
        return;
    }

    // Configuration object for easy adjustments
    const MULTIPLIERS = {
        EDUCATION: {
            highschool: 50000,
            bachelor: 100000,
            master: 150000,
            phd: 200000,
            mbbs: 300000
        },
        JOB: {
            teacher: 100000,
            banker: 150000,
            engineer: 200000,
            lawyer: 250000,
            government_employee: 180000,
            doctor: 300000,
            pilot: 400000,
            entrepreneur: 350000
        },
        LOOKS: {
            average: 50000,
            cute: 100000,
            handsome: 150000,
            beautiful: 200000,
            gorgeous: 250000
        },
        FAMILY: {
            1: 50000,   // Very Modest
            2: 100000,  // Modest
            3: 150000,  // Average
            4: 200000,  // Well-off
            5: 300000   // Wealthy
        },
        COOKING: {
            poor: 0,
            average: 50000,
            good: 100000,
            excellent: 150000
        },
        HEIGHT: {
            base: 66,  // 5'6" in inches
            perInch: 10000
        }
    };

    // Get input values
    const getValue = id => document.getElementById(id).value;
    const heightFeet = parseInt(getValue("heightFeet")) || 0;
    const heightInches = parseInt(getValue("heightInches")) || 0;

    // Validate inputs
    if (heightFeet < 0 || heightInches < 0 || heightInches > 11) {
        alert("Please enter valid height measurements!");
        return;
    }

    // Calculate components
    const totalHeight = heightFeet * 12 + heightInches;
    const heightBonus = Math.max(0, (totalHeight - MULTIPLIERS.HEIGHT.base)) * MULTIPLIERS.HEIGHT.perInch;

    // Calculate base joutuk
    let joutuk = 500000; // Base amount

    // Add bonuses
    joutuk += MULTIPLIERS.EDUCATION[getValue("education")];
    joutuk += MULTIPLIERS.JOB[getValue("job")];
    joutuk += MULTIPLIERS.LOOKS[getValue("looks")];
    joutuk += MULTIPLIERS.FAMILY[getValue("family")];
    joutuk += MULTIPLIERS.COOKING[getValue("cooking")];
    joutuk += heightBonus;

    // Cap between 500k to 5 million
    joutuk = Math.min(Math.max(joutuk, 500000), 5000000);

    // Display results
    const formatCurrency = num => num.toLocaleString('en-IN', {style: 'currency', currency: 'INR'});
    document.getElementById("joutukAmount").textContent = formatCurrency(joutuk).replace('₹', '৳');

    // Generate items list
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = ""; // Reset
    
    const items = [];
    if (joutuk >= 3000000) {
        items.push("🏎️ Luxury Car", "🏢 Apartment", "🥇 1kg Gold", "✈️ International Vacation");
    } else if (joutuk >= 2000000) {
        items.push("🚗 Premium Car", "🏡 Land Property", "🥈 500g Gold", "🌴 Resort Vacation");
    } else if (joutuk >= 1000000) {
        items.push("🚙 Family Car", "💍 Diamond Set", "🥉 250g Gold");
    } else {
        items.push("🛵 Scooter", "📱 Smartphone", "⌚ Wristwatch");
    }

    items.forEach(item => {
        itemsList.innerHTML += `<li>${item}</li>`;
    });

    // Show results
    document.getElementById("result").style.display = "block";
});

function goBack() {
    document.getElementById("result").style.display = "none";
    document.getElementById("joutukForm").reset();
}
