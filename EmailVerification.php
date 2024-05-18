<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "Embula";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fname = $_POST["FName"];
    $lname = $_POST["LName"];
    $mobileNum = $_POST["MobileNum"];
    $email = $_POST["Email"];
    $password = $_POST["Password"];
    $confirmPassword = $_POST["ConfirmPassword"];

    // Insert data into the database
    $sql = "INSERT INTO user_data(firstname, lastname, mobile_number, email, password_hash) 
            VALUES ('$fname', '$lname', '$mobileNum', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "You have registered successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close database connection
$conn->close();
?>
