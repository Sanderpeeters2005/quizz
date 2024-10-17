<?php
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$score = $data['score'];

// Maak verbinding met de database
$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer verbinding
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}

// Invoegen in de leaderboard tabel
$sql = "INSERT INTO leaderboard (name, score) VALUES ('$name', '$score')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
