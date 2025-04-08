<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $education = $_POST['education'];
    $job = $_POST['job'];
    $looks = $_POST['looks'];
    $height = $_POST['height'];
    $family = $_POST['family'];
    $cooking = $_POST['cooking'];

    // Calculate Joutuk based on inputs (you can make it more complex)
    $joutukAmount = 10000 + ($looks * 1000) + ($height * 500) + ($family * 2000) + ($cooking * 500);
    
    // Adjust Joutuk based on education level
    if ($education == "highschool") {
        $joutukAmount += 0;
    } elseif ($education == "bachelor") {
        $joutukAmount += 5000;
    } elseif ($education == "master") {
        $joutukAmount += 10000;
    } elseif ($education == "phd") {
        $joutukAmount += 15000;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joutuk Calculator Result</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Joutuk Calculation Result</h1>
        <p>Your calculated Joutuk amount is: <strong>৳<?php echo number_format($joutukAmount, 2); ?></strong></p>
        <a href="index.html"><button>Go Back</button></a>
    </div>
</body>
</html>
